import SEOHead from "@/components/SEOHead";

type Crumb = {
  label: string;
  href?: string;
};

function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: "https://sydneyroofingandgutters.com.au" + crumb.href } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <>
      <BreadcrumbSchema crumbs={crumbs} />
      <nav aria-label="Breadcrumb" className="bg-[#F6F6F6] border-b">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 py-2.5">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs" style={{ color: "#999999" }}>
            {crumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {crumb.href && i < crumbs.length - 1 ? (
                  <a href={crumb.href} className="hover:text-[#179DC2] transition-colors">
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-gray-600">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
