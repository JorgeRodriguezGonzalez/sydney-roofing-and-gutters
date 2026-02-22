import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuración
const DOMAIN = 'https://sydneyroofingandgutters.com.au';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Prioridades por tipo de página
const PRIORITIES = {
  home: '1.0',
  main: '0.9',
  service: '0.8',
  location: '0.7',
  blog: '0.6',
};

// Frecuencias de cambio por tipo
const CHANGEFREQ = {
  home: 'daily',
  main: 'weekly',
  service: 'monthly',
  location: 'monthly',
  blog: 'weekly',
};

// Determinar tipo de página según la ruta
function getPageType(route) {
  if (route === '/') return 'home';
  if (route.startsWith('/blog/')) return 'blog';
  if (route.startsWith('/roofers-')) return 'location';
  if (['/about-us', '/contact-us', '/gallery', '/projects', '/blog', '/locations'].includes(route)) return 'main';
  return 'service';
}

// Rutas a excluir del sitemap
const EXCLUDED_ROUTES = [
  '/admin',
  '/private',
  '/.netlify',
  '/404',
  '*',
];

// Función para extraer rutas de un archivo de ruta individual
function extractPathFromRouteFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Buscar: path: "/algo" o path: '/algo'
    const pathRegex = /path:\s*["']([^"']+)["']/;
    const match = content.match(pathRegex);
    
    if (match && match[1]) {
      return match[1];
    }
    
    return null;
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return null;
  }
}

// Función principal para extraer todas las rutas de app.tsx
function extractRoutesFromAppTsx() {
  const appTsxPath = path.join(__dirname, '../src/App.tsx');
  
  if (!fs.existsSync(appTsxPath)) {
    console.error('❌ Error: App.tsx not found at', appTsxPath);
    process.exit(1);
  }
  
  const appTsxContent = fs.readFileSync(appTsxPath, 'utf-8');
  const routes = new Set();
  
  // Patrón 1: import { route as xxxRoute } from "./routes/xxx"
  const importRegex1 = /import\s*{\s*route\s+as\s+\w+\s*}\s*from\s*["']\.\/routes\/([\w\-\/]+)["']/g;
  let match;
  
  while ((match = importRegex1.exec(appTsxContent)) !== null) {
    const routeFile = match[1];
    const routeFilePath = path.join(__dirname, `../src/routes/${routeFile}.tsx`);
    
    if (fs.existsSync(routeFilePath)) {
      const routePath = extractPathFromRouteFile(routeFilePath);
      if (routePath && !EXCLUDED_ROUTES.includes(routePath) && !EXCLUDED_ROUTES.some(excluded => routePath.startsWith(excluded))) {
        routes.add(routePath);
      }
    }
  }
  
  // Patrón 2: import xxxRoute from "./routes/blog/xxx"
  const importRegex2 = /import\s+\w+\s+from\s*["']\.\/routes\/([\w\-\/]+)["']/g;
  
  while ((match = importRegex2.exec(appTsxContent)) !== null) {
    const routeFile = match[1];
    const routeFilePath = path.join(__dirname, `../src/routes/${routeFile}.tsx`);
    
    if (fs.existsSync(routeFilePath)) {
      const routePath = extractPathFromRouteFile(routeFilePath);
      if (routePath && !EXCLUDED_ROUTES.includes(routePath) && !EXCLUDED_ROUTES.some(excluded => routePath.startsWith(excluded))) {
        routes.add(routePath);
      }
    }
  }
  
  // Patrón 3: Rutas inline en el router (ej: { path: "/algo", element: ... })
  const inlineRouteRegex = /{\s*path:\s*["']([^"']+)["']\s*,\s*element:/g;
  
  while ((match = inlineRouteRegex.exec(appTsxContent)) !== null) {
    const routePath = match[1];
    if (!EXCLUDED_ROUTES.includes(routePath) && !EXCLUDED_ROUTES.some(excluded => routePath.startsWith(excluded))) {
      routes.add(routePath);
    }
  }
  
  // Convertir Set a Array y ordenar
  return Array.from(routes).sort();
}

// Generar XML del sitemap
function generateSitemapXML(routes) {
  const now = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  const urlEntries = routes.map(route => {
    const pageType = getPageType(route);
    const priority = PRIORITIES[pageType] || '0.5';
    const changefreq = CHANGEFREQ[pageType] || 'monthly';
    
    // Las rutas ya vienen con trailing slash desde app.tsx
    // Solo normalizamos por si acaso
    const normalizedRoute = route.endsWith('/') ? route : route === '/' ? route : `${route}/`;
    
    return `  <url>
    <loc>${DOMAIN}${normalizedRoute}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join('\n');
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlEntries}
</urlset>`;
}

// Función principal
function generateSitemap() {
  console.log('\n🔍 Extracting routes from App.tsx...');
  const routes = extractRoutesFromAppTsx();
  
  if (routes.length === 0) {
    console.error('❌ No routes found in App.tsx');
    process.exit(1);
  }
  
  console.log(`✅ Found ${routes.length} routes`);
  console.log('📝 Generating sitemap.xml...');
  
  const sitemapXML = generateSitemapXML(routes);
  
  // Crear directorio public si no existe
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  // Escribir sitemap.xml
  fs.writeFileSync(OUTPUT_PATH, sitemapXML, 'utf-8');
  
  console.log(`✅ Sitemap generated successfully at: ${OUTPUT_PATH}`);
  console.log(`📊 Total URLs: ${routes.length}`);
  
  // Mostrar primeras 10 rutas como preview
  console.log('\n📋 Preview (first 10 routes):');
  routes.slice(0, 10).forEach(route => {
    const type = getPageType(route);
    console.log(`   - ${DOMAIN}${route} [${type}]`);
  });
  
  if (routes.length > 10) {
    console.log(`   ... and ${routes.length - 10} more routes`);
  }
  
  console.log('\n✨ Sitemap generation complete!\n');
}

// Ejecutar
try {
  generateSitemap();
} catch (error) {
  console.error('❌ Error generating sitemap:', error);
  process.exit(1);
}
