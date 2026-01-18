import React from "react";

type Brand = {
  src: string;
  alt: string;
  // Control fino por logo (para que se vea como en el screenshot)
  maxW: string; // tailwind max-w-*
  h: string; // tailwind h-*
};

const brands: Brand[] = [
  { src: "/images/bluescope.webp", alt: "Bluescope Steel", maxW: "max-w-[260px]", h: "h-[210px]" },
  { src: "/images/colorbond.webp", alt: "Colorbond", maxW: "max-w-[300px]", h: "h-[210px]" },
  { src: "/images/velux.webp", alt: "VELUX", maxW: "max-w-[240px]", h: "h-[210px]" },
  // MRCAA necesita más ancho por el texto
  { src: "/images/mrcaa.webp", alt: "MRCAA - Metal Roofing and Cladding Association of Australia", maxW: "max-w-[420px]", h: "h-[210px]" },
];

const BrandsSlider: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:py-12">
        {/* Desktop/tablet: fila fija como el screenshot */}
        <div className="hidden md:grid grid-cols-4 items-center justify-items-center gap-x-12 lg:gap-x-16">
          {brands.map((b) => (
            <div key={b.src} className={`w-full ${b.maxW} flex items-center justify-center`}>
              <img
                src={b.src}
                alt={b.alt}
                className={`${b.h} w-auto object-contain`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>

        {/* Mobile: slider horizontal (swipe) */}
        <div className="md:hidden">
          <div
            className="
              flex items-center gap-10
              overflow-x-auto scroll-smooth
              snap-x snap-mandatory
              py-2
              [scrollbar-width:none]
              [-ms-overflow-style:none]
            "
          >
            <style>{`
              .brands-mobile::-webkit-scrollbar { display: none; }
            `}</style>

            <div className="brands-mobile flex items-center gap-10">
              {brands.map((b) => (
                <div key={b.src} className="snap-center shrink-0 flex items-center justify-center">
                  <img
                    src={b.src}
                    alt={b.alt}
                    className="h-[84px] w-auto object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSlider;