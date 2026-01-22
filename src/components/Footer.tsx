// src/components/Footer.tsx
import React from "react";

type LinkItem = {
  label: string;
  href: string;
};

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.24.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm1 10.414 3.293 3.293-1.414 1.414L11 13V7h2v5.414z" />
    </svg>
  );
}

const quickLinks: LinkItem[] = [
  { label: "Back to top", href: "#" },
  { label: "Roofing Sydney", href: "/" },
  { label: "Contact Us", href: "/contact/" },
  { label: "Sitemap", href: "/sitemap/" },
  { label: "Guides & Resources", href: "/guides/" },
];

const regions: LinkItem[] = [
  { label: "ROOFING & GUTTERS EASTERN SUBURBS", href: "/roofing-eastern-suburbs/" },
  { label: "ROOFING & GUTTERS NORTH SHORE", href: "/roofing-north-shore/" },
  { label: "ROOFING & GUTTERS SYDNEY CBD", href: "/roofing-sydney-cbd/" },
  { label: "ROOFING & GUTTERS NORTHERN BEACHES", href: "/roofing-northern-beaches/" },
  { label: "ROOFING & GUTTERS ST GEORGE", href: "/roofing-st-george-area/" },
  { label: "ROOFING & GUTTERS SUTHERLAND", href: "/roofing-sutherland-shire/" },
  { label: "ROOFING & GUTTERS SOUTH WEST SYDNEY", href: "/roofing-south-western-sydney/" },
  { label: "ROOFING & GUTTERS WESTERN SYDNEY", href: "/roofing-western-sydney/" },
  { label: "ROOFING & GUTTERS INNER WESTER", href: "/roofing-inner-west-sydney/" },
  { label: "ROOFING & GUTTERS HILLS DISTRICT", href: "/roofing-hills-district/" },
];

const roofingServices: LinkItem[] = [
  { label: "ROOFING SERVICES", href: "/roofing-service/" },
  { label: "RESIDENTIAL ROOFING", href: "/residential-roofing/" },
  { label: "COMMERCIAL ROOFING SERVICES", href: "/commercial-roofing-service/" },
  { label: "METAL ROOFING", href: "/metal-roofing/" },
  { label: "METAL RESIDENTIAL ROOFING", href: "/residential-metal-roofing/" },
  { label: "COMMERCIAL METAL ROOFING", href: "/commercial-roofing-service/" },
  { label: "DOWNPIPE INSTALLATION", href: "/downpipe-installation/" },
  { label: "COLORBOND INSTALLATION", href: "/colorbond-installation/" },
  { label: "ROOF RESTORATION", href: "/roof-restoration/" },
  { label: "ROOF CLEANING SERVICES", href: "/roof-cleaning-services/" },
  { label: "RE-ROOFING SYDNEY", href: "/re-roofing-sydney/" },
  { label: "ROOF PAINTING SYDNEY", href: "/roof-painting-sydney/" },
  { label: "ROOF LEAK DETECTION & REPAIRS", href: "/roof-leak-detection-and-repair-sydney/" },
];

const gutteringServices: LinkItem[] = [
  { label: "GUTTERING SERVICES", href: "/guttering-services/" },
  { label: "GUTTER INSTALLATION", href: "/gutter-installation/" },
  { label: "GUTTER REPLACEMENT", href: "/gutter-replacement/" },
  { label: "GUTTER REPAIR", href: "/gutter-repairs/" },
  { label: "GUTTER CLEANING", href: "/gutter-cleaning/" },
  { label: "CORRUGATED ROOFING SYDNEY", href: "/corrugated-roofing-sydney/" },
  { label: "GUTTER PROTECTION", href: "/gutter-protection/" },
  { label: "ALUMINIUM GUTTER INSTALLATION", href: "/aluminium-gutter-installation/" },
];

const guides: LinkItem[] = [
  { label: "WHAT IS ROOF SARKING?", href: "/guides/what-is-roof-sarking/" },
  { label: "WHAT IS A SKILLION ROOF?", href: "/guides/what-is-a-skillion-roof/" },
  { label: "WHAT IS A ROOF TRUSS?", href: "/guides/what-is-a-roof-truss/" },
  { label: "WHAT TYPE OF ROOF LASTS THE LONGEST?", href: "/guides/what-type-of-roof-lasts-the-longest/" },
  { label: "HOW OFTEN ROOF INSPECTIONS SHOULD BE CONDUCTED", href: "/guides/how-often-roof-inspections-should-be-conducted/" },
  { label: "HOW TO CLEAN & MAINTAIN METAL ROOFS", href: "/guides/how-to-clean-and-maintain-metal-roofs/" },
  { label: "HOW LONG DO CONCRETE ROOF TILES LAST?", href: "/guides/how-long-do-concrete-roof-tiles-last/" },
  { label: "HOW MANY ROOF VENTS SHOULD I HAVE", href: "/guides/how-many-roof-vents-should-i-have/" },
  { label: "HOW MUCH DOES TILE ROOF REPAIR COST?", href: "/guides/how-much-does-tile-roof-repair-cost/" },
  { label: "HOW TO STOP A LEAKING ROOF DURING HEAVY RAINS", href: "/guides/how-to-stop-a-leaking-roof-during-heavy-rains/" },
  { label: "6 Common Gutter Problems And How To Fix Them", href: "/guides/6-common-gutter-problems-and-how-to-fix-them/" },
];

