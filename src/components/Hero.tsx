import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";

const HERO_BG = "/images/hero-roof.webp";
const TEAL = "#169fc3";

const benefits = [
  "SIMPLE, TRUSTED & CONVENIENT",
  "PROFESSIONAL SERVICE",
  "EXPERTS IN ALL ROOFING & GUTTERING",
  "CALL FOR A FREE QUOTE",
];

const Hero = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      // Netlify-style post (safe default). If you use a different backend,
      // swap this out later.
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      setShowSuccess(true);
      form.reset();
      window.setTimeout(() => setShowSuccess(false), 6000);
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative">
      {/* HERO IMAGE + OVERLAY */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_BG})` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

        {/* ✅ Content over image */}
        <div className="relative z-10 mx-auto max-w-[1200px] px-4 pb-44 pt-16 sm:pt-20 lg:pb-56 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
            {/* LEFT */}
            <div className="text-white">
              <h1 className="font-exo text-[38px] font-extrabold uppercase leading-[1.05] tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)] sm:text-[48px] lg:text-[64px]">
                SYDNEY ROOF &amp;
                <br />
                GUTTER SERVICE
              </h1>

              <div className="mt-5">
                <span
                  className="inline-flex rounded-md px-5 py-2 font-montserrat text-[18px] font-medium text-white shadow-sm sm:text-[20px]"
                  style={{ backgroundColor: TEAL }}
                >
                  Roofing Sydney done by professionals
                </span>
              </div>
            </div>

            {/* RIGHT */}
            <ul className="space-y-4 text-white lg:justify-self-end lg:pt-2">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-4">
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-full border-[3px] border-white/65 bg-[#2f80ed]"
                    aria-hidden="true"
                  >
                    <Check className="h-6 w-6 text-white" />
                  </span>
                  <span className="font-exo text-[16px] font-bold uppercase tracking-wide sm:text-[17px]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* WHITE SECTION + FLOATING CARD */}
      <div className="bg-white">
        <div className="mx-auto max-w-[1200px] px-4">
          {/* ✅ Negative margin pulls the card up over the hero */}
          <div className="-mt-20 pb-10 sm:-mt-24 lg:-mt-28 lg:pb-14">
            {/* ✅ z-index ensures it sits above image/overlay */}
            <div
              id="quote"
              className="relative z-30 mx-auto max-w-[920px] rounded-[28px] border border-black/5 bg-white px-5 py-7 shadow-[0_14px_40px_rgba(0,0,0,0.18)] sm:px-8 sm:py-9"
            >
              <h2 className="text-center font-exo text-[26px] font-extrabold tracking-tight text-black sm:text-[32px] lg:text-[38px]">
                Request a <span style={{ color: TEAL }}>FREE</span> Quote{" "}
                <span style={{ color: TEAL }}>TODAY</span>
              </h2>

              {showSuccess && (
                <div className="mx-auto mt-3 max-w-[560px] text-center font-montserrat text-sm text-emerald-700">
                  Thanks! We&apos;ll contact you shortly.
                </div>
              )}

              <form
                name="Hero"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mx-auto mt-7 max-w-[760px]"
                netlify
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="home-quote" />

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
                  {/* Row 1 */}
                  <div>
                    <label className="sr-only" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      required
                      className="h-12 w-full rounded-lg border border-gray-300 px-4 font-montserrat text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      required
                      className="h-12 w-full rounded-lg border border-gray-300 px-4 font-montserrat text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  {/* Row 2 */}
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="h-12 w-full rounded-lg border border-gray-300 px-4 font-montserrat text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="h-12 w-full rounded-lg border border-gray-300 px-4 font-montserrat text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  {/* Row 3 */}
                  <div className="sm:col-span-2">
                    <label className="sr-only" htmlFor="suburb">
                      Suburb
                    </label>
                    <input
                      id="suburb"
                      name="suburb"
                      type="text"
                      placeholder="Suburb"
                      className="h-12 w-full rounded-lg border border-gray-300 px-4 font-montserrat text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>

                  {/* Row 4 */}
                  <div className="sm:col-span-2">
                    <label className="sr-only" htmlFor="issue">
                      What seems to be the issue?
                    </label>
                    <textarea
                      id="issue"
                      name="issue"
                      placeholder="What seems to be the issue?"
                      className="min-h-[120px] w-full resize-none rounded-lg border border-gray-300 px-4 py-3 font-montserrat text-[15px] text-black placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black/10"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 h-12 w-full rounded-lg bg-[#169fc3] font-montserrat text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#ff1616] disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? "SENDING..." : "GET QUOTE"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;