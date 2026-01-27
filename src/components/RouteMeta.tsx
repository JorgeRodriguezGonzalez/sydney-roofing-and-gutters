import { useMatches, useLocation } from 'react-router';
import SEOHead from './SEOHead';
import { SchemaType, ServiceType, LocationType } from './SchemaMarkup';
import { getSchemaConfigByPath } from '@/config/schemaConfig';

interface RouteHandle {
  title?: string;
  meta?: Array<{ name?: string; property?: string; content: string }>;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    ogImage?: string;
    canonicalUrl?: string;
    robots?: string;
    schemaType?: SchemaType;
    service?: ServiceType;
    location?: LocationType;
    customName?: string;
    customDescription?: string;
    customUrl?: string;
  };
}

/**
 * Componente que lee automáticamente route.handle.meta y route.handle.seo
 * de las rutas activas usando useMatches de React Router.
 * Si no hay handle definido, usa schemaConfig como fallback.
 * 
 * Uso: Colocar en Layout.tsx para aplicar metadata automáticamente
 * desde route.handle en todas las rutas.
 */
const RouteMeta = () => {
  const matches = useMatches();
  const location = useLocation();
  
  // Obtener el handle de la ruta más anidada (la última en el array)
  const match = matches[matches.length - 1];
  const handle = match?.handle as RouteHandle | undefined;
  
  // Fallback a schemaConfig si no hay handle
  const schemaConfig = getSchemaConfigByPath(location.pathname);
  
  // Extraer metadata del formato route.handle.meta (legacy)
  const legacyMeta = handle?.meta || [];
  const legacyTitle = handle?.title;
  const legacyDescription = legacyMeta.find(m => m.name === 'description')?.content;
  const legacyKeywords = legacyMeta.find(m => m.name === 'keywords')?.content;

  // Priorizar route.handle.seo sobre route.handle.meta (nuevo formato)
  const seo = handle?.seo || {};

  // Combinar valores: handle.seo > handle.meta > schemaConfig
  const title = seo.title || legacyTitle || schemaConfig?.title;
  const description = seo.description || legacyDescription || schemaConfig?.description;
  const keywords = seo.keywords || legacyKeywords || schemaConfig?.keywords;
  const ogTitle = seo.ogTitle || seo.title || legacyTitle || schemaConfig?.ogTitle;
  const ogDescription = seo.ogDescription || seo.description || legacyDescription || schemaConfig?.ogDescription;
  const ogImage = seo.ogImage || schemaConfig?.ogImage;
  const canonicalUrl = seo.canonicalUrl || match?.pathname || schemaConfig?.canonicalUrl || schemaConfig?.path;
  const robots = seo.robots;
  const schemaType = seo.schemaType || (schemaConfig?.schemaType as SchemaType | undefined);
  const service = seo.service || (schemaConfig?.service as ServiceType | undefined);
  const locationType = seo.location || (schemaConfig?.location as LocationType | undefined);
  const customName = seo.customName || schemaConfig?.customName;
  const customDescription = seo.customDescription || schemaConfig?.customDescription;
  const customUrl = seo.customUrl || schemaConfig?.canonicalUrl || schemaConfig?.path;

  // Solo renderizar si hay al menos un campo definido
  if (!title && !description && !keywords && !schemaType) {
    return null;
  }

  return (
    <SEOHead
      title={title}
      description={description}
      keywords={keywords}
      ogTitle={ogTitle}
      ogDescription={ogDescription}
      ogImage={ogImage}
      canonicalUrl={canonicalUrl}
      robots={robots}
      schemaType={schemaType}
      service={service}
      location={locationType}
      customName={customName}
      customDescription={customDescription}
      customUrl={customUrl}
    />
  );
};

export default RouteMeta;


