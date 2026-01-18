import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Review = {
  id: string;
  name: string;
  yearsAgo: string;
  avatarType: "letter" | "image";
  avatarLetter?: string;
  avatarBg?: string;
  avatarImg?: string;
  text: string;
};

function useCardsPerPage() {
  const [cards, setCards] = useState(() => {
    if (typeof window === "undefined") return 3;
    const w = window.innerWidth;
    if (w >= 1024) return 3; // lg+
    if (w >= 640) return 2; // sm..md
    return 1; // mobile
  });

  useEffect(() => {
    const onResize = () => {
      const w = window.innerWidth;
      setCards(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return cards;
}

function StarsRow() {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-5 w-5 text-[#f59e0b]"
          fill="currentColor"
          stroke="currentColor"
        />
      ))}
    </div>
  );
}

function GoogleMiniMark() {
  return (
    <div className="grid h-6 w-6 place-items-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
      <span className="font-exo text-[14px] font-extrabold text-[#4285F4]">G</span>
    </div>
  );
}

const ReviewsSlider: React.FC = () => {
  const reviews: Review[] = useMemo(
    () => [
      {
        id: "r1",
        name: "Laura B",
        yearsAgo: "4 years ago",
        avatarType: "letter",
        avatarLetter: "L",
        avatarBg: "bg-[#f97316]",
        text:
          "My tile roof was due for an upgrade so I decided to call Sydney Roofing and Gutters for a metal roof installation. The booking process was quick and easy, got an estimate fast and the team was professional throughout the job.",
      },
      {
        id: "r2",
        name: "Julian Portelli",
        yearsAgo: "4 years ago",
        avatarType: "letter",
        avatarLetter: "J",
        avatarBg: "bg-[#94a3b8]",
        text:
          "Awesome job! Sydney roof and gutters recently installed our new roof and it looks amazing. Great team who kept us updated throughout the entire job.Would definitely recommend them for anyone needing roofing work done.",
      },
      {
        id: "r3",
        name: "rahul b",
        yearsAgo: "5 years ago",
        avatarType: "letter",
        avatarLetter: "r",
        avatarBg: "bg-[#6366f1]",
        text:
          "Got new gutters and guards from these. Team was friendly and did a great job. Really improved the look of the place and gave me peace of mind as my old gutters were rusty and overflowing in heavy rain.",
      },
      {
        id: "r4",
        name: "Kirsty M",
        yearsAgo: "3 years ago",
        avatarType: "letter",
        avatarLetter: "K",
        avatarBg: "bg-[#22c55e]",
        text:
          "From quote to completion, everything was smooth. The crew arrived on time, explained what they were doing, and cleaned up after. Very happy with the roof restoration result and the finish looks fantastic.",
      },
      {
        id: "r5",
        name: "Michael T",
        yearsAgo: "2 years ago",
        avatarType: "letter",
        avatarLetter: "M",
        avatarBg: "bg-[#0ea5e9]",
        text:
          "We needed leak detection and some repairs. They found the issue quickly and fixed it properly. Communication was excellent and pricing was fair. Highly recommend for roof repairs in Sydney.",
      },
      {
        id: "r6",
        name: "Sofia P",
        yearsAgo: "1 year ago",
        avatarType: "letter",
        avatarLetter: "S",
        avatarBg: "bg-[#a855f7]",
        text:
          "Great experience with gutter replacement. The team suggested improvements and the final result looks clean and modern. They also helped with downpipes and ensured everything drained correctly.",
      },
    ],
    []
  );

  const cardsPerPage = useCardsPerPage();
  const pageCount = Math.ceil(reviews.length / cardsPerPage);

  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [page, setPage] = useState(0);

  const clampPage = (p: number) => Math.max(0, Math.min(pageCount - 1, p));

  const scrollToPage = (p: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const next = clampPage(p);
    el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
    setPage(next);
  };

  const handlePrev = () => scrollToPage(page - 1);
  const handleNext = () => scrollToPage(page + 1);

  useEffect(() => {
    scrollToPage(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardsPerPage]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const w = el.clientWidth || 1;
      const p = clampPage(Math.round(el.scrollLeft / w));
      setPage(p);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageCount]);

  const canPrev = page > 0;
  const canNext = page < pageCount - 1;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-10">
          {/* LEFT: Google summary panel */}
          <div className="w-full max-w-[420px] lg:max-w-[360px] lg:shrink-0">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 overflow-hidden rounded-md border border-black/10 bg-black/5">
                <img
                  src="/images/hero-roof.jpg"
                  alt="Sydney Roofing and Gutters"
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="min-w-0">
                <div className="font-montserrat text-[18px] font-semibold text-black">
                  Sydney Roofing and Gutters
                </div>

                <div className="mt-1 flex items-center gap-2">
                  <span className="font-exo text-[28px] font-extrabold leading-none text-[#f59e0b]">
                    5.0
                  </span>
                  <div className="translate-y-[1px]">
                    <StarsRow />
                  </div>
                </div>

                <div className="mt-1 font-montserrat text-sm text-black/60">
                  Based on 24 reviews
                </div>

                <div className="mt-1 font-montserrat text-sm text-black/50">
                  powered by{" "}
                  <span className="font-semibold text-black/70">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                  </span>
                </div>

                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#4285F4] px-5 py-2 font-montserrat text-sm font-medium text-white shadow-[0_6px_16px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#2f6fe0]"
                >
                  review us on <GoogleMiniMark />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Slider */}
          {/* ✅ min-w-0 evita overflow en flex row */}
          <div className="relative w-full min-w-0 lg:flex-1">
            {/* ✅ overflow-hidden mantiene todo “dentro de la caja” */}
            <div className="relative min-w-0 overflow-hidden">
              {/* Arrows (inside the container, no translate) */}
              <button
                type="button"
                onClick={handlePrev}
                disabled={!canPrev}
                aria-label="Previous reviews"
                className={[
                  "absolute left-2 top-1/2 z-20 -translate-y-1/2",
                  "grid h-10 w-10 place-items-center rounded-full",
                  "text-black/35 transition-colors hover:text-black/55",
                  "disabled:cursor-not-allowed disabled:opacity-30",
                ].join(" ")}
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!canNext}
                aria-label="Next reviews"
                className={[
                  "absolute right-2 top-1/2 z-20 -translate-y-1/2",
                  "grid h-10 w-10 place-items-center rounded-full",
                  "text-black/35 transition-colors hover:text-black/55",
                  "disabled:cursor-not-allowed disabled:opacity-30",
                ].join(" ")}
              >
                <ChevronRight className="h-7 w-7" />
              </button>

              {/* Scroll container (snap + hidden scrollbar) */}
              <div
                ref={scrollerRef}
                className="
                  reviews-scroll
                  w-full min-w-0
                  overflow-x-auto scroll-smooth
                  snap-x snap-mandatory
                  [scrollbar-width:none]
                  [-ms-overflow-style:none]
                  px-12
                "
              >
                <style>{`
                  .reviews-scroll::-webkit-scrollbar { display: none; }
                `}</style>

                <div className="flex gap-6 py-2">
                  {reviews.map((r) => (
                    <article
                      key={r.id}
                      className="
                        snap-start
                        shrink-0
                        rounded-xl border border-black/10 bg-white
                        shadow-[0_8px_22px_rgba(0,0,0,0.10)]
                        p-5
                        basis-full
                        sm:basis-[calc((100%-24px)/2)]
                        lg:basis-[calc((100%-48px)/3)]
                      "
                    >
                      {/* Card header */}
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-3">
                          {r.avatarType === "image" && r.avatarImg ? (
                            <img
                              src={r.avatarImg}
                              alt={r.name}
                              className="h-12 w-12 rounded-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          ) : (
                            <div
                              className={[
                                "grid h-12 w-12 place-items-center rounded-full text-white",
                                r.avatarBg ?? "bg-slate-400",
                              ].join(" ")}
                            >
                              <span className="font-exo text-xl font-extrabold">
                                {r.avatarLetter ?? r.name.slice(0, 1).toUpperCase()}
                              </span>
                            </div>
                          )}

                          <div className="min-w-0">
                            <div className="font-montserrat text-[16px] font-semibold text-[#2563eb]">
                              {r.name}
                            </div>
                            <div className="font-montserrat text-sm text-black/45">
                              {r.yearsAgo}
                            </div>
                          </div>
                        </div>

                        <GoogleMiniMark />
                      </div>

                      {/* Stars */}
                      <div className="mt-4">
                        <StarsRow />
                      </div>

                      {/* Scrollable text area */}
                      <div className="mt-4">
                        <div className="h-[160px] overflow-y-auto pr-2 font-montserrat text-[15px] leading-relaxed text-black/75">
                          {r.text}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {Array.from({ length: pageCount }).map((_, i) => {
            const active = i === page;
            return (
              <button
                key={i}
                type="button"
                onClick={() => scrollToPage(i)}
                aria-label={`Go to page ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full transition-all",
                  active ? "bg-[#2563eb]" : "bg-black/20 hover:bg-black/30",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;