// src/components/ContentBlock3.tsx
import { useMemo, useState } from "react";

type AccordionItem = {
  title: string;
  paragraphs: string[];
};

const ChevronIcon = ({ open }: { open: boolean }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="shrink-0"
  >
    {open ? (
      <path
        d="M6 15l6-6 6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ) : (
      <path
        d="M6 9l6 6 6-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )}
  </svg>
);

const CircleCheck = () => (
  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#2f6fff] text-white shadow-sm">
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const WhiteCheck = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15 text-white">
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 6L9 17l-5-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const StepIcon = ({ type }: { type: "phone" | "calc" | "send" }) => {
  if (type === "phone") {
    return (
      <svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M22 16.9v3a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-8.7-3.1A19.5 19.5 0 0 1 5.2 12 19.9 19.9 0 0 1 2.1 3.2 2 2 0 0 1 4.1 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 8.7a16 16 0 0 0 7.3 7.3l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  // Calculator (outline) - white strokes like the original screenshot
  if (type === "calc") {
    return (
      <svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="6.2"
          y="3"
          width="11.6"
          height="18"
          rx="2.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
        />
        <rect
          x="8.3"
          y="6"
          width="7.4"
          height="2.8"
          rx="0.8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <rect
          x="8.3"
          y="10.8"
          width="3"
          height="3"
          rx="0.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <rect
          x="12.7"
          y="10.8"
          width="3"
          height="3"
          rx="0.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <rect
          x="8.3"
          y="15.2"
          width="3"
          height="3"
          rx="0.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <rect
          x="12.7"
          y="15.2"
          width="3"
          height="3"
          rx="0.7"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
      </svg>
    );
  }

  // Paper plane (outline) - cleaner and readable in white
  return (
    <svg width="46" height="46" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M22 2 11 13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 2 15 22l-4-9-9-4 20-7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default function ContentBlock3() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items: AccordionItem[] = useMemo(
    () => [
      {
        title: "Cheap Gutter Maintenance",
        paragraphs: [
          "Gutter maintenance in Sydney is crucial to keep them in good condition. Our experienced team offers complete maintenance services on your gutter. It includes several processes like gutter cleaning, repairs, and replacements.",
          "We suggest you never try to do gutter maintenance by yourself. It is just a matter of a few amounts, and maybe you can destroy your gutter.",
          "It costs you more than simple gutter maintenance. Always hire professional gutter experts just like us to do your gutter maintenance. There are some processes we follow with all safety precautions.",
          "Our staff are well trained and experienced in this job.",
        ],
      },
      {
        title: "Gutter Repairs",
        paragraphs: [
          "Sydney Roofing and Gutters offers complete gutter repair services to fix any problems you might encounter with your gutter system.",
          "Those must be cleaned and maintained regularly. Our team comes with the optimum mix of experience and the ability to produce quality work consistently.",
          "Always repair your gutter from a reputable company that is trusted and well known in the market. We are a trusted and reputed company to take care of your gutter. We do an excellent job finding the best solution to all your unique problems.",
        ],
      },
      {
        title: "Gutter Leaf Guards",
        paragraphs: [
          "If you have had enough of gutter blockages and don’t want to call the specialist who cleans your gutters way too often, we have the solution for your problem.",
          "We offer free inspections to help you identify your problems. We can install gutter leaf guards to prevent leaves and debris from filling gutters and blocking downpipes. Once you install gutter roof guards, it will save your money for a longer duration.",
          "You need not call an expert to clean your gutter regularly. We have many options available for you as a gutter leaf guard. Give us a call at 1300796024 and ask for types of gutter leaf guards. All products are genuine and 100% under warranty.",
        ],
      },
      {
        title: "Roof Replacement",
        paragraphs: [
          "It’s about time to have a new roof to keep your house attractive while keeping your loved ones safe from harm. We are the roofing Sydney company ready to save you from your old leaking roof.",
        ],
      },
      {
        title: "High-quality Roofing Materials",
        paragraphs: [
          "Get your new roof installed with the Sydney roofers, who only use the high-quality materials to bring new installations into a work of art.",
          "We abide by commercial roofing standards to only choose the roofing materials that are safe to use and can withstand the test of time",
        ],
      },
    ],
    []
  );

  return (
    <section className="bg-white">
      {/* Top intro */}
      <div className="bg-[#efefef]">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-10">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-black md:text-4xl">
            Affordable Gutter Cleaning Services
          </h2>

          <div className="mx-auto mt-6 max-w-5xl space-y-5 text-center text-[15px] leading-7 text-black/45">
            <p>
              Cleaning your gutter is essential for keeping your gutter system
              functioning properly and increasing its lifespan. It is
              recommended that your gutter should be cleaned twice a year to
              keep the drainage system in the best functioning conditions and
              avoid the need for more costly gutter repairs or replacements.
            </p>
            <p>
              Always hire professional experts to keep your gutter clean. We
              have professionals with experienced people cleaning your gutter,
              even in an emergency.
            </p>
            <p>
              We are trusted by many people, whether in Sydney’s metropolitan
              area or the Sydney suburbs. To check, you can visit our portfolio
              page. You will surely understand who we are and how our great team
              do our work.
            </p>
          </div>

          <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            <div className="flex items-start gap-4">
              <CircleCheck />
              <p className="pt-1 text-[15px] font-extrabold leading-6 text-black">
                We treat every roofing job
                <br />
                with a dedication to delivering
                <br />
                the best results possible
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CircleCheck />
              <p className="pt-1 text-[15px] font-extrabold leading-6 text-black">
                We always perform our
                <br />
                roofing services with the
                <br />
                utmost professional approach
              </p>
            </div>

            <div className="flex items-start gap-4">
              <CircleCheck />
              <p className="pt-1 text-[15px] font-extrabold leading-6 text-black">
                We always try to limit
                <br />
                disruptions while work is in
                <br />
                progress &amp; treat all Sydney
                <br />
                homes with the utmost
                <br />
                respect
              </p>
            </div>
          </div>

          {/* Accordion title */}
          <h3 className="mt-14 text-center text-3xl font-extrabold tracking-tight text-black md:text-4xl">
            All Your Guttering Needs Under One Roof.
          </h3>

          {/* Accordions */}
          <div className="mx-auto mt-10 max-w-3xl space-y-4 pb-14">
            {items.map((it, idx) => {
              const open = openIndex === idx;

              return (
                <div
                  key={it.title}
                  className="overflow-hidden rounded-md shadow-[0_8px_18px_rgba(0,0,0,0.20)]"
                >
                  <button
                    type="button"
                    className={[
                      "flex w-full items-center justify-between gap-4 px-6 py-4 text-left",
                      "bg-[#169fc3]",
                      open ? "text-black" : "text-white",
                    ].join(" ")}
                    onClick={() => setOpenIndex(open ? null : idx)}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg" aria-hidden="true">
                        ✏️
                      </span>
                      <span className="text-lg font-extrabold md:text-xl">
                        {it.title}
                      </span>
                    </div>

                    <span className={open ? "text-black" : "text-white"}>
                      <ChevronIcon open={open} />
                    </span>
                  </button>

                  {open && (
                    <div className="bg-[#169fc3] px-6 pb-6 pt-2 text-[15px] leading-7 text-white">
                      {it.paragraphs.map((p, i) => (
                        <p key={i} className={i === 0 ? "" : "mt-5"}>
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA pill (overlaps next section) */}
      <div className="relative z-10 mx-auto -mt-2 max-w-6xl px-4">
        <div className="mx-auto w-full max-w-4xl translate-y-8 rounded-2xl border-2 border-black bg-white px-6 py-5 shadow-[0_10px_24px_rgba(0,0,0,0.22)] md:px-10">
          <div className="grid grid-cols-1 items-center gap-5 md:grid-cols-2">
            <a
              href="#get-quote"
              className="text-center font-extrabold uppercase tracking-tight text-black"
            >
              BOOK A{" "}
              <span className="text-[#169fc3]">FREE QUOTE</span>
              <br />
              ONLINE
            </a>

            <a
              href="tel:1300796024"
              className="flex items-center justify-center gap-4 text-black"
            >
              <span className="text-[#ff1616]" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24">
                  <path
                    d="M22 16.9v3a2 2 0 0 1-2.2 2 19.9 19.9 0 0 1-8.7-3.1A19.5 19.5 0 0 1 5.2 12 19.9 19.9 0 0 1 2.1 3.2 2 2 0 0 1 4.1 1h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 8.7a16 16 0 0 0 7.3 7.3l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6A2 2 0 0 1 22 16.9Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <div className="leading-tight">
                <div className="text-2xl font-extrabold tracking-tight">
                  1300796024
                </div>
                <div className="text-sm text-black/70">
                  Call the cleaning experts
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Background + 3 steps */}
      <div
        className="relative mt-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/content-block-3-background.webp)",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-16 md:pt-24">
          <p className="mx-auto max-w-5xl text-center text-xl font-extrabold leading-snug text-white md:text-2xl">
            Complete Guaranteed Roofing Work. Our gutter Sydney services are
            reliable and affordable. We offer free quotes and inspections. Call
            us to know more about our service.
          </p>

          <div className="mx-auto mt-10 overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
            <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x md:divide-white/35">
              {/* 1 */}
              <div className="bg-[#40b6d4] px-7 py-9 text-white md:px-8">
                <div className="flex items-center justify-center">
                  <StepIcon type="phone" />
                </div>
                <div className="mt-4 text-center text-lg font-extrabold">
                  1. Call Us
                </div>

                <p className="mt-8 text-sm text-white/90">
                  Contact us on{" "}
                  <a
                    href="tel:1300796024"
                    className="font-bold underline underline-offset-2"
                  >
                    1300796024
                  </a>
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Speak to professional Roofers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Available 7 days a week</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Experienced Roofers</span>
                  </li>
                </ul>
              </div>

              {/* 2 */}
              <div className="bg-[#169fc3] px-7 py-9 text-white md:px-8">
                <div className="flex items-center justify-center text-white">
                  <StepIcon type="calc" />
                </div>

                {/* SIN underline */}
                <div className="mt-4 text-center text-lg font-extrabold">
                  2. Receive a Free Quote
                </div>

                <p className="mt-8 text-sm text-white/90">
                  Let us know what your roofing or guttering issues are for a{" "}
                  <span className="font-bold">free quote!</span>
                </p>

                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Free Quote</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Serve both commercial and residential</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>We'll book a time that suits you best</span>
                  </li>
                </ul>
              </div>

              {/* 3 */}
              <div className="bg-[#0f7e9a] px-7 py-9 text-white md:px-8">
                <div className="flex items-center justify-center text-white">
                  <StepIcon type="send" />
                </div>
                <div className="mt-4 text-center text-lg font-extrabold">
                  3. We Come to You
                </div>

                <p className="mt-8 text-sm text-white/90">We'll clean all messes</p>

                <ul className="mt-6 space-y-3 text-sm">
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Safety First</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Professional Grade Work</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <WhiteCheck />
                    <span>Guarantee Proper Service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-6" />
        </div>
      </div>
    </section>
  );
}