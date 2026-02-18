import { useEffect } from 'react';

// Tipos de Schema Markup
export type SchemaType = 'RoofingContractor' | 'Service' | 'ProfessionalService';

// Ubicaciones disponibles
export type LocationType = 'sydney' | 'surrounding';

// Servicios disponibles
export type ServiceType = 
  | 'roof-repairs'
  | 'roof-replacement'
  | 'roof-restoration'
  | 'new-roof-installation'
  | 'emergency-roof-repairs'
  | 'roof-inspections'
  | 'gutter-repairs'
  | 'leak-detection'
  // Nuevos servicios
  | 'roof-painting'
  | 'metal-roofing'
  | 'roof-installation'
  | 'roof-inspection'
  | 'roof-cleaning'
  | 'roof-maintenance'
  | 'residential-roofing'
  | 'commercial-roofing'
  | 'skylight-repair'
  | 'gutter-repair';

interface SchemaMarkupProps {
  type: SchemaType;
  service?: ServiceType;
  location?: LocationType;
  customName?: string;
  customDescription?: string;
  customUrl?: string;
}

// Datos de ubicaciones
const locationData = {
  sydney: {
    address: {
      "@type": "PostalAddress",
      "streetAddress": "5/11 West St",
      "addressLocality": "North Sydney",
      "addressRegion": "NSW",
      "postalCode": "2060",
      "addressCountry": "AU"
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": -33.8329,
      "longitude": 151.2056
    },
    areaServed: "Sydney, NSW, Australia"
  },
  surrounding: {
    address: {
      "@type": "PostalAddress",
      "streetAddress": "60 St Albans Rd",
      "addressLocality": "Schofields",
      "addressRegion": "NSW",
      "postalCode": "2762",
      "addressCountry": "AU"
    },
    geo: {
      "@type": "GeoCoordinates",
      "latitude": -33.6925,
      "longitude": 150.8749
    },
    areaServed: "Sydney and surrounding suburbs, NSW, Australia"
  }
};

// Mapeo de servicios a nombres y descripciones
const serviceData: Record<ServiceType, { name: string; description: string }> = {
  'roof-repairs': {
    name: 'Roof Repairs',
    description: 'Professional roof repair services including leak repairs, broken tile replacement, and storm damage repairs'
  },
  'roof-replacement': {
    name: 'Roof Replacement',
    description: 'Complete roof replacement services with quality materials and expert installation'
  },
  'roof-restoration': {
    name: 'Roof Restoration',
    description: 'Professional roof restoration services including cleaning, repairs, painting, and sealing'
  },
  'new-roof-installation': {
    name: 'New Roof Installation',
    description: 'Expert new roof installation for residential and commercial properties'
  },
  'emergency-roof-repairs': {
    name: 'Emergency Roof Repairs',
    description: '24/7 emergency roof repair services for urgent leaks and storm damage'
  },
  'roof-inspections': {
    name: 'Roof Inspections',
    description: 'Comprehensive roof inspection and assessment services'
  },
  'gutter-repairs': {
    name: 'Gutter Repairs & Replacement',
    description: 'Professional gutter repair, replacement, and installation services'
  },
  'leak-detection': {
    name: 'Leak Detection & Repairs',
    description: 'Expert leak detection and repair services using advanced techniques'
  },
  // Nuevos servicios
  'roof-painting': {
    name: 'Roof Painting',
    description: 'Professional roof painting, sealing, and membrane application for long-lasting protection'
  },
  'metal-roofing': {
    name: 'Metal Roofing',
    description: 'Colorbond and steel roofing installation, repairs and custom metal profiles'
  },
  'roof-installation': {
    name: 'Roof Installation',
    description: 'Expert new roof installation for homes, extensions, and commercial properties'
  },
  'roof-inspection': {
    name: 'Roof Inspection',
    description: 'Professional roof assessment, condition reports and pre-purchase inspections'
  },
  'roof-cleaning': {
    name: 'Roof Cleaning',
    description: 'High-pressure roof cleaning, moss/lichen removal and treatment'
  },
  'roof-maintenance': {
    name: 'Roof Maintenance',
    description: 'Preventive maintenance plans, seasonal checks and minor roof repairs'
  },
  'residential-roofing': {
    name: 'Residential Roofing',
    description: 'Complete roofing solutions for homes, renovations, and extensions'
  },
  'commercial-roofing': {
    name: 'Commercial Roofing',
    description: 'Business and industrial roofing with safety compliance and project management'
  },
  'skylight-repair': {
    name: 'Skylight Repair',
    description: 'Leak diagnosis, resealing, flashing repairs and skylight replacement'
  },
  'gutter-repair': {
    name: 'Gutter Repair',
    description: 'Leak fixes, bracket replacement, downpipe repairs and gutter realignment'
  }
};

