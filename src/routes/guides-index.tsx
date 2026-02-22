import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import { BookOpen, ChevronLeft, ChevronRight } from "lucide-react";
import guidesData from "@/data/guides-index.json";

const DEFAULTS = {
  businessName: "Sydney Roofing & Gutters",
};

const PER_PAGE = 12;

function GuidesIndex() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(guidesData.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const visible = guidesData.slice(start, start + PER_PAGE);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`Roofing & Guttering Guides | ${DEFAULTS.businessName}`}
        description="Browse our library of roofing and guttering guides. Expert advice on roof repairs, installations, materials, costs and maintenance for Sydney homeowners."
        keywords="roofing guides, guttering guides, roof repair advice, roofing tips sydney, roof maintenance guide"
        ogTitle={`Roofing & Guttering Guides | ${DEFAULTS.businessName}`}
        ogDescription="Expert roofing and guttering guides for Sydney homeowners."
        schemaType="RoofingContractor"
        customName={DEFAULTS.businessName}
        customDescription="Expert roofing and guttering guides for Sydney homeowners."
      />
      <Header />

      <section className="bg-[#179DC2] text-white py-12">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-8 w-8" />
            <h1 className="text-3xl md:text-4xl font-extrabold">Roofing & Guttering Guides</h1>
          </div>
          <p className="text-lg opacity-90">
            Expert advice to help you make informed decisions about your roof
          </p>
        </div>
      </section>

      <section className="py-14 bg-white flex-1">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.map((guide) => (
              <a
                key={guide.slug}
                href={`/guides/${guide.slug}/`}
                className="bg-white rounded-lg border shadow-sm p-6 hover:shadow-md transition-shadow group flex flex-col"
              >
                <h2 className="font-bold text-base mb-2 group-hover:text-[#179DC2] transition-colors leading-snug">
                  {guide.title}
                </h2>
                <p className="text-sm leading-relaxed flex-1" style={{ color: "#666666" }}>
                  {guide.description.length > 150
                    ? guide.description.substring(0, 150) + "..."
                    : guide.description}
                </p>
                <div className="mt-3 text-xs" style={{ color: "#999999" }}>
                  {new Date(guide.publishedISO).toLocaleDateString("en-AU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </a>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-10">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="flex items-center gap-1 px-3 py-2 rounded-md border text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => setPage(p)}
                  className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                    p === page
                      ? "bg-[#179DC2] text-white"
                      : "border hover:bg-gray-50"
                  }`}
                >
                  {p}
                </button>
              ))}
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="flex items-center gap-1 px-3 py-2 rounded-md border text-sm font-medium disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                Next
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="mt-8 text-center text-sm" style={{ color: "#999999" }}>
            Showing {start + 1}–{Math.min(start + PER_PAGE, guidesData.length)} of {guidesData.length} guides
          </div>
        </div>
      </section>

      <Footer />
      <FloatingBanner />
    </div>
  );
}

const Page = GuidesIndex;
export const route = {
  path: "/guides/",
  element: <Page />,
  handle: { scrollToTop: true },
};
export default Page;
