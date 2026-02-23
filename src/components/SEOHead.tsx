import { Helmet } from 'react-helmet-async';
import SchemaMarkup, { SchemaType, ServiceType, LocationType } from './SchemaMarkup';

interface SEOHeadProps {
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
}

const BASE_URL = 'https://sydneyroofingandgutters.com.au';

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonicalUrl,
  robots = 'index, follow',
  schemaType,
  service,
  location,
  customName,
  customDescription,
  customUrl
}: SEOHeadProps) => {
  // Construir canonical URL
  const canonical = canonicalUrl 
    ? (canonicalUrl.startsWith('http') ? canonicalUrl : `${BASE_URL}${canonicalUrl}`)
    : typeof window !== 'undefined' 
      ? window.location.href 
      : BASE_URL;

  // Usar ogTitle como fallback de title si no se proporciona
  const finalTitle = title || ogTitle;
  // Usar ogDescription como fallback de description si no se proporciona
  const finalDescription = description || ogDescription;
  // Usar title como fallback de ogTitle si no se proporciona
  const finalOgTitle = ogTitle || title;
  // Usar description como fallback de ogDescription si no se proporciona
  const finalOgDescription = ogDescription || description;

  return (
    <>
      <Helmet>
        {finalTitle && <title>{finalTitle}</title>}
        {finalDescription && <meta name="description" content={finalDescription} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {robots && <meta name="robots" content={robots} />}
        
        {/* Canonical URL */}
        <link rel="canonical" href={canonical} />
        
        {/* Open Graph */}
        {finalOgTitle && <meta property="og:title" content={finalOgTitle} />}
        {finalOgDescription && <meta property="og:description" content={finalOgDescription} />}
        {ogImage && <meta property="og:image" content={ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`} />}
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Sydney Roofing & Gutters" />
        
        {/* Twitter Card */}
        {finalOgTitle && <meta name="twitter:title" content={finalOgTitle} />}
        {finalOgDescription && <meta name="twitter:description" content={finalOgDescription} />}
        {ogImage && <meta name="twitter:image" content={ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`} />}
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      {/* Schema Markup */}
      {schemaType && (
      <SchemaMarkup
        type={schemaType}
        service={service}
        location={location}
        customName={customName}
        customDescription={customDescription}
          customUrl={customUrl || canonical}
      />
      )}
    </>
    );
};

export default SEOHead;