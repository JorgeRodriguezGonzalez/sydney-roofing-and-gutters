// src/components/FaqSection.tsx
import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  id: string;
  question: string;
  answer: React.ReactNode;
};

type LinkTile = {
  label: string;
  href: string;
};

function FaqCard({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="w-full overflow-hidden border border-black/20 bg-[#169fc3] shadow-[0_10px_25px_rgba(0,0,0,0.25)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
      >
        <h3
          className={[
            "text-[20px] font-extrabold leading-tight",
            isOpen ? "text-black" : "text-white",
          ].join(" ")}
        >
          {item.question} <span className="ml-1">🏠</span>
        </h3>

        <ChevronDown
          className={[
            "h-6 w-6 shrink-0 transition-transform duration-200",
            isOpen ? "rotate-180 text-black" : "text-white",
          ].join(" ")}
        />
      </button>

      <div
        className={[
          "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        ].join(" ")}
      >
        <div className="min-h-0">
          <div className="px-6 pb-6 pt-0 text-[16px] leading-relaxed text-white">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection() {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const phone = "1300796024";

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const faqs = useMemo<FaqItem[]>(
    () => [
      {
        id: "quote-cost",
        question: "How much does a quote cost?",
        answer: (
          <div className="space-y-4">
            <p>
              We do not take even a single penny for every roofing quote. Unlike
              some roofing contractors, your quote will be 100% free with us.
              Contact us on{" "}
              <a
                href={`tel:${phone}`}
                className="font-semibold text-[#0b4ea2] underline"
              >
                {phone}
              </a>{" "}
              for a free quote.
            </p>
            <p>
              We will give you one on the phone or visit your property. You can
              also fill out the quote form placed below to get an answer from
              our experts. We will be glad to assist you and all our Sydney
              customers.
            </p>
          </div>
        ),
      },
      {
        id: "location",
        question: "Where are you guys located?",
        answer: (
          <div className="space-y-4">
            <p>
              We are located in Sydney, New South Wales and operate in every
              suburb in Sydney. Distance doesn't matter for our team members.
              Whatever the problem you have, we will fix it at the earliest. We
              are just a call away from you.
            </p>
            <p>
              We provide emergency services for unexpected roof leaks too.
              That’s the kind of service our Sydney roofing clients enjoy.
            </p>
          </div>
        ),
      },
      {
        id: "guttering",
        question: "Do you do guttering work?",
        answer: (
          <div className="space-y-4">
            <p>
              Yes. From simple repairs to tedious maintenance work, we can help
              you.
            </p>
            <p>
              Any query related to our gutter and roofing services? Please feel
              free to call us at{" "}
              <a
                href={`tel:${phone}`}
                className="font-semibold text-[#0b4ea2] underline"
              >
                {phone}
              </a>{" "}
              to get more information about our services. You can fill out the
              contact form, and we will surely call you back to assist you
              further. We provide emergency services as well. We are open 24/7
              for you.
            </p>
          </div>
        ),
      },
      {
        id: "roofing-work",
        question: "What type of roofing work do you do?",
        answer: (
          <div className="space-y-4">
            <p>
              We do all types of roofing work for our customers, from roof
              inspections and leak detection to complicated roofing demands. It
              includes:
            </p>

            <ul className="list-disc space-y-2 pl-6 marker:text-white">
              <li className="font-semibold text-[#0b4ea2]">Metal roofing</li>
              <li>Slate roof installation</li>
              <li className="font-semibold text-[#0b4ea2]">Roof Restoration</li>
              <li>Commercial roof repair</li>
              <li>Installation of Roofing systems</li>
              <li>Roof replacements</li>
              <li>Gutter installation</li>
              <li>Gutter clean-up</li>
              <li>Re-roofs</li>
              <li className="font-semibold text-[#0b4ea2]">
                Colorbond roofing installation
              </li>
              <li>Tile roofing</li>
              <li>Roof maintenance</li>
              <li>And many more.</li>
            </ul>

            <p>
              To know more about our roofing company, please call at{" "}
              <a
                href={`tel:${phone}`}
                className="font-semibold text-[#0b4ea2] underline"
              >
                {phone}
              </a>
              . We will assist you better over phone calls or visit your
              property.
            </p>
          </div>
        ),
      },
      {
        id: "metal-roofs",
        question: "Do you do metal roofs?",
        answer: (
          <div className="space-y-4">
            <p>
              Yes, We specialise in metal re-roofing. It's a popular thing now,
              and we have repaired countless roofing structures across Sydney.
              More than its visual appeal, it is a durable roof that gets the
              job done.
            </p>
            <p>
              We use only high-quality roofing materials with a full warranty.
              It saves your money by up to 50% and keeps your room cool from the
              inside. People in Australia prefer metal re-roofing for their
              needs. Metal roofs are in high demand nowadays.
            </p>
          </div>
        ),
      },
    ],
    []
  );

  const tiles = useMemo<LinkTile[]>(
    () => [
      {
        label: "Roofing & Gutters Service Hills\nDistrict",
        href: "/roofing-services-hills-district/",
      },
      {
        label: "Roofing & Gutters Service\nWestern Sydney",
        href: "/roofing-western-sydney/",
      },
      {
        label: "Roofing & Gutters Service South\nWest Sydney",
        href: "/roofing-south-western-sydney/",
      },
      {
        label: "Roofing & Gutters Services\nSutherland Shire",
        href: "/roofing-sutherland-shire/",
      },
      {
        label: "Roofing & Gutters Inner West\nSydney",
        href: "/roofing-inner-west-sydney/",
      },
      {
        label: "Roofing & Gutters Services\nNorth Sydney",
        href: "/roofing-north-sydney/",
      },
      {
        label: "Roofing & Gutters Services St\nGeorge",
        href: "/roofing-st-george-area/",
      },
      {
        label: "Roofing Services Northern\nBeaches",
        href: "/roofing-northern-beaches/",
      },
      {
        label: "Roofing & Gutters Services\nSydney CBD",
        href: "/roofing-sydney-cbd/",
      },
      {
        label: "Roofing & Gutters Services\nNorth Shore",
        href: "/roofing-north-shore/",
      },
      {
        label: "Roofing & Gutters Services\nEastern Suburbs",
        href: "/roofing-eastern-suburbs/",
      },
      {
        label: "Guides & Resources For Roofing\n& Gutters",
        href: "/guides/",
      },
    ],
    []
  );

  const leftCol = faqs.slice(0, 3);
  const rightCol = faqs.slice(3);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <h2 className="text-center text-4xl font-extrabold tracking-tight text-black md:text-5xl">
          Frequently Asked Questions
        </h2>

        {/* Accordions */}
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            {leftCol.map((item) => (
              <FaqCard
                key={item.id}
                item={item}
                isOpen={openIds.has(item.id)}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>

          <div className="flex flex-col gap-6">
            {rightCol.map((item) => (
              <FaqCard
                key={item.id}
                item={item}
                isOpen={openIds.has(item.id)}
                onToggle={() => toggle(item.id)}
              />
            ))}
          </div>
        </div>

        {/* Tiles */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((t, idx) => (
            <a
              key={`${t.label}-${idx}`}
              href={t.href}
              className="flex min-h-[64px] items-center justify-center whitespace-pre-line bg-[#169fc3] px-4 py-4 text-center text-[15px] font-semibold leading-snug text-white shadow-sm transition hover:bg-[#1286a8]"
            >
              {t.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}