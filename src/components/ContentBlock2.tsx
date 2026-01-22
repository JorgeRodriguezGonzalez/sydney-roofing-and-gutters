import React, { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

type HelpItem = {
  title: string;
  body: string[];
};

const HELP_ITEMS: HelpItem[] = [
  {
    title: "Roof Repair",
    body: [
      "General roof repairs are our specialty for Sydney properties. We have been in the industry's frontline for years, which means we have experience delivering all kinds of repairs on roofing systems.",
    ],
  },
  {
    title: "Tile Roof Repair",
    body: [
      "Tile roofs have become a viable material option for countless roofs in Sydney. While the tile roof looks excellent, several issues require new roof repair work. Common kinds of tile repair work needed for tile roofs consist of re-bedding, re-roofing and re-pointing.",
    ],
  },
  {
    title: "Roof Leak Repair",
    body: [
      "If you spot a leak in your roofing, it is essential to begin leak detection immediately since there may be more damage to the roofs than you realise. As your Sydney roofing company, we can locate leaks before anything negative occurs.",
    ],
  },
  {
    title: "Slate Roof Repair",
    body: [
      "If your slate roof requires repair, we can assist you. Even while slate roofs are often resilient, they might be susceptible to severe weather conditions. Slate roof repairs are our specialty, and we can provide free prices and consultations for these jobs.",
    ],
  },
  {
    title: "Metal Roof Repair",
    body: [
      "You will never have to stress about your metal roofing again. We are confident that a metal roof is the best type of roof for your home or business. It will protect you over three decades, but it also helps you save money on energy costs.",
      "Our roofing contractors have been trained in installation techniques and are experts in their field. With a varied range of metal roof styles to choose from, they will help you create a perfect roof for your home.",
      "Roofing contractors in Sydney recommend metal roofing due to its affordability, recyclability, durability, inflammability resistance, and wide range of colours. We utilise only the most durable steel for our metal roofing projects.",
      "A metal roof replacement typically takes one to two weeks, while a roof repair takes one to two days. Both of these durations depend on the scope of the project and the weather conditions. But don’t worry; we systematically replace all roofs to ensure that your home is permanently waterproof.",
    ],
  },
  {
    title: "Roof Restoration",
    body: [
      "Even the highest grade and best-constructed roofing systems will deteriorate over time. Whether your roof is merely looking a little worn down or has incurred significant damage, we can repair it in Sydney.",
      "Give us a call if you need an estimate for a new roof restoration, and one of our knowledgeable roofers can answer any questions you may have.",
    ],
  },
  {
    title: "Commercial Roof Repair",
    body: [
      "Whatever your concern is, our commercial roof repair service will get your roof in top condition with a speedy turnaround. We likewise use roof checking services as a preventative procedure to ensure there aren't any surprise concerns with your roof.",
    ],
  },
  {
    title: "Downpipe and Gutter Repair",
    body: [
      "Your gutter overflows, right? They may be clogged with dried leaves, or the slope leading to the downpipes may be insufficient. We can lend a hand to all of your gutter issues. Similarly, you can rest assured that we use high-quality materials for all roof and gutter repair jobs.",
    ],
  },
  {
    title: "Emergency Roof Repair",
    body: [
      "We offer emergency roof repair service in Sydney 24 hours a day, seven days a week since we understand that roofing problems can arise at the most inconvenient times. Whether you have a problem with a roof leak, sections of your roof have been damaged by a storm, or trees have fallen on your roof, we can dispatch one of our experienced Sydney roof repair specialists to your location.",
    ],
  },
];

type InfoCard = {
  title: string;
  text: string[];
};

const INFO_CARDS: InfoCard[] = [
  {
    title: "Residential Services",
    text: [
      "We have the experience backed by our expert tradesmen to work safely on any Residential project.",
      "We work closely with our roofing team and customers to keep the work efficient and cost-effective",
    ],
  },
  {
    title: "Strata Properties",
    text: [
      "Sydney Roofing and Gutters have worked with some of the biggest property managers' portfolios for many years.",
      "We speak highly of the significant value we offered to the table. We are one of the roofing companies to secure extensive roofing Sydney projects",
    ],
  },
  {
    title: "Pensioners & Senior Card Holders Discount",
    text: [
      "Sydney Roofing and Gutters have all the licenses and knowledge to work in a safe work environment.",
      "We can handle any job big or small.",
    ],
  },
];

const ContentBlock2: React.FC = () => {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const toggle = (title: string) => {
    setOpen((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const topParagraphs = useMemo(
    () => [
      "Call our roofing experts for more information and request a quote if you want the best roofing services.",
      "Our prices are comparatively low compared to other Sydney roofing contractors, and we don’t have any hidden charges.",
      "Even we provide 100% free quotes for roof and gutter works and anything in between. To get free quotes over the phone, call our expert at 1300796024, or you can fill out a quote form mentioned below. We will surely get back to you at the earliest.",
    ],
    []
  );

  // Desktop: columnas independientes alternando
  const { leftCol, rightCol } = useMemo(() => {
    const left: HelpItem[] = [];
    const right: HelpItem[] = [];
    HELP_ITEMS.forEach((it, idx) => {
      (idx % 2 === 0 ? left : right).push(it);
    });
    return { leftCol: left, rightCol: right };
  }, []);

  const HelpCard = (item: HelpItem) => {
    const isOpen = !!open[item.title];

    return (
      <div
        key={item.title}
        // ✅ full width dentro de su columna + misma sombra de antes
        className="w-full h-fit self-start overflow-hidden rounded-none shadow-[0_10px_18px_rgba(0,0,0,0.25)]"
      >
        <button
          type="button"
          onClick={() => toggle(item.title)}
          className="flex w-full items-center justify-between gap-4 bg-[#169fc3] px-6 py-4 text-left"
        >
          <div className="flex items-center gap-3">
            <span className="text-[16px] text-white/90">✏️</span>
            <span className="font-exo text-[18px] font-extrabold text-white">
              {item.title}
            </span>
          </div>

          <ChevronDown
            className={[
              "h-6 w-6 text-white transition-transform",
              isOpen ? "rotate-180" : "rotate-0",
            ].join(" ")}
          />
        </button>

        {isOpen && (
          <div className="bg-[#169fc3] px-6 pb-6 pt-2">
            <div className="space-y-4 font-montserrat text-[14px] leading-relaxed text-white/90">
              {item.body.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-[#efefef]">
      {/* TOP */}
      <div
        className="relative bg-black"
        style={{
          backgroundImage: `url(/images/content-block-2-background.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative mx-auto max-w-[1200px] px-4 pt-12 pb-32 sm:pt-14 sm:pb-36">
          <h2 className="font-exo text-[30px] font-extrabold leading-tight text-white sm:text-[40px]">
            Guttering Services At A Competitive Price
          </h2>

          <div className="mt-3 font-montserrat text-[16px] font-semibold text-white/90 sm:text-[18px]">
            Do not panic, We are the right roofing contractor you can trust
          </div>

          <div className="mt-6 space-y-4 font-montserrat text-[14px] leading-relaxed text-white/80 sm:text-[15px]">
            {topParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Floating cards */}
          <div className="relative mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {INFO_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl bg-white p-6 shadow-[0_14px_26px_rgba(0,0,0,0.22)]"
              >
                <div className="h-full rounded-lg border-2 border-dotted border-[#2aaad1] p-6">
                  <div className="text-center font-exo text-[20px] font-extrabold text-black">
                    {card.title}
                  </div>
                  <div className="mt-4 space-y-3 text-center font-montserrat text-[14px] font-semibold leading-relaxed text-[#2aaad1]">
                    {card.text.map((t, i) => (
                      <p key={i}>{t}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="h-16 bg-[#efefef]" />
      </div>

      {/* BOTTOM */}
      <div className="mx-auto max-w-[1200px] px-4 pb-14 pt-10 sm:pt-12">
        <h3 className="text-center font-exo text-[30px] font-extrabold tracking-tight text-black sm:text-[34px]">
          HOW WE CAN HELP
        </h3>

        {/* Mobile: 1 columna */}
        <div className="mt-10 flex flex-col gap-6 md:hidden">
          {HELP_ITEMS.map((item) => HelpCard(item))}
        </div>

        {/* Desktop: 2 columnas independientes, pero con ancho “normal” */}
        <div className="mt-10 hidden md:block">
          {/* Este wrapper simula el “grid” original: 2 columnas con gap como antes */}
          <div className="flex items-start gap-6 lg:gap-10">
            {/* Columna izquierda */}
            <div className="flex-1 flex flex-col gap-6">{leftCol.map(HelpCard)}</div>
            {/* Columna derecha */}
            <div className="flex-1 flex flex-col gap-6">{rightCol.map(HelpCard)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock2;