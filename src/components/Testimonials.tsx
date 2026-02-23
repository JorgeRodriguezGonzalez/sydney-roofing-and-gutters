import React from "react";
import { Star } from "lucide-react";

export type Testimonial = {
  name: string;
  text: string;
  imageSrc?: string;
};

const defaultTestimonials: Testimonial[] = [
  {
    name: "Cathrine",
    text: "We engaged Sydney Roofing & Gutters to re-roof our tiled roof to a new colorbond roof. They did a great job and we were so happy with the way it came out. Very professional and hard working team.",
    imageSrc: "/images/roof-restoration-project-after.jpg",
  },
  {
    name: "Wayne",
    text: "Excellent eye for detail. Quality workmanship, they built a magnificent pergola around our pool. Perfect for entertaining our Guests \u2014 we are extremely happy with their work!!",
    imageSrc: "/images/complete-roof-replacement-after.jpg",
  },
  {
    name: "Sonia",
    text: "The boys changed all our old rusted gutters to new quad gutters and pressure washed our roof. Good job.",
    imageSrc: "/images/roof-repair-and-restoration-1.jpg",
  },
];

const Stars: React.FC = () => (
  <div className="flex items-center justify-center gap-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className="h-5 w-5 text-[#facc15]"
        fill="currentColor"
        stroke="currentColor"
      />
    ))}
  </div>
);

function Initials({ name }: { name: string }) {
  const parts = name.split(" ");
  const initials = parts.length > 1 ? parts[0][0] + parts[parts.length - 1][0] : parts[0][0];
  return (
    <div className="h-[170px] w-[170px] sm:h-[190px] sm:w-[190px] rounded-[28px] bg-[#179DC2]/10 flex items-center justify-center">
      <span className="text-[#179DC2] font-extrabold text-5xl">{initials.toUpperCase()}</span>
    </div>
  );
}

type Props = {
  reviews?: Testimonial[];
  heading?: string;
};

const Testimonials: React.FC<Props> = ({ reviews, heading = "What Our Clients Say" }) => {
  const items = reviews || defaultTestimonials;

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:py-14">
        <h2 className="text-center font-exo text-[34px] font-extrabold tracking-tight text-black sm:text-[40px]">
          {heading}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white p-8 shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
            >
              <div className="flex justify-center">
                <div className="rounded-[28px] bg-white p-2">
                  {t.imageSrc ? (
                    <img
                      src={t.imageSrc}
                      alt={`${t.name} testimonial`}
                      className="h-[170px] w-[170px] rounded-[28px] object-cover sm:h-[190px] sm:w-[190px]"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <Initials name={t.name} />
                  )}
                </div>
              </div>

              <p className="mx-auto mt-8 max-w-[360px] text-center font-montserrat text-[16px] leading-relaxed text-black/45">
                {t.text}
              </p>

              <div className="mt-10">
                <Stars />
              </div>

              <div className="mt-6 text-center font-exo text-[20px] font-extrabold text-black">
                {t.name}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
