// Configuración de Schema Markup para todas las páginas
export interface PageSchemaConfig {
  path: string;
  title: string;
  description: string;
  keywords: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
  canonicalUrl?: string;
  schemaType: 'RoofingContractor' | 'Service' | 'ProfessionalService';
  service?: string;
  location: 'newcastle' | 'surrounding';
  customName: string;
  customDescription: string;
}

export const schemaConfig: PageSchemaConfig[] = [
  // Páginas principales
  {
    path: '/',
    title: 'Newcastle Local Roofers - Professional Roofing Services | 24/7 Emergency',
    description: '24/7 emergency roofing services in Newcastle, NSW. Expert roof repairs, replacements, restoration & installations. Call (02) 4089 4613 for immediate assistance.',
    keywords: 'newcastle roofers, roof repairs newcastle, emergency roof repairs, roof replacement newcastle, roof restoration, roofing contractors newcastle, nsw roofing',
    ogTitle: 'Newcastle Local Roofers - 24/7 Emergency Roofing Services',
    ogDescription: 'Trusted roofing specialists in Newcastle providing 24/7 emergency services. Expert repairs, replacements, and installations.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roofing-services-newcastle.jpg',
    schemaType: 'RoofingContractor',
    location: 'newcastle',
    customName: 'Newcastle Local Roofers',
    customDescription: 'Professional roofing contractor providing 24/7 emergency services in Newcastle, NSW'
  },
  {
    path: '/about-us',
    title: 'About Newcastle Local Roofers - Expert Roofing Team',
    description: 'Learn about Newcastle Local Roofers expert team. Professional roofing contractors specializing in repairs, replacements, and 24/7 emergency services across Newcastle.',
    keywords: 'about newcastle roofers, roofing team newcastle, professional roofers, newcastle roofing company, licensed roofers nsw',
    ogTitle: 'About Newcastle Local Roofers - Expert Roofing Team',
    ogDescription: 'Meet Newcastle\'s trusted roofing professionals. Quality workmanship and 24/7 emergency service.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roofing-team-newcastle.jpg',
    schemaType: 'RoofingContractor',
    location: 'newcastle',
    customName: 'Newcastle Local Roofers',
    customDescription: 'Newcastle\'s trusted roofing specialists providing professional services since establishment'
  },
  {
    path: '/contact-us',
    title: 'Contact Newcastle Local Roofers - 24/7 Emergency Service',
    description: 'Contact Newcastle Local Roofers for immediate assistance. Call (02) 4089 4613 for 24/7 emergency roofing services. Free quotes available.',
    keywords: 'contact newcastle roofers, emergency roofing contact, roof repair quote, newcastle roofing contractor contact, 24/7 roofer',
    ogTitle: 'Contact Newcastle Local Roofers - 24/7 Emergency',
    ogDescription: 'Get immediate roofing assistance. Call (02) 4089 4613 for 24/7 emergency service in Newcastle.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/emergency-roofing-newcastle.jpg',
    schemaType: 'RoofingContractor',
    location: 'newcastle',
    customName: 'Newcastle Local Roofers',
    customDescription: 'Professional roofing services in Newcastle with 24/7 emergency response'
  },
  {
    path: '/gallery',
    title: 'Roofing Gallery - Our Completed Projects in Newcastle',
    description: 'View our portfolio of completed roofing projects across Newcastle. Quality roof repairs, replacements, and installations showcasing our expertise.',
    keywords: 'roofing gallery newcastle, roof repair projects, roof replacement examples, newcastle roofing photos, completed roofing work',
    ogTitle: 'Roofing Gallery - Our Best Projects',
    ogDescription: 'Explore our portfolio of quality roofing projects across Newcastle. Professional workmanship and attention to detail.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roofing-gallery-newcastle.jpg',
    schemaType: 'RoofingContractor',
    location: 'newcastle',
    customName: 'Newcastle Local Roofers',
    customDescription: 'Professional roofing services in Newcastle, NSW'
  },
  {
    path: '/projects',
    title: 'Roofing Projects - Completed Works in Newcastle',
    description: 'Browse our completed roofing projects across Newcastle. From residential to commercial, see our expertise in roof repairs, replacements, and installations.',
    keywords: 'roofing projects newcastle, completed roofs, roof repair examples, roof replacement projects, residential roofing',
    ogTitle: 'Roofing Projects - Our Completed Works',
    ogDescription: 'Discover our completed roofing projects showcasing quality craftsmanship and professional installation.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roofing-projects-newcastle.jpg',
    schemaType: 'RoofingContractor',
    location: 'newcastle',
    customName: 'Newcastle Local Roofers',
    customDescription: 'Professional roofing services in Newcastle, NSW'
  },
  {
    path: '/blog',
    title: 'Roofing Blog - Tips, Maintenance & Expert Advice',
    description: 'Expert advice on roof maintenance, repair tips, and roofing trends. Stay updated with the latest roofing technology and best practices from Newcastle specialists.',
    keywords: 'roofing blog, roof maintenance tips, roof repair advice, roofing trends, newcastle roofing tips',
    ogTitle: 'Roofing Blog - Expert Tips & Advice',
    ogDescription: 'Get expert advice on roof maintenance, repairs, and trends from Newcastle\'s leading roofing specialists.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roofing-blog-newcastle.jpg',
    schemaType: 'RoofingContractor',
    location: 'newcastle',
    customName: 'Newcastle Local Roofers',
    customDescription: 'Professional roofing services in Newcastle, NSW'
  },

  // Páginas de servicios principales
  {
    path: '/roof-repairs',
    title: 'Roof Repairs Newcastle - Professional & Fast Service | 24/7',
    description: 'Expert roof repair services in Newcastle. Fast response, quality workmanship, 24/7 emergency repairs. Call (02) 4089 4613 for immediate assistance.',
    keywords: 'roof repairs newcastle, emergency roof repair, roof leak repair, broken roof tiles, storm damage repair, roof maintenance newcastle',
    ogTitle: 'Roof Repairs Newcastle - Professional & Fast',
    ogDescription: 'Expert roof repairs in Newcastle. 24/7 emergency service, fast response, quality guaranteed. Call now.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roof-repairs-newcastle.jpg',
    schemaType: 'Service',
    service: 'roof-repairs',
    location: 'newcastle',
    customName: 'Roof Repairs Newcastle',
    customDescription: 'Professional roof repair services in Newcastle with 24/7 emergency response'
  },
  {
    path: '/roof-replacement',
    title: 'Roof Replacement Newcastle - Complete Roof Replacement Services',
    description: 'Complete roof replacement services in Newcastle. Quality materials, expert installation, competitive pricing. Free quotes. Call (02) 4089 4613.',
    keywords: 'roof replacement newcastle, new roof installation, complete roof replacement, roof upgrade, metal roofing, tile roofing newcastle',
    ogTitle: 'Roof Replacement Newcastle - Quality Installation',
    ogDescription: 'Transform your property with our professional roof replacement services. Quality materials and expert installation.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roof-replacement-newcastle.jpg',
    schemaType: 'Service',
    service: 'roof-replacement',
    location: 'newcastle',
    customName: 'Roof Replacement Newcastle',
    customDescription: 'Complete roof replacement services in Newcastle, NSW'
  },
  {
    path: '/roof-restoration',
    title: 'Roof Restoration Newcastle - Restore Your Roof to Like New',
    description: 'Professional roof restoration services in Newcastle. Cleaning, repairs, repainting, and sealing. Extend your roof\'s life. Call (02) 4089 4613.',
    keywords: 'roof restoration newcastle, roof cleaning, roof painting, roof sealing, roof rejuvenation, restore old roof newcastle',
    ogTitle: 'Roof Restoration Newcastle - Professional Service',
    ogDescription: 'Restore your roof to like-new condition. Professional cleaning, repairs, and sealing services in Newcastle.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roof-restoration-newcastle.jpg',
    schemaType: 'Service',
    service: 'roof-restoration',
    location: 'newcastle',
    customName: 'Roof Restoration Newcastle',
    customDescription: 'Professional roof restoration services in Newcastle, NSW'
  },
  {
    path: '/new-roof-installation',
    title: 'New Roof Installation Newcastle - Expert Installation Services',
    description: 'New roof installation services in Newcastle. Residential & commercial. Metal, tile, and Colorbond roofing. Quality guaranteed. Call (02) 4089 4613.',
    keywords: 'new roof installation newcastle, roof installation, metal roof installation, tile roof installation, colorbond roofing, new home roofing',
    ogTitle: 'New Roof Installation Newcastle - Expert Service',
    ogDescription: 'Professional new roof installation for residential and commercial properties. Quality materials and expert workmanship.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/new-roof-installation-newcastle.jpg',
    schemaType: 'Service',
    service: 'new-roof-installation',
    location: 'newcastle',
    customName: 'New Roof Installation Newcastle',
    customDescription: 'Expert new roof installation services in Newcastle, NSW'
  },
  {
    path: '/emergency-roof-repairs',
    title: 'Emergency Roof Repairs Newcastle - 24/7 Immediate Response',
    description: '24/7 emergency roof repair service in Newcastle. Immediate response for storm damage, leaks, and urgent repairs. Call (02) 4089 4613 now.',
    keywords: 'emergency roof repairs newcastle, 24/7 roof repair, urgent roof repair, storm damage repair, emergency roofer, immediate roof repair',
    ogTitle: 'Emergency Roof Repairs Newcastle - 24/7 Service',
    ogDescription: 'Immediate emergency roof repair service. Available 24/7 for urgent repairs in Newcastle. Fast response guaranteed.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/emergency-roof-repairs-newcastle.jpg',
    schemaType: 'Service',
    service: 'emergency-roof-repairs',
    location: 'newcastle',
    customName: 'Emergency Roof Repairs Newcastle',
    customDescription: '24/7 emergency roof repair services in Newcastle with immediate response'
  },
  {
    path: '/roof-inspections',
    title: 'Roof Inspections Newcastle - Professional Roof Assessment',
    description: 'Professional roof inspection services in Newcastle. Detailed assessment, leak detection, and maintenance recommendations. Call (02) 4089 4613.',
    keywords: 'roof inspections newcastle, roof assessment, roof check, pre-purchase roof inspection, roof condition report, roof maintenance inspection',
    ogTitle: 'Roof Inspections Newcastle - Professional Assessment',
    ogDescription: 'Thorough roof inspections and assessments. Identify problems early and save on costly repairs.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/roof-inspections-newcastle.jpg',
    schemaType: 'Service',
    service: 'roof-inspections',
    location: 'newcastle',
    customName: 'Roof Inspections Newcastle',
    customDescription: 'Professional roof inspection services in Newcastle, NSW'
  },
  {
    path: '/gutter-repairs',
    title: 'Gutter Repairs & Replacement Newcastle - Expert Service',
    description: 'Gutter repair and replacement services in Newcastle. Fix leaks, blockages, and damaged gutters. Quality workmanship. Call (02) 4089 4613.',
    keywords: 'gutter repairs newcastle, gutter replacement, gutter installation, gutter cleaning, downpipe repair, gutter maintenance newcastle',
    ogTitle: 'Gutter Repairs & Replacement Newcastle',
    ogDescription: 'Professional gutter repair and replacement services. Protect your home from water damage with quality gutters.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/gutter-repairs-newcastle.jpg',
    schemaType: 'Service',
    service: 'gutter-repairs',
    location: 'newcastle',
    customName: 'Gutter Repairs Newcastle',
    customDescription: 'Professional gutter repair and replacement services in Newcastle, NSW'
  },
  {
    path: '/leak-detection',
    title: 'Leak Detection & Repairs Newcastle - Find & Fix Roof Leaks',
    description: 'Professional leak detection and repair services in Newcastle. Advanced techniques to locate and fix roof leaks. Call (02) 4089 4613.',
    keywords: 'leak detection newcastle, roof leak detection, find roof leak, leak repair, water damage repair, roof leak specialist',
    ogTitle: 'Leak Detection & Repairs Newcastle - Expert Service',
    ogDescription: 'Expert leak detection and repair services. We find and fix roof leaks quickly and effectively.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/leak-detection-newcastle.jpg',
    schemaType: 'Service',
    service: 'leak-detection',
    location: 'newcastle',
    customName: 'Leak Detection Newcastle',
    customDescription: 'Professional leak detection and repair services in Newcastle, NSW'
  },

  // Página de ubicaciones
  {
    path: '/locations',
    title: 'Service Areas | Newcastle Local Roofers Coverage',
    description: 'Newcastle Local Roofers serves Newcastle and surrounding suburbs. Professional roofing services across the Hunter Region. Call (02) 4089 4613.',
    keywords: 'newcastle roofers service areas, roofing newcastle suburbs, hunter region roofers, local roofers newcastle',
    ogTitle: 'Service Areas | Newcastle Local Roofers',
    ogDescription: 'Professional roofing services across Newcastle and surrounding suburbs in the Hunter Region.',
    ogImage: 'https://newcastlelocalroofers.com.au/images/service-areas-newcastle.jpg',
    schemaType: 'RoofingContractor',
    location: 'newcastle',
    customName: 'Newcastle Local Roofers',
    customDescription: 'Professional roofing services across Newcastle and surrounding areas'
  }
];

// Función helper para obtener configuración por path
export const getSchemaConfigByPath = (path: string): PageSchemaConfig | undefined => {
  return schemaConfig.find(config => config.path === path);
};

// Función helper para obtener configuración por tipo de servicio
export const getSchemaConfigByService = (service: string): PageSchemaConfig | undefined => {
  return schemaConfig.find(config => config.service === service);
};
