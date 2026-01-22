// src/pages/About.tsx
import Header from "../components/Header";
import BrandsSlider from "../components/BrandsSlider";
import ContentBlock from "../components/ContentBlock";
import Services from "../components/Services";
import ContentBlock3 from "../components/ContentBlock3";
import Testimonials from "../components/Testimonials";
import ReviewsSlider from "../components/ReviewsSlider";
import MapWithForm from "../components/MapWithForm";
import Footer from "../components/Footer";

import { Check } from "lucide-react";

const values = [
  {
    title: "Licensed & Insured",
    desc: "We operate with safety-first standards and proper insurance so you’re covered from start to finish.",
  },
  {
    title: "Transparent Pricing",
    desc: "No hidden surprises—clear scope, clear timelines, and an honest quote before we begin.",
  },
  {
    title: "Quality Workmanship",
    desc: "We focus on durable, long-lasting results—repairs and installations done right the first time.",
  },
  {
    title: "Fast Response",
    desc: "From urgent leaks to planned upgrades, we’re quick to inspect, quote, and schedule the work.",
  },
];

const whatWeDo = [
  "Roof repairs & leak detection",
  "Metal & tile roofing",
  "Roof restorations & maintenance",
  "Gutter repair, replacement & cleaning",
  "Downpipes & stormwater solutions",
  "Re-roofing & roof painting",
];

export default function About() {
  return (
    <div id="top" className="min-h-screen bg-neutral-100 text-neutral-900">
      <Header />

      {/* Hero / Page intro */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/content-block-2-background.webp"
            alt="Roofing background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:py-18">
          <div className="max-w-3xl">
            <p className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90">
              Sydney Roof & Gutter Service
            </p>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              About Sydney Roofing & Gutters
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
              We’re a Sydney-based roofing and guttering team helping homeowners, strata, and commercial
              clients keep their properties protected, leak-free, and looking great—without the stress.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quote"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-white/90"
              >
                Request a Free Quote
              </a>
              <a
                href="/contact/"
                className="inline-flex items-center justify-center rounded-md border border-white/35 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4 text-white backdrop-blur">
                <p className="text-xs font-semibold text-white/80">Service focus</p>
                <p className="mt-1 text-sm font-semibold">Roofs + Gutters (end-to-end)</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 text-white backdrop-blur">
                <p className="text-xs font-semibold text-white/80">What you get</p>
                <p className="mt-1 text-sm font-semibold">Clear scope + fast scheduling</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4 text-white backdrop-blur">
                <p className="text-xs font-semibold text-white/80">Peace of mind</p>
                <p className="mt-1 text-sm font-semibold">Safety-first workmanship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands (trust logos) */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <BrandsSlider />
        </div>
      </section>

      {/* Reuse your existing “content block” section (video + copy) */}
      <ContentBlock />

      {/* About copy section */}
      <section className="bg-neutral-100">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                A team you can trust—right here in Sydney
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                Our goal is simple: deliver reliable roofing and guttering work that protects your home
                and saves you from repeat repairs. Whether it’s a minor leak, a full restoration, or
                brand-new gutters, we take a practical approach—inspect properly, explain the options,
                then complete the work with clean finishes.
              </p>

              <p className="mt-4 text-sm leading-relaxed text-neutral-700 sm:text-base">
                We’re proud to support Sydney suburbs with responsive service, solid communication, and
                workmanship that holds up in real weather—not just on day one.
              </p>

              <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold">What we do best</h3>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {whatWeDo.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100">
                        <Check className="h-4 w-4 text-sky-700" />
                      </span>
                      <span className="text-sm text-neutral-700">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#quote"
                    className="inline-flex items-center justify-center rounded-md bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-700"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="/roofing-service/"
                    className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:bg-neutral-50"
                  >
                    Explore Roofing Services
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold">What you can expect from us</h3>
              <div className="mt-5 space-y-4">
                {values.map((v) => (
                  <div key={v.title} className="rounded-xl border border-neutral-200 p-4">
                    <p className="font-semibold">{v.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-neutral-700">{v.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-neutral-50 p-4">
                <p className="text-sm font-semibold text-neutral-900">Need help fast?</p>
                <p className="mt-1 text-sm text-neutral-700">
                  If you’re dealing with a leak or urgent issue, request a quote and we’ll get back to you
                  quickly.
                </p>
                <a
                  href="#quote"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-neutral-800"
                >
                  Request a Free Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid (your component) */}
      <Services />

      {/* “How we can help” steps (your component) */}
      <ContentBlock3 />

      {/* Testimonials + Reviews */}
      <Testimonials />
      <ReviewsSlider />

      {/* Map + form */}
      <section id="quote">
        <MapWithForm />
      </section>

      <Footer />
    </div>
  );
}