const SchemaMarkup = ({ 
  type, 
  service, 
  location = 'sydney', 
  customName,
  customDescription,
  customUrl
}: SchemaMarkupProps) => {
  useEffect(() => {
    const generateSchema = () => {
      const baseUrl = 'https://sydneyroofingandgutters.com.au';
      const currentUrl = customUrl || window.location.href;
      
      // Fallback to 'sydney' if location is undefined or invalid
      const validLocation = (location && locationData[location as keyof typeof locationData]) ? location : 'sydney';
      const locData = locationData[validLocation];
      
      // Datos base del negocio
      const businessData = {
        "@context": "https://schema.org",
        "@type": type === 'RoofingContractor' ? 'RoofingContractor' : (type === 'ProfessionalService' ? 'ProfessionalService' : 'LocalBusiness'),
        "name": customName || "Sydney Roofing & Gutters",
        "description": customDescription || "Professional roofing contractor providing 24/7 emergency services in sydney, NSW. Specializing in roof repairs, replacements, restoration, and installations.",
        "address": locData.address,
        "geo": locData.geo,
        "telephone": "+611300796024",
        "url": baseUrl,
        "priceRange": "$$",
        "openingHours": "Mo-Su 00:00-24:00",
        "areaServed": locData.areaServed,
        "sameAs": [
          baseUrl,
          `${baseUrl}/about-us`,
          `${baseUrl}/contact-us`,
          `${baseUrl}/gallery`,
          `${baseUrl}/projects`
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Roofing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roof Repairs",
                "description": "Professional roof repair services for all roof types"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roof Replacement",
                "description": "Complete roof replacement with quality materials"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roof Restoration",
                "description": "Professional roof restoration and rejuvenation services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Emergency Roof Repairs",
                "description": "24/7 emergency roof repair services"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Roof Inspections",
                "description": "Comprehensive roof inspection and assessment"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Gutter Repairs",
                "description": "Professional gutter repair and replacement"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Leak Detection",
                "description": "Expert roof leak detection and repairs"
              }
            }
          ]
        }
      };

      // Agregar servicios específicos si es necesario
      if (type === 'Service' && service) {
        const serviceInfo = serviceData[service];
        return {
          ...businessData,
          "@type": "Service",
          "name": serviceInfo.name,
          "description": serviceInfo.description,
          "provider": {
            "@type": "RoofingContractor",
            "name": "Sydney Roofing & Gutters",
            "address": locData.address,
            "geo": locData.geo,
            "telephone": "+61240894613",
            "url": baseUrl,
            "openingHours": "Mo-Su 00:00-24:00"
          },
          "areaServed": locData.areaServed,
          "serviceType": serviceInfo.name,
          "url": currentUrl
        };
      }

      // Para ProfessionalService
      if (type === 'ProfessionalService') {
        return {
          ...businessData,
          "@type": "ProfessionalService",
          "serviceType": service ? serviceData[service].name : "Roofing Services",
          "description": service ? serviceData[service].description : "Professional roofing services including repairs, replacements, and installations",
          "url": currentUrl
        };
      }

      return businessData;
    };

    const schema = generateSchema();
    
    // Remover schema existente si existe
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) {
      existingSchema.remove();
    }

    // Crear nuevo script con schema
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema, null, 2);
    document.head.appendChild(script);

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [type, service, location, customName, customDescription, customUrl]);

  return null; // Este componente no renderiza nada
};

export default SchemaMarkup;
