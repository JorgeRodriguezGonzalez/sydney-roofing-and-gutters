import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  text: string;
  imageSrc: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Cathrine",
    text:
      "We engaged Sydney Roofing & Gutters to re-roof our tiled roof to a new colorbond roof. They did a great job and we were so happy with the way it came out. Very professional and hard working team.",
    // Usa tus imágenes reales cuando me las pases (por ahora placeholders coherentes)
    imageSrc: "/images/roof-restoration-project-after.jpg",
  },
  {
    name: "Wayne",
    text:
      "Excellent eye for detail. Quality workmanship, they built a magnificent pergola around our pool. Perfect for entertaining our Guests — we are extremely happy with their work!!",
    imageSrc: "/images/complete-roof-replacement-after.jpg",
  },
  {
    name: "Sonia",
    text:
      "The boys changed all our old rusted gutters to new quad gutters and pressure washed our roof. Good job.",
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

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:py-14">
        <h2 className="text-center font-exo text-[34px] font-extrabold tracking-tight text-black sm:text-[40px]">
          What Our Clients Say
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-2xl bg-white p-8 shadow-[0_10px_28px_rgba(0,0,0,0.12)]"
            >
              <div className="flex justify-center">
                <div className="rounded-[28px] bg-white p-2">
                  <img
                    src={t.imageSrc}
                    alt={`${t.name} testimonial`}
                    className="h-[170px] w-[170px] rounded-[28px] object-cover sm:h-[190px] sm:w-[190px]"
                    loading="lazy"
                    decoding="async"
                  />
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