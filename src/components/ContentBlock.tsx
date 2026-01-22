import React from "react";

const PHONE = "1300796024";
const YT_URL = "https://www.youtube.com/watch?v=Dd2seOHo46Y";

// Convierte watch?v=ID a embed/ID
function toYouTubeEmbed(url: string) {
  try {
    const u = new URL(url);
    const v = u.searchParams.get("v");
    if (v) return `https://www.youtube.com/embed/${v}`;
    // fallback
    return url;
  } catch {
    return url;
  }
}

const ContentBlock: React.FC = () => {
  const embedUrl = toYouTubeEmbed(YT_URL);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:py-14">
        {/* Row 1: Text + Video */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* Left text */}
          <div>
            <h2 className="font-exo text-[34px] font-extrabold leading-tight tracking-tight text-black sm:text-[42px]">
              Welcomes You Your One Stop Solution To All Your Roofing And
              Guttering Services In Sydney
            </h2>

            <div className="mt-6 space-y-5 font-montserrat text-[15px] leading-relaxed text-black/60">
              <p>
                <a href="/" className="text-[#1d4ed8] hover:underline">
                  Sydney Roofing and Gutters
                </a>{" "}
                offer effective and full gutter services that will keep your
                gutter functioning properly, leak-free, and your{" "}
                <a href="/downpipe-installation/" className="text-[#1d4ed8] hover:underline">
                  downpipes
                </a>{" "}
                unblocked and clean.
              </p>

              <p>
                We undertake a large scale of projects, from{" "}
                <a href="/residential-roofing/" className="text-[#1d4ed8] hover:underline">
                  residential
                </a>{" "}
                properties to small and large{" "}
                <a href="/commercial-roofing-service/" className="text-[#1d4ed8] hover:underline">
                  commercial
                </a>{" "}
                roofing projects, ensuring high quality at competitive prices.
              </p>
            </div>
          </div>

          {/* Right video */}
          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-none bg-black shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full"
                  src={embedUrl}
                  title="Sydney Roofing and Gutters Video"
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {/* Row 2: Text long + Image */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-2 lg:items-start">
          {/* Left long content */}
          <div>
            <h3 className="font-exo text-[24px] font-extrabold text-black sm:text-[26px]">
              Roofing Sydney Experts
            </h3>

            <div className="mt-6 space-y-5 font-montserrat text-[15px] leading-relaxed text-black/60">
              <p>
                We are Sydney&apos;s top roof repair and guttering service,
                provider. It&apos;s been more than 5 years in the roofing
                industry, and we are successively growing by providing top-quality
                work for your needs.
              </p>

              <p>
                We have fully-licensed experts with a proven track record in roof
                repairs, roof replacement, roof restoration, roof maintenance, and
                complicated gutter-related jobs. We can satisfy all your roofing
                needs whether you need roof repair such as fixing a leaking roof or
                you need a metal roof replacement we are the best. For roof
                installation, we provide a variety of materials such as metal
                roofing, colorbond roofing, tile roof, etc.
              </p>

              <p>
                Our guys offer exceptional roofing services, and part of it is
                following safety measurements before starting their work. We are
                also a fully licensed roofing company and have extensive insurance
                policies, including public liability insurance.
              </p>

              <p>
                As your trusted Sydney roofing company, we provide a fantastic job
                for your roofing and gutter problems.
              </p>

              <p>
                Our experts can help you keep your gutter functional and{" "}
                <a href="/gutter-cleaning/" className="text-[#1d4ed8] hover:underline">
                  gutter cleaning
                </a>{" "}
                within Sydney. We can do the following just for you:
              </p>

              <ul className="ml-5 list-disc space-y-2 text-black/60">
                <li>New installations of gutter and downpipe systems</li>
                <li>Valley replacement</li>
                <li>Ridge capping</li>
                <li>Re-pointing</li>
                <li>Gutter and roof restoration</li>
                <li>Gutter leaf guards installation.</li>
              </ul>

              {/* CTA row */}
              <div className="pt-4">
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center rounded-md bg-[#169fc3] px-7 py-3 font-montserrat text-[13px] font-extrabold uppercase tracking-wide text-white transition-colors hover:bg-[#0f86a6]"
                  >
                    FREE QUOTE
                  </a>

                  <div className="flex flex-wrap items-center gap-3 font-montserrat text-[14px] font-semibold text-black/70">
                    <span>OR CALL US ON</span>
                    <a
                      href={`tel:${PHONE}`}
                      className="inline-flex items-center gap-2 text-black hover:text-[#ff1616]"
                    >
                      <span className="text-[#ff1616]">📞</span>
                      <span className="font-exo text-[22px] font-extrabold text-black">
                        {PHONE}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right image with badge */}
          <div className="w-full">
            <div className="relative overflow-hidden bg-black/5 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
              <img
                src="/images/100-satisfaction-guarantee.webp"
                alt="100% Satisfaction Guarantee"
                className="h-auto w-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Badge */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
                <div className="rounded-lg bg-[#169fc3] px-7 py-3 text-center font-montserrat text-[16px] font-extrabold text-white shadow-[0_10px_22px_rgba(0,0,0,0.20)]">
                  100% Satisfaction Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentBlock;