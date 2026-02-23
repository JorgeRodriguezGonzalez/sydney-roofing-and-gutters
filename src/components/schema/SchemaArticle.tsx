import { Helmet } from 'react-helmet-async';

interface SchemaArticleProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  image?: string;
  url: string;
}

export default function SchemaArticle({ 
  headline, 
  description, 
  datePublished,
  dateModified,
  authorName = "Sydney Roofing & Gutters",
  image = "https://sydneyroofingandgutters.com.au/images/newcastle-local-roofers-logo.png",
  url
}: SchemaArticleProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "author": {
      "@type": "Organization",
      "name": authorName,
      "url": "https://sydneyroofingandgutters.com.au"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sydney Roofing & Gutters",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sydneyroofingandgutters.com.au/images/newcastle-local-roofers-logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
