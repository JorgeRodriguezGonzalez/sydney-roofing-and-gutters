import { Helmet } from 'react-helmet-async';

interface SchemaLocalBusinessProps {
  name?: string;
  description?: string;
  image?: string;
  telephone?: string;
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
  url?: string;
  areaServed?: string[];
  openingHours?: string[];
  priceRange?: string;
  serviceArea?: {
    "@type": "GeoCircle";
    geoMidpoint: {
      "@type": "GeoCoordinates";
      latitude: number;
      longitude: number;
    };
    geoRadius: string;
  };
}

export default function SchemaLocalBusiness({
  name = "Sydney Roofing & Gutters",
  description = "Professional roofing services in Newcastle and Hunter Region. Emergency repairs, roof replacement, restoration, and maintenance by licensed contractors available 24/7.",
  image = "https://sydneyroofingandgutters.com.au/images/newcastle-local-roofers-logo.png",
  telephone = "+61-2-4089-4613",
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
  },
  url = "https://sydneyroofingandgutters.com.au",
  areaServed = [
    "Newcastle",
    "Lake Macquarie", 
    "Hunter Valley",
    "Port Stephens",
    "Maitland",
    "Cessnock"
  ],
  openingHours = [
    "Mo 00:00-23:59",
    "Tu 00:00-23:59", 
    "We 00:00-23:59",
    "Th 00:00-23:59",
    "Fr 00:00-23:59",
    "Sa 00:00-23:59",
    "Su 00:00-23:59"
  ],
  priceRange = "$$",
  serviceArea = {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -32.9283,
      "longitude": 151.7817
    },
    "geoRadius": "50000"
  }
}: SchemaLocalBusinessProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": name,
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
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "openingHours": openingHours,
    "priceRange": priceRange,
    "serviceArea": serviceArea,
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
