import { useLocation } from 'react-router-dom';
import { getSchemaConfigByPath } from '@/config/schemaConfig';
import { PageSchemaConfig } from '@/config/schemaConfig';
import { SchemaType, ServiceType, LocationType } from '@/components/SchemaMarkup';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonicalUrl?: string;
  schemaType?: SchemaType;
  service?: ServiceType;
  location?: LocationType;
  customName?: string;
  customDescription?: string;
  customUrl?: string;
}

export const useSchemaMarkup = (customConfig?: Partial<PageSchemaConfig>) => {
  const location = useLocation();
  const pathConfig = getSchemaConfigByPath(location.pathname);
  
  // Combinar configuración de path con configuración personalizada
  const config: PageSchemaConfig | undefined = pathConfig ? {
    ...pathConfig,
    ...customConfig
  } : undefined;

  // Convertir a props compatibles con SEOHead
  const seoProps: SEOProps | undefined = config ? {
      title: config.title,
      description: config.description,
      keywords: config.keywords,
      ogTitle: config.ogTitle,
      ogDescription: config.ogDescription,
      ogImage: config.ogImage,
    canonicalUrl: config.canonicalUrl || config.path,
    schemaType: config.schemaType as SchemaType,
    service: config.service as ServiceType | undefined,
    location: config.location as LocationType,
      customName: config.customName,
    customDescription: config.customDescription,
    customUrl: config.canonicalUrl || config.path
  } : undefined;

  return {
    config,
    hasSchema: !!config,
    seoProps
  };
};
