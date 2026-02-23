import { Helmet } from 'react-helmet-async';

interface SchemaServiceProps {
  serviceName: string;
  description?: string;
  providerName?: string;
  providerType?: string;
  telephone?: string;
  url?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    country: string;
  };
  areaServed?: string[];
  serviceType?: string;
  offers?: {
    name: string;
    description: string;
    price?: string;
    priceCurrency?: string;
  }[];
}

export default function SchemaService({
  serviceName,
  description = "Professional roofing services in Newcastle and Hunter Region",
  providerName = "Sydney Roofing & Gutters",
  providerType = "RoofingContractor",
  telephone = "+61-2-4089-4613",
  url = "https://sydneyroofingandgutters.com.au",
  address = {
    street: "1 Tudor Street",
    city: "Newcastle West",
    state: "NSW", 
    postcode: "2302",
    country: "AU"
  },
  areaServed = [
    "Newcastle",
    "Lake Macquarie",
    "Hunter Valley", 
    "Port Stephens",
    "Maitland",
    "Cessnock"
  ],
  serviceType = "RoofingService",
  offers = [
    {
      name: "Emergency Roof Repairs",
      description: "24/7 emergency roofing services for urgent repairs"
    },
    {
      name: "Roof Replacement", 
      description: "Complete roof replacement services with quality materials"
    },
    {
      name: "Roof Restoration",
      description: "Professional roof restoration and maintenance services"
    }
  ]
}: SchemaServiceProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": serviceType,
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": providerType,
      "name": providerName,
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
      "areaServed": areaServed.map(area => ({
        "@type": "City",
        "name": area
      }))
    },
    "areaServed": areaServed.map(area => ({
      "@type": "City", 
      "name": area
    })),
    "offers": offers.map(offer => ({
      "@type": "Offer",
      "name": offer.name,
      "description": offer.description,
      "price": offer.price || "Contact for quote",
      "priceCurrency": offer.priceCurrency || "AUD"
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
