// src/routes/roofing-sydney-cbd.tsx
import type { Route } from "react-router";
import { useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingBanner from "@/components/FloatingBanner";
import SEOHead from "@/components/SEOHead";
import MapWithForm from "@/components/MapWithForm";
import FaqSection from "@/components/FaqSection";
import ContentBlock3 from "@/components/ContentBlock3";
import ColorSwitchWidget from "@/components/ColorSwitchWidget";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronDown, Phone, Calculator, Send } from "lucide-react";

type AccordionItemData = {
  id: string;
  title: string;
  body: string;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

const BrandLogosRow = () => {
  const brands = ["BLUESCOPE STEEL", "Colorbond", "VELUX", "Master Builders", "HIA"];
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <div className="flex flex-wrap items-center justify-center gap-6 opacity-90">
          {brands.map((b) => (
            <div
              key={b}
              className="text-xs md:text-sm font-semibold tracking-wide text-[#666666]"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialsMini = () => {
  const cards = [
    { title: "Great Work", stars: 5, text: "Quick turnaround and professional finish. Highly recommended." },
    { title: "Excellent Service", stars: 5, text: "Clear communication and reliable team. Great value." },
    { title: "Amazing Team", stars: 5, text: "They showed up on time and delivered quality work." },
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ServicesIncludeGrid = () => {
  const services = [
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
    <section className="py-10 bg-[#F6F6F6]">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <h3 className="text-center text-lg md:text-xl font-bold mb-6">
          Our Roofing &amp; Guttering Services Include:
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.map((s) => (
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
};

const SlateMetalSolutionBlock = () => {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Your Slate &amp; Metal Roofing Solution in Sydney CBD
            </h2>

            <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: "#666666" }}>
              <p>
                Sydney Roofing &amp; Gutters delivers professional roofing and guttering services across
                Sydney CBD. Whether you need slate roof repairs, metal re-roofing, gutter replacement,
                or leak detection, our team is equipped to handle the job with premium materials and
                proven workmanship.
              </p>
              <p>
                We specialise in solutions designed for harsh weather and long-term durability—backed
                by clear communication, transparent quoting, and a customer-first approach.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-6">
              <Button asChild className="rounded-md">
                <a href="/contact/">GET QUOTE</a>
              </Button>
              <Button asChild variant="outline" className="rounded-md">
                <a href="tel:1300796024" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  CALL US 1300796024
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg border bg-white">
              <img
                src="/images/hero-roof.webp"
                alt="Sydney CBD roofing example"
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
};

const AreYouFacingBlock = () => {
  return (
    <section
      className="relative py-16"
      style={{
        backgroundImage: "url('/images/hero-roof.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/55" />
      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative">
        <h2 className="text-white text-2xl md:text-3xl font-bold mb-3">
          Are You Facing Guttering or Roofing problems?
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-4">Don&apos;t panic, we are here for you.</p>

        <div className="max-w-4xl text-white/85 text-sm md:text-base leading-relaxed space-y-4">
          <p>
            From storm damage and leaks to ageing gutters and downpipes, roofing issues can escalate
            quickly if left untreated. Our licensed team provides fast response, careful inspection,
            and durable repairs across Sydney CBD.
          </p>
          <p>
            We work with metal, slate, and tile systems, and we can recommend the right solution for
            your roof type and budget—always aiming for safe, compliant, long-lasting results.
          </p>
        </div>
      </div>
    </section>
  );
};

const AccordionCard = ({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData;
  isOpen: boolean;
  onToggle: () => void;
}) => {
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
          <span className="font-bold text-[15px] md:text-base text-black truncate">
            {item.title}
          </span>
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
};

const BenefitsAccordionSection = () => {
  const items: AccordionItemData[] = useMemo(
    () => [
      {
        id: "expert",
        title: "Our Expert Roofing & Guttering Services",
        body:
          "We have become the top roofing company in Sydney with a reputation for great roof restoration in Sydney CBD. We have expertise in the services we offer and work with metal and slate roofing. For roof repairs in Sydney CBD, we are the preferred company in all of Sydney, because of our years of experience in roofing.\n\nWe're also experienced in guttering, reroofing, roof leaks, commercial roofing, residential roofing, and strata roofing.",
      },
      {
        id: "re-guttering",
        title: "Gutter Installation, Repairs & Re-Guttering",
        body:
          "In the area of roofing in Sydney CBD, we are the top in terms of services offered. We'll handle all your roofing and guttering work effectively.\n\nOur skilled staff is the best in gutter installation, repairing and reguttering. In the service area of gutters in Sydney CBD, we also offer roof leak repair cleaning services to clients.",
      },
      {
        id: "pro-roofers",
        title: "Professional Roofers In Sydney CBD",
        body:
          "Among the metal roofers in Sydney CBD, we're known for great workmanship and professional work. We are also regarded as reliable and trustworthy by our clients.\n\nWe stand out among roofers in Sydney CBD because of the high quality of work we deliver. This has gained us 5-star reviews for every job we have handled.",
      },
      {
        id: "res-com",
        title: "Residential & Commercial Roofing",
        body:
          "Sydney Roofing and Gutters provides a wide range of roofing services to all sorts of Residential and commercial projects. We have professional experts to work on residential and commercial roofing.\n\nWe concentrate on all the various varieties of roofing materials. Our team will update you about the material they are going to use before they start working and they will share with you why they choose such material for your commercial roofing.",
      },
      {
        id: "experience",
        title: "Years Of Experience",
        body:
          "We offer our quality gutter repairs in Sydney CBD & all the surrounding suburbs.\n\nWe are considered as the best roofing contractors in Sydney CBD. We've been doing quality work for people for a very long time.",
      },
      {
        id: "metal-reroofs",
        title: "Metal Roofing and Re-roofs",
        body:
          "In area of re-roofing and metal roofing, we are the best service providers in Sydney. Among all the metal roofers in Sydney CBD, we aim to offer quality services.\n\nA majority of metal roofers do not provide perfect services. All that we focus on is meeting the requirements of customers in a way they want.",
      },
      {
        id: "gutter-install",
        title: "Gutter Installation In Sydney CBD",
        body:
          "We do gutter installations in Sydney CBD, and also different types of roofing. We handle colorbond reroofs, tile to colorbond reroofs, and commercial roofing also.\n\nIn Sydney CBD, we also handle metal reroofing, copper and zinc roofing, as well as Strata and insurance work. Our reroof plumbing services include but are not limited to gutter, downpipes, and box gutters.",
      },
      {
        id: "roof-gutter-cleaning",
        title: "Roof and Gutter Cleaning",
        body:
          "We provide an outstanding service in roof & gutter cleaning with many years of experience. Our roof cleaning service is available on all roof types such as roofs made of cement tiles, terracotta roofs, and metal roofs.\n\nWe have professional experts to clean your roof thoroughly. We follow the safety precautions in the workplace. Our experts are well trained to inspect each and every corner before cleaning.",
      },
      {
        id: "equipped",
        title: "Equipped For All Roofing Jobs",
        body:
          "Among all the Sydney CBD roofers, our staff is the most friendly, skilled and competent. Our staff is passionate about the work and very trustworthy too.\n\nIn terms of gutter installation in Sydney CBD, our staff is known for perfect work. Our staff arrives on time and it also brings its own equipment at work.",
      },
      {
        id: "roof-restoration",
        title: "Roof Restoration",
        body:
          "We stand out as the best in Roof restoration in Sydney CBD. We handle your roof restoration using the best quality materials with more than 10 years' warranty on them.\n\nOur metal roofers in Sydney CBD will take care of your roof leak repair needs when you reach out to us. All you need to do is simply call us and we will be glad to help.",
      },
      {
        id: "roof-flashing",
        title: "Roof Flashing",
        body:
          "Our staff consists of skilled experts who are able to handle roof flashing work perfectly. Among the Sydney CBD roofers, we use the best equipment for our work.\n\nWe are also able to help you with all your roof leak repair service needs! In the services of roofing Sydney CBD, we deliver the best for our clients!",
      },
      {
        id: "slate-roofing",
        title: "Slate Roofing",
        body:
          "We work on gutters in Sydney CBD and also give the best Slate roofing you will ever find. Our workers are licensed and trained in what they do, so you can relax.\n\nIf you also have roof leak repair needs that you need help with, you can be sure our metal roofers in Sydney CBD can handle them for you.",
      },
    ],
    []
  );

  const [openIds, setOpenIds] = useState<string[]>([]);
  const toggle = (id: string) => setOpenIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <section className="py-14 bg-[#F6F6F6]">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-8">
          Benefits of Hiring Sydney Roofing &amp; Gutters
        </h2>

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
};

const WhyChoose = () => {
  const points = [
    {
      title: "Reliable & Professional Work",
      text: "We deliver consistent workmanship using proven methods and premium roofing materials.",
    },
    {
      title: "Transparent Quotes & Support",
      text: "Clear communication from inspection to completion—no surprises, just solid service.",
    },
    {
      title: "Fast Response Across Sydney CBD",
      text: "From leaks to urgent repairs, our team can respond quickly and keep you protected.",
    },
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
          Why Choose Sydney Roofing &amp; Gutters?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p) => (
            <div key={p.title} className="flex gap-4 items-start">
              <CheckCircle2 className="h-6 w-6 text-[#179DC2] mt-1 flex-shrink-0" />
              <div>
                <div className="font-bold mb-1">{p.title}</div>
                <div className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  {p.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ColorbondSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-7 lg:px-14 xl:px-20">
        <ColorSwitchWidget />
      </div>
    </section>
  );
};

const InlineCtaPill = () => {
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
              href="tel:1300796024"
              className="px-6 py-4 text-center font-bold tracking-wide border-t sm:border-t-0 sm:border-l border-black/30 hover:bg-black/5 transition"
            >
              <span className="inline-flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-red-600" />
                1300796024
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const HeroWithQuoteForm = () => {
  return (
    <section className="relative">
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-roof.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative pt-10 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-[#179DC2]/90 px-3 py-1 rounded-md text-xs font-bold mb-4">
                <span>A1</span>
                <span className="opacity-70">/</span>
                <span>Roof &amp; Gutter Needs in Sydney CBD</span>
              </div>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                ROOFING SERVICES
                <br />
                SYDNEY CBD
              </h1>

              <div className="mt-6 space-y-3 text-white/90 text-sm md:text-base">
                {[
                  "Gutter Maintenance",
                  "Professional Service",
                  "Works for all roof types",
                  "Quality results",
                ].map((t) => (
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
                  href="tel:1300796024"
                  className="inline-flex items-center gap-2 bg-white/90 text-black px-4 py-2 rounded-md font-bold shadow"
                >
                  <Phone className="h-4 w-4 text-red-600" />
                  1300796024
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-7 lg:px-14 xl:px-20 relative -mt-16 pb-10">
        <div className="mx-auto max-w-3xl rounded-xl bg-white shadow-[0_18px_40px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="px-6 pt-6 pb-4 text-center">
            <div className="text-xl md:text-2xl font-extrabold">
              Request a <span className="text-[#179DC2]">FREE</span> Quote{" "}
              <span className="text-[#179DC2]">TODAY</span>
            </div>
          </div>

          <form className="px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="h-11 rounded-md border px-4" placeholder="First Name" />
              <input className="h-11 rounded-md border px-4" placeholder="Last Name" />
              <input className="h-11 rounded-md border px-4" placeholder="Phone Number" />
              <input className="h-11 rounded-md border px-4" placeholder="Email Address" />
              <input className="h-11 rounded-md border px-4 md:col-span-2" placeholder="Suburb" />
              <textarea
                className="min-h-[110px] rounded-md border px-4 py-3 md:col-span-2"
                placeholder="What seems to be the issue?"
              />
            </div>

            <Button type="button" className="w-full mt-5 h-11 rounded-md">
              <span className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                GET QUOTE
              </span>
            </Button>

            <div className="mt-4 text-center">
              <a
                href="/colorbond-visualiser/"
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
};

const RoofingSydneyCBDPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Roofing Services Sydney CBD | Sydney Roofing & Gutters"
        description="Professional roofing & guttering services in Sydney CBD. Roof repairs, restorations, metal & slate roofing, gutter repairs, cleaning, downpipes and more. Request a free quote today."
        keywords="roofing services sydney cbd, gutter repair sydney cbd, roof repairs sydney cbd, metal roofing sydney cbd, slate roofing sydney cbd"
        ogTitle="Roofing Services Sydney CBD | Sydney Roofing & Gutters"
        ogDescription="Roofing & guttering experts in Sydney CBD. Get a free quote today."
        schemaType="RoofingContractor"
        location="sydney-cbd"
        customName="Sydney Roofing & Gutters"
        customDescription="Sydney CBD roofing & guttering specialists offering reliable service and free quotes."
      />

      <Header />

      <HeroWithQuoteForm />
      <BrandLogosRow />
      <TestimonialsMini />
      <ServicesIncludeGrid />

      <SlateMetalSolutionBlock />
      <AreYouFacingBlock />
      <BenefitsAccordionSection />
      <WhyChoose />

      {/* ✅ Reemplaza imagen por el widget */}
      <ColorbondSection />

      <InlineCtaPill />

      <ContentBlock3 />

      <MapWithForm />
      <FaqSection />

      <Footer />
      <FloatingBanner />
    </div>
  );
};

export const route = {
  path: "/roofing-sydney-cbd/",
  element: <RoofingSydneyCBDPage />,
  handle: {
    title: "Roofing Services Sydney CBD | Sydney Roofing & Gutters",
    meta: [
      {
        name: "description",
        content:
          "Professional roofing & guttering services in Sydney CBD. Roof repairs, restorations, metal & slate roofing, gutter repairs, cleaning, downpipes and more. Request a free quote today.",
      },
      {
        name: "keywords",
        content:
          "roofing services sydney cbd, gutter repair sydney cbd, roof repairs sydney cbd, metal roofing sydney cbd, slate roofing sydney cbd",
      },
    ],
  },
} satisfies Route;

export default RoofingSydneyCBDPage;