import React, { useState, type FormEvent } from "react";
import { submitNetlifyForm } from "@/lib/netlifyForm";

const FORM_NAME = "Bottom form";

export default function MapWithForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    setIsSubmitting(true);
    setShowSuccess(false);

    try {
      const response = await submitNetlifyForm({
        form,
        endpoint: "/",
        fullName: { firstField: "firstName", lastField: "lastName", targetField: "fullName" },
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
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT: MAP */}
          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-sm shadow-sm">
              <div className="h-[360px] sm:h-[420px] lg:h-[560px]" />
              <iframe
                title="Sydney NSW Map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d424116.356202419!2d150.989004!3d-33.853348000000004!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129838f39a743f%3A0x3017d681632a850!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1768957235314!5m2!1sen!2sus"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-full">
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-serif text-3xl font-semibold tracking-wide sm:text-4xl">
                Request A FREE Quote!
              </h2>

              <p className="mt-3 text-sm text-gray-500">Or call us directly on...</p>

              <a
                href="tel:1300796024"
                className="mt-6 inline-flex items-center justify-center gap-3"
                aria-label="Call 1300796024"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="text-[#ff1616]"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                  />
                </svg>

                <span className="text-2xl font-extrabold text-black sm:text-3xl">
                  1300796024
                </span>
              </a>

              {showSuccess && (
                <div className="mx-auto mt-4 max-w-[560px] text-center text-sm text-emerald-700">
                  Thanks! We&apos;ll contact you shortly.
                </div>
              )}

              <form
                name={FORM_NAME}
                method="POST"
                action="/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="mt-10 text-left"
              >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value={FORM_NAME} />
                <input type="hidden" name="fullName" value="" />

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Input placeholder="First Name" name="firstName" required />
                  <Input placeholder="Last Name" name="lastName" required />
                  <Input placeholder="Phone Number" name="phone" required />
                  <Input placeholder="Email Address" name="email" type="email" required />
                </div>

                <div className="mt-5">
                  <Input placeholder="Suburb" name="suburb" />
                </div>

                <div className="mt-5">
                  <textarea
                    name="issue"
                    placeholder="What seems to be the issue?"
                    className="h-32 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full rounded-lg bg-[#169fc3] py-4 text-center font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[#ff1616] disabled:cursor-not-allowed disabled:opacity-70"
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
}

function Input({
  placeholder,
  name,
  type = "text",
  required = false,
}: {
  placeholder: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
    />
  );
}