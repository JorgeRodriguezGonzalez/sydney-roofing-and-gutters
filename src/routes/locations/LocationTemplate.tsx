// src/routes/locations/LocationTemplate.tsx
import type { Route } from "react-router";
import { useMemo, useState, type FormEvent } from "react";
import { submitNetlifyForm } from "@/lib/netlifyForm";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";

import MapWithForm from "@/components/MapWithForm";
import FaqSection from "@/components/FaqSection";
import ContentBlock3 from "@/components/ContentBlock3";
import ColorSwitchWidget from "@/components/ColorSwitchWidget";
import BrandsSlider from "@/components/BrandsSlider";

import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown, Phone, Calculator, Send } from "lucide-react";

export type LocationSEOConfig = {
  suburb: string; // e.g. "Sydney CBD"
  slug: string; // e.g. "sydney-cbd"
  latitude: string; // "-33.8688"
  longitude: string; // "151.2093"
  state?: string; // default: "NSW"
  country?: string; // default: "Australia"
  // URL final (si quieres algo distinto a /roofing-{slug}/)
  path?: string;
};

export type LocationContent = {
  hero: {
    eyebrow?: string;
    titleTop: string; // e.g. "ROOFING SERVICES"
    titleBottom: string; // e.g. "SYDNEY CBD"
    bullets: string[];
  };
  introBlock: {
    heading: string;
    paragraphs: string[];
    imageSrc?: string; // optional
    imageAlt?: string;
  };
  problemsBlock: {
    heading: string;
    subheading?: string;
    paragraphs: string[];
    backgroundImage?: string; // optional
  };
  testimonial: {
    name: string;
    suburb: string;
    quote: string;
    rating?: number; // default 5
  };
  servicesInclude?: string[]; // optional grid items
  benefits: {
    heading: string;
    items: Array<{ id: string; title: string; body: string }>; // body paragraphs separated by \n\n
  };
};

const DEFAULTS = {
  baseUrl: "https://sydneyroofingandgutters.com.au",
  businessName: "Sydney Roofing & Gutters",
  phone: "1300796024",
  heroBg: "/images/hero-roof.webp",
  colorVisualiserLink: "/colorbond-visualiser/",
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function buildPath(cfg: LocationSEOConfig) {
  return cfg.path ?? `/roofing-${cfg.slug}/`;
}

function buildSeo(cfg: LocationSEOConfig) {
  const state = cfg.state ?? "NSW";
  const country = cfg.country ?? "Australia";
  const path = buildPath(cfg);
  const canonical = `${DEFAULTS.baseUrl}${path}`;

  const title = `Roofing Services ${cfg.suburb} | ${DEFAULTS.businessName}`;
  const description = `Professional roofing & guttering services in ${cfg.suburb}, ${state}, ${country}. Roof repairs, restorations, metal & slate roofing, gutter repairs, cleaning, downpipes and more. Request a free quote today.`;
  const keywords = [
    `roofing services ${cfg.suburb}`.toLowerCase(),
    `roof repairs ${cfg.suburb}`.toLowerCase(),
    `gutter repair ${cfg.suburb}`.toLowerCase(),
    `metal roofing ${cfg.suburb}`.toLowerCase(),
    `roof restoration ${cfg.suburb}`.toLowerCase(),
    `${cfg.suburb} roofers`.toLowerCase(),
    `${cfg.suburb} gutters`.toLowerCase(),
    `${state.toLowerCase()} roofing`.toLowerCase(),
  ].join(", ");

  return {
    path,
    canonical,
    title,
    description,
    keywords,
    ogTitle: title,
    ogDescription: description,
  };
}

function buildJsonLd(cfg: LocationSEOConfig) {
  const seo = buildSeo(cfg);
  const state = cfg.state ?? "NSW";
  const country = cfg.country ?? "Australia";

  // JSON-LD (puede ir en body y Google lo lee igual)
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: DEFAULTS.businessName,
    url: seo.canonical,
    telephone: DEFAULTS.phone,
    areaServed: [
      {
        "@type": "City",
        name: `${cfg.suburb}, ${state}, ${country}`,
      },
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: cfg.latitude,
      longitude: cfg.longitude,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: cfg.suburb,
      addressRegion: state,
      addressCountry: country,
    },
    // Opcional: define servicios para reforzar relevancia
    makesOffer: {
      "@type": "OfferCatalog",
      name: `Roofing & Guttering Services in ${cfg.suburb}`,
    },
  };
}

export function LocationSEO({ config }: { config: LocationSEOConfig }) {
  const seo = buildSeo(config);
  const jsonLd = useMemo(() => buildJsonLd(config), [config]);

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        ogTitle={seo.ogTitle}
        ogDescription={seo.ogDescription}
        schemaType="RoofingContractor"
        location={config.slug}
        customName={DEFAULTS.businessName}
        customDescription={seo.description}
      />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  );
}

/** --- UI blocks (self-contained para que el template funcione sin depender de más componentes) --- */

function BrandLogosRow() {
  const brands = ["BLUESCOPE STEEL", "Colorbond", "VELUX", "Master Builders", "HIA"];
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-90">
          {brands.map((b) => (
            <div key={b} className="text-xs md:text-sm font-semibold tracking-wide text-[#666666]">
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesIncludeGrid({ items }: { items: string[] }) {
  return (
    <section className="py-10 bg-[#F6F6F6]">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <h3 className="text-center text-lg md:text-xl font-bold mb-6">
          Our Roofing &amp; Guttering Services Include:
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((s) => (
            <div
              key={s}
              className="rounded-md bg-[#179DC2] text-white shadow-sm px-3 py-4 text-center text-xs sm:text-sm font-semibold"
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsMini({
  local,
}: {
  local: LocationContent["testimonial"];
}) {
  const stars = Math.max(1, Math.min(5, local.rating ?? 5));
  const cards = [
    {
      title: `Customer in ${local.suburb}`,
      stars,
      text: local.quote,
      by: local.name,
    },
    {
      title: "Fast, Professional & Clean",
      stars: 5,
      text: "Clear communication, quality finish, and the site was left spotless. Would use again.",
      by: "Taylor W.",
    },
    {
      title: "Great Value",
      stars: 5,
      text: "They explained options clearly and delivered exactly what was quoted.",
      by: "Jordan P.",
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <h2 className="text-center text-xl md:text-2xl font-bold mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="rounded-lg border shadow-sm p-6 bg-white">
              <div className="text-sm font-bold mb-2">{c.title}</div>
              <div className="text-xs text-[#666666] mb-3">
                {"★".repeat(c.stars)}{"☆".repeat(5 - c.stars)}
              </div>
              <p className="text-sm leading-relaxed text-[#666666]">{c.text}</p>
              <div className="mt-4 text-xs font-semibold text-[#179DC2]">{c.by}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IntroBlock({ content }: { content: LocationContent["introBlock"] }) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{content.heading}</h2>
            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
              {content.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Button asChild className="rounded-md">
                <a href="/contact/">GET QUOTE</a>
              </Button>
              <Button asChild variant="outline" className="rounded-md">
                <a href={`tel:${DEFAULTS.phone}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  CALL US {DEFAULTS.phone}
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg border bg-white">
              <img
                src={content.imageSrc ?? DEFAULTS.heroBg}
                alt={content.imageAlt ?? "Roofing project example"}
                className="w-full h-[240px] md:h-[300px] object-cover"
              />
            </div>

            <div className="absolute -bottom-4 right-4 bg-[#179DC2] text-white px-4 py-2 rounded-md shadow-md text-xs font-bold">
              100% Satisfaction Guarantee
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProblemsBlock({ content }: { content: LocationContent["problemsBlock"] }) {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: `url('${content.backgroundImage ?? DEFAULTS.heroBg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">{content.heading}</h2>
        {content.subheading && (
          <p className="text-white/90 text-sm md:text-base mb-4">{content.subheading}</p>
        )}

        <div className="max-w-4xl text-white/85 text-sm md:text-base leading-relaxed space-y-4">
          {content.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

type AccordionItemData = { id: string; title: string; body: string };

function AccordionCard({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="self-start">
      <button
        type="button"
        onClick={onToggle}
        className={cx(
          "w-full text-left shadow-[0_10px_24px_rgba(0,0,0,0.22)]",
          "bg-[#179DC2] border-l-4 border-black/40",
          "px-5 py-4",
          "flex items-center justify-between gap-4"
        )}
        aria-expanded={isOpen}
        aria-controls={`acc-${item.id}`}
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className="text-base">✏️</span>
          <span className="font-bold text-[15px] md:text-base text-black truncate">{item.title}</span>
        </div>
        <ChevronDown className={cx("h-5 w-5 text-black transition-transform", isOpen && "rotate-180")} />
      </button>

      <div
        id={`acc-${item.id}`}
        className={cx(
          "overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
          isOpen ? "max-h-[900px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-[#179DC2] border-l-4 border-black/40 px-5 pb-5 pt-4 text-white text-sm md:text-base leading-relaxed">
          {item.body.split("\n\n").map((p, idx) => (
            <p key={idx} className={cx(idx > 0 && "mt-4")}>
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function BenefitsAccordionSection({
  heading,
  items,
}: {
  heading: string;
  items: AccordionItemData[];
}) {
  const [openIds, setOpenIds] = useState<string[]>([]);
  const toggle = (id: string) =>
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="py-14 bg-[#F6F6F6]">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">{heading}</h2>

        {/* items-start evita que la columna vecina se estire cuando se abre uno */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {items.map((it) => (
            <AccordionCard
              key={it.id}
              item={it}
              isOpen={openIds.includes(it.id)}
              onToggle={() => toggle(it.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function InlineCtaPill() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <div className="mx-auto max-w-4xl rounded-2xl border-2 border-black/70 bg-white shadow-md overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <a
              href="/contact/"
              className="px-6 py-4 text-center font-bold tracking-wide hover:bg-black/5 transition"
            >
              BOOK A <span className="text-[#179DC2]">FREE QUOTE</span> ONLINE
            </a>
            <a
              href={`tel:${DEFAULTS.phone}`}
              className="px-6 py-4 text-center font-bold tracking-wide border-t sm:border-t-0 sm:border-l border-black/30 hover:bg-black/5 transition"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-red-600" />
                {DEFAULTS.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroWithQuoteForm({ config, content }: { config: LocationSEOConfig; content: LocationContent }) {
  const heroBg = DEFAULTS.heroBg;

  const FORM_NAME = "Location form";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const response = await submitNetlifyForm({
        form,
        endpoint: "/",
        fullName: { firstField: "firstName", lastField: "lastName", targetField: "fullName" },
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      setShowSuccess(true);
      form.reset();
      window.setTimeout(() => setShowSuccess(false), 6000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      <div className="relative bg-cover bg-center" style={{ backgroundImage: `url('${heroBg}')` }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative pt-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-[#179DC2]/90 px-3 py-1 rounded-md text-xs font-bold mb-4">
                <span>A1</span>
                <span className="opacity-70">/</span>
                <span>{content.hero.eyebrow ?? `Roof & Gutter Needs in ${config.suburb}`}</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                {content.hero.titleTop}
                <br />
                {content.hero.titleBottom}
              </h1>

              <div className="mt-6 space-y-3 text-white/90 text-sm md:text-base">
                {content.hero.bullets.map((t) => (
                  <div key={t} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    <span className="font-semibold">{t}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex justify-end">
                <a
                  href={`tel:${DEFAULTS.phone}`}
                  className="inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-md font-bold shadow"
                >
                  <Phone className="h-4 w-4 text-red-600" />
                  {DEFAULTS.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote card overlap */}
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative -mt-16 pb-10">
        <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="px-6 pt-6 pb-4 text-center">
            <div className="text-xl md:text-2xl font-extrabold">
              Request a <span className="text-[#179DC2]">FREE</span> Quote{" "}
              <span className="text-[#179DC2]">TODAY</span>
            </div>

            {showSuccess && (
              <div className="mt-2 text-sm text-emerald-700">
                Thanks! We&apos;ll contact you shortly.
              </div>
            )}
          </div>

          <form
            name={FORM_NAME}
            method="POST"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="px-6 pb-6"
          >
            {/* Netlify required hidden inputs */}
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value={FORM_NAME} />
            {/* Helps Netlify show full name in UI */}
            <input type="hidden" name="fullName" value="" />
            {/* Helpful context for submissions */}
            <input type="hidden" name="location" value={config.suburb} />
            <input type="hidden" name="locationSlug" value={config.slug} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="firstName"
                required
                className="h-11 rounded-md border px-4"
                placeholder="First Name"
              />
              <input
                name="lastName"
                required
                className="h-11 rounded-md border px-4"
                placeholder="Last Name"
              />
              <input
                name="phone"
                required
                className="h-11 rounded-md border px-4"
                placeholder="Phone Number"
              />
              <input
                name="email"
                type="email"
                required
                className="h-11 rounded-md border px-4"
                placeholder="Email Address"
              />
              <input
                name="suburb"
                className="h-11 rounded-md border px-4 md:col-span-2"
                placeholder="Suburb"
                defaultValue={config.suburb}
              />
              <textarea
                name="issue"
                className="min-h-[110px] rounded-md border px-4 py-3 md:col-span-2"
                placeholder="What seems to be the issue?"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-5 h-11 rounded-md bg-[#169fc3] hover:bg-[#ff1616] disabled:opacity-70"
            >
              <span className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                {isSubmitting ? "SENDING..." : "GET QUOTE"}
              </span>
            </Button>

            <div className="mt-4 text-center">
              <a
                href={DEFAULTS.colorVisualiserLink}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-[#179DC2] px-4 py-2 rounded-md shadow"
              >
                <Calculator className="h-4 w-4" />
                Click here to Visualise The Colorbond Roof &amp; Gutter Color
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}


export function LocationPageTemplate({
  config,
  content,
}: {
  config: LocationSEOConfig;
  content: LocationContent;
}) {
  const defaultServices = [
    "Roof Repairs",
    "Roof Restoration",
    "Tile Roofing",
    "Metal Roofing",
    "Re-Roofing",
    "Roof Painting",
    "Gutter Repairs",
    "Gutter Cleaning",
    "Downpipes",
    "Gutter Replacement",
    "Gutter Guard",
    "Leak Detection",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <LocationSEO config={config} />
      <Header />

      <HeroWithQuoteForm config={config} content={content} />
      <BrandsSlider />
      <TestimonialsMini local={content.testimonial} />

      <ServicesIncludeGrid items={content.servicesInclude ?? defaultServices} />

      <IntroBlock content={content.introBlock} />
      <ProblemsBlock content={content.problemsBlock} />

      <BenefitsAccordionSection heading={content.benefits.heading} items={content.benefits.items} />

      {/* Widget en vez de imagen */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20">
          <ColorSwitchWidget />
        </div>
      </section>

      <InlineCtaPill />

      {/* Reutiliza tu bloque de 3 pasos */}
      <ContentBlock3 />

      <MapWithForm />
      <FaqSection />

      <Footer />
      <FloatingBanner />
    </div>
  );
}

/**
 * Factory para que cada página de suburbio sea mínima:
 * const { Page, route } = createLocationRoute(config, content);
 * export const route = route;
 * export default Page;
 */
export function createLocationRoute(config: LocationSEOConfig, content: LocationContent) {
  const seo = buildSeo(config);
  const Page = () => <LocationPageTemplate config={config} content={content} />;

  const route = {
    path: seo.path,
    element: <Page />,
    handle: {
      title: seo.title,
      meta: [
        { name: "description", content: seo.description },
        { name: "keywords", content: seo.keywords },
      ],
    },
  } satisfies Route;

  return { Page, route };
}