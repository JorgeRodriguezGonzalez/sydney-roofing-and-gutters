import React, { useEffect, useMemo, useState } from "react";

type ColorItem = { name: string; color: string };

const COLORS: ColorItem[] = [
  { name: "Surfmist", color: "#dddbcc" },
  { name: "Evening Haze", color: "#c0bca1" },
  { name: "Classic Cream", color: "#ecd6af" },
  { name: "Parperbark", color: "#c7b69a" },
  { name: "Shale Grey", color: "#b0b6b2" },
  { name: "Dune", color: "#aaa69b" },
  { name: "Cove", color: "#9d9683" },
  { name: "Pale Eucalypt", color: "#728268" },
  { name: "Woodland Grey", color: "#3f4440" },
  { name: "Windspray", color: "#7b8181" },
  { name: "Gully", color: "#7e776d" },
  { name: "Mangrove", color: "#6a6e5d" },
  { name: "Deep Ocean", color: "#243a4f" },
  { name: "Cottage Green", color: "#094938" },
  { name: "Wallaby", color: "#767571" },
  { name: "Jasper", color: "#665c50" },
  { name: "Basalt", color: "#65666a" },
  { name: "Manor Red", color: "#660e0a" },
  { name: "Night Sky", color: "#000000" },
  { name: "Ironstone", color: "#313d4b" },
  { name: "Terrain", color: "#6a3d28" },
  { name: "Monument", color: "#2b2a30" },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const m = window.matchMedia(query);
    const onChange = () => setMatches(m.matches);
    onChange();
    m.addEventListener?.("change", onChange);
    return () => m.removeEventListener?.("change", onChange);
  }, [query]);

  return matches;
}

type Props = {
  baseSrc?: string;
  layerSrc?: string;
  logoSrc?: string;
};

const ColorSwitchWidget: React.FC<Props> = ({
  baseSrc = "/images/color_switch_base.webp",
  layerSrc = "/images/house.png", // ✅ cambiado
  logoSrc = "/images/Sydney-Roofing-and-Gutters.webp",
}) => {
  const [roofColor, setRoofColor] = useState<string>("#aaa69b"); // Dune
  const [gutterColor, setGutterColor] = useState<string>("#000000"); // Night Sky

  const isMobile = useMediaQuery("(max-width: 768px)");

  const gutterFilter = useMemo(() => {
    const y = isMobile ? -10 : -25;
    return `drop-shadow(8px ${y}px 0 ${gutterColor})`;
  }, [gutterColor, isMobile]);

  const Swatch = ({
    item,
    selected,
    onClick,
  }: {
    item: ColorItem;
    selected: boolean;
    onClick: () => void;
  }) => (
    <li className="relative">
      <button
        type="button"
        onClick={onClick}
        aria-label={item.name}
        className="group relative block"
      >
        <span
          className={[
            "block h-[28px] w-[28px] rounded-[2px]",
            "border border-white/80",
            "shadow-[0_2px_6px_rgba(0,0,0,0.35)]",
            selected ? "outline outline-2 outline-white" : "outline outline-0",
          ].join(" ")}
          style={{ backgroundColor: item.color }}
        />

        <span
          className="
            pointer-events-none
            absolute bottom-full left-1/2 -translate-x-1/2
            mb-2
            whitespace-nowrap
            rounded-md bg-black px-2 py-1
            text-[12px] text-white
            opacity-0 transition-opacity
            group-hover:opacity-100
          "
        >
          {item.name}
        </span>
      </button>
    </li>
  );

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-4 py-12">
        <div className="border-[10px] border-black bg-white">
          {/* IMAGE AREA */}
          <div className="relative w-full bg-white">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img
                src={baseSrc}
                alt="House"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = layerSrc;
                }}
              />

              <div className="absolute left-3 top-3 bg-white p-2 shadow-[0_8px_18px_rgba(0,0,0,0.18)]">
                <img
                  src={logoSrc}
                  alt="Sydney Roofing and Gutters"
                  className="h-[70px] w-auto object-contain sm:h-[86px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              {/* ROOF layer */}
              <img
                src={layerSrc}
                alt="Roof layer"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                style={{ backgroundColor: roofColor }}
                loading="lazy"
                decoding="async"
              />

              {/* GUTTER layer */}
              <img
                src={layerSrc}
                alt="Gutter layer"
                className="absolute inset-0 h-full w-full object-cover pointer-events-none"
                style={{ filter: gutterFilter }}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* CONTROLS */}
          <div className="bg-black px-5 py-6 sm:px-7">
            <div className="flex items-start gap-5">
              <div className="w-[86px] shrink-0 pt-[2px]">
                <div className="font-montserrat text-[14px] font-semibold leading-[1.15] text-white">
                  Roof
                  <br />
                  Color
                </div>
              </div>

              <ul className="flex flex-wrap gap-3">
                {COLORS.map((c) => (
                  <Swatch
                    key={`roof-${c.color}`}
                    item={c}
                    selected={roofColor.toLowerCase() === c.color.toLowerCase()}
                    onClick={() => setRoofColor(c.color)}
                  />
                ))}
              </ul>
            </div>

            <div className="my-5 h-px w-full bg-white/30" />

            <div className="flex items-start gap-5">
              <div className="w-[86px] shrink-0 pt-[2px]">
                <div className="font-montserrat text-[14px] font-semibold leading-[1.15] text-white">
                  Gutter
                  <br />
                  Color
                </div>
              </div>

              <ul className="flex flex-wrap gap-3">
                {COLORS.map((c) => (
                  <Swatch
                    key={`gutter-${c.color}`}
                    item={c}
                    selected={gutterColor.toLowerCase() === c.color.toLowerCase()}
                    onClick={() => setGutterColor(c.color)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ColorSwitchWidget;