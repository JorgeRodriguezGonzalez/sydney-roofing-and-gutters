import { Helmet } from 'react-helmet-async';

interface SchemaLocationProps {
  locationName: string;
  description?: string;
  image?: string;
  telephone?: string;
  url?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  geo?: {
    latitude: number;
    longitude: number;
  };
}

export default function SchemaLocation({
  locationName,
  description = "Professional roofing services in Newcastle and Hunter Region. Emergency repairs, roof replacement, restoration, and maintenance by licensed contractors available 24/7.",
  image = "https://sydneyroofingandgutters.com.au/images/newcastle-local-roofers-logo.png",
  telephone = "+61-2-4089-4613",
  url = "https://sydneyroofingandgutters.com.au",
  address = {
    street: "1 Tudor Street",
    city: "Newcastle West", 
    state: "NSW",
    postcode: "2302",
    country: "AU"
  },
  geo = {
    latitude: -32.9283,
    longitude: 151.7817
  }
}: SchemaLocationProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Sydney Roofing & Gutters - ${locationName}`,
    "description": description,
    "image": image,
    "telephone": telephone,
    "url": url,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": address.street,
      "addressLocality": address.city,
      "addressRegion": address.state,
      "postalCode": address.postcode,
      "addressCountry": address.country
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": geo.latitude,
      "longitude": geo.longitude
    },
    "areaServed": {
      "@type": "City",
      "name": locationName
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Roofing Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Roof Repairs",
            "description": "24/7 emergency roofing services for urgent repairs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "Roof Replacement",
            "description": "Complete roof replacement services with quality materials"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Roof Restoration", 
            "description": "Professional roof restoration and maintenance services"
          }
        }
      ]
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
