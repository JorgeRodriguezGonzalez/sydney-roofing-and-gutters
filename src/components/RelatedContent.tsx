import internalLinks from "@/data/internal-links.json";

type LinkData = {
  guideToServices: Record<string, string[]>;
  serviceToGuides: Record<string, string[]>;
  locationToGuides: Record<string, string[]>;
  guideTitles: Record<string, string>;
  serviceTitles: Record<string, string>;
  servicePaths: Record<string, string>;
};

const data = internalLinks as LinkData;

function RelatedGuides({ slugs }: { slugs: string[] }) {
  if (!slugs || slugs.length === 0) return null;
  return (
    <div className="space-y-2">
      {slugs.map((slug) => {
        const title = data.guideTitles[slug];
        if (!title) return null;
        return (
          <a
            key={slug}
            href={`/guides/${slug}/`}
            className="block bg-white rounded-lg border px-4 py-3 hover:shadow-md transition-shadow group"
          >
            <span className="text-sm font-semibold group-hover:text-[#179DC2] transition-colors">{title}</span>
          </a>
        );
      })}
    </div>
  );
}

function RelatedServices({ slugs }: { slugs: string[] }) {
  if (!slugs || slugs.length === 0) return null;
  return (
    <div className="space-y-2">
      {slugs.map((slug) => {
        const title = data.serviceTitles[slug];
        const path = data.servicePaths[slug];
        if (!title || !path) return null;
        return (
          <a
            key={slug}
            href={path}
            className="block bg-white rounded-lg border px-4 py-3 hover:shadow-md transition-shadow group"
          >
            <span className="text-sm font-semibold group-hover:text-[#179DC2] transition-colors">{title}</span>
          </a>
        );
      })}
    </div>
  );
}

export function RelatedContentForGuide({ guideSlug }: { guideSlug: string }) {
  const serviceLinks = data.guideToServices[guideSlug];
  if (!serviceLinks || serviceLinks.length === 0) return null;

  return (
    <section className="py-12 bg-[#F6F6F6]">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Related Services</h2>
        <RelatedServices slugs={serviceLinks} />
      </div>
    </section>
  );
}

export function RelatedContentForService({ serviceSlug }: { serviceSlug: string }) {
  const guideLinks = data.serviceToGuides[serviceSlug];
  if (!guideLinks || guideLinks.length === 0) return null;

  return (
    <section className="py-12 bg-[#F6F6F6]">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Helpful Guides</h2>
        <RelatedGuides slugs={guideLinks} />
      </div>
    </section>
  );
}

export function RelatedContentForLocation({ locationSlug }: { locationSlug: string }) {
  const guideLinks = data.locationToGuides[locationSlug];
  if (!guideLinks || guideLinks.length === 0) return null;

  return (
    <section className="py-12 bg-[#F6F6F6]">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Guides You Might Find Useful</h2>
        <RelatedGuides slugs={guideLinks} />
      </div>
    </section>
  );
}