const calculators: LinkItem[] = [
  { label: "Roofing Cost Calculator", href: "/apps/" },
  { label: "Roof Insulation Calculator", href: "/apps/" },
  { label: "Roof Pitch Calculator", href: "/apps/" },
  { label: "Roof Visualiser", href: "/apps/" },
];

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <h3 className="text-white font-extrabold uppercase tracking-wide text-lg">{children}</h3>
      <div className="mt-2 h-[2px] w-44 bg-white/75" />
    </div>
  );
}

function LinkList({
  items,
  tone = "dark",
}: {
  items: LinkItem[];
  tone?: "dark" | "light";
}) {
  const base =
    tone === "dark"
      ? "text-[#0c3b55] hover:text-white"
      : "text-white/90 hover:text-white";
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={`${item.href}-${item.label}`}>
          <a
            href={item.href}
            className={`text-sm leading-snug transition-colors ${base}`}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#1aa3c5] text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 lg:py-16">
        {/* top line */}
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/70" />
          <div className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-white/95 uppercase whitespace-nowrap">
            ALL YOUR ROOFING NEEDS UNDER ONE ROOF
          </div>
          <div className="h-px flex-1 bg-white/70" />
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* ABOUT */}
          <div>
            <SectionTitle>ABOUT US</SectionTitle>
            <p className="text-white/90 text-sm leading-relaxed">
              Sydney Roofing &amp; Gutters are the trusted roofers within your suburb.
              Contact us now for a free quote.
            </p>

            {/* quick links (as in screenshot: compact, light text) */}
            <div className="mt-7">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                {quickLinks.map((l) => (
                  <a
                    key={`${l.href}-${l.label}`}
                    href={l.href}
                    className="text-sm text-white/90 hover:text-white transition-colors"
                    onClick={(e) => {
                      if (l.href === "#") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h4 className="text-white font-extrabold text-xl leading-tight">
                Roofing &amp; Guttering
                <br />
                Regions
              </h4>
              <div className="mt-3">
                <LinkList items={regions} tone="dark" />
              </div>
            </div>
          </div>

          {/* Roofing Services */}
          <div>
            <h3 className="text-white/95 font-extrabold text-xl">Roofing Services</h3>
            <div className="mt-3">
              <LinkList items={roofingServices} tone="dark" />
            </div>

            <div className="mt-7">
              <h3 className="text-white/95 font-extrabold text-xl">Calculators</h3>
              <div className="mt-3">
                <LinkList items={calculators} tone="dark" />
              </div>
            </div>
          </div>

          {/* Guttering Services + Guides */}
          <div>
            <h3 className="text-white/95 font-extrabold text-xl">Guttering Services</h3>
            <div className="mt-3">
              <LinkList items={gutteringServices} tone="dark" />
            </div>

            <div className="mt-7">
              <h3 className="text-white/95 font-extrabold text-xl">Guides</h3>
              <div className="mt-3">
                <LinkList items={guides} tone="dark" />
              </div>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <SectionTitle>CONTACT</SectionTitle>

            <a
              href="tel:1300796024"
              className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#66c86f] px-5 py-3 font-extrabold text-white shadow-[0_6px_16px_rgba(0,0,0,0.22)] hover:brightness-105 transition"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="text-2xl tracking-wide">1300796024</span>
            </a>

            <div className="mt-5 space-y-3 text-sm">
              <a
                href="mailto:sales@sydneyroofingandgutters.com.au"
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors"
              >
                <MailIcon className="h-4 w-4" />
                <span>sales@sydneyroofingandgutters.com.au</span>
              </a>

              <div className="flex items-start gap-3 text-white/90">
                <ClockIcon className="mt-0.5 h-4 w-4" />
                <div>
                  <div className="font-semibold">Opening Hours: Monday to Sunday</div>
                  <div className="font-semibold">– 24 hours</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright */}
        <div className="mt-12 text-center text-xs text-white/85">
          Copyright© 2024 Sydney Roofing &amp; Gutters. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}