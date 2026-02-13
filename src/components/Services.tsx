import React from "react";

type Service = {
  title: string;
  // nombre del thumbnail sin ruta ni extension (snake_case, lowercase)
  thumbnail: string;
  href: string;
};

const services: Service[] = [
  {
    title: "Expert\nRoofing &\nGuttering",
    thumbnail: "expert_roofing_guttering",
    href: "#quote",
  },
  {
    title: "Guttering\nInstallation,\nRepair and\nReplacement",
    thumbnail: "guttering_installation_repair_and_replacement",
    href: "#quote",
  },
  {
    title: "Leaf\nGuards/Gutter\nGuard",
    thumbnail: "leaf_guards_gutter_guard",
    href: "#quote",
  },
  {
    title: "Gutter\nCleaning\nServices",
    thumbnail: "gutter_cleaning_services",
    href: "#quote",
  },
  {
    title: "Downpipes\nInstallation &\nRepair",
    thumbnail: "downpipes_installation_repair",
    href: "#quote",
  },
  {
    title: "Storm repair &\nFixes",
    thumbnail: "storm_repair_fixes",
    href: "#quote",
  },
  {
    title: "Roof\nInstallation,\nRepairs &\nMaintenance",
    thumbnail: "roof_installation_repairs_maintenance",
    href: "#quote",
  },
  {
    title: "Metal Roof\nInstallation &\nCoatings",
    thumbnail: "metal_roof_installation_coatings",
    href: "#quote",
  },
  {
    title: "Roof\nRestoration\nServices",
    thumbnail: "roof_restoration_services",
    href: "#quote",
  },
  {
    title: "Roofing &\nGutter Repair\nService",
    thumbnail: "roofing_gutter_repair_service",
    href: "#quote",
  },
  {
    title: "Licenced &\nProfessional\nRoofers",
    thumbnail: "licenced_professional_roofers",
    href: "#quote",
  },
  {
    title: "Testimonials\nExperience &\nExpertise",
    thumbnail: "testimonials_experience_expertise",
    href: "#quote",
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-[#f2f2f2]">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:py-14">
        <h2 className="text-center font-exo text-[30px] font-extrabold tracking-tight text-black sm:text-[36px]">
          Our Roofing &amp; Guttering Sydney Services Include:
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-10 lg:gap-y-14">
          {services.map((s) => (
            <a
              key={s.thumbnail}
              href={s.href}
              className="group flex flex-col items-center"
            >
              {/* Thumbnail circle */}
              <div className="relative">
                <div className="h-[120px] w-[120px] overflow-hidden rounded-full border border-black/50 bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)] sm:h-[132px] sm:w-[132px]">
                  <img
                    src={`/images/${s.thumbnail}.webp`}
                    alt={s.title.replaceAll("\n", " ")}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Blue title block (slightly overlaps the circle) */}
              <div
                className="
                  -mt-6
                  w-full max-w-[170px]
                  rounded-xl
                  bg-[#169fc3]
                  px-3 py-4
                  text-center
                  shadow-[0_10px_18px_rgba(0,0,0,0.14)]
                  transition-transform
                  group-hover:-translate-y-[2px]
                "
              >
                <div className="whitespace-pre-line font-montserrat text-[14px] font-semibold leading-snug text-white sm:text-[15px]">
                  {s.title}
                </div>
              </div>

              {/* Get Quote */}
              <div className="-mt-2">
                <div className="rounded-lg bg-white px-5 py-2 text-center font-montserrat text-[14px] font-semibold text-black shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
                  Get Quote
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;