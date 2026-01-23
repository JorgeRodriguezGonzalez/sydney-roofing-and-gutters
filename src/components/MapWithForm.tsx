import React from "react";

export default function MapWithForm() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT: MAP */}
          <div className="w-full">
            <div className="relative w-full overflow-hidden rounded-sm shadow-sm">
              {/* Responsive height similar to screenshot */}
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

          {/* RIGHT: TITLE + PHONE + FORM */}
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
                {/* Red phone icon */}
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

              <form
                name="Bottom form"
                className="mt-10 text-left"
                onSubmit={(e) => e.preventDefault()}
                netlify
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Input placeholder="First Name" name="firstName" />
                  <Input placeholder="Last Name" name="lastName" />
                  <Input placeholder="Phone Number" name="phone" />
                  <Input placeholder="Email Address" name="email" type="email" />
                </div>

                <div className="mt-5">
                  <Input placeholder="Suburb" name="suburb" />
                </div>

                <div className="mt-5">
                  <textarea
                    name="message"
                    placeholder="What seems to be the issue?"
                    className="h-32 w-full resize-none rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-8 w-full rounded-lg bg-[#169fc3] py-4 text-center font-semibold tracking-wide text-white shadow-sm transition-colors hover:bg-[#0f8eae]"
                >
                  GET QUOTE
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
}: {
  placeholder: string;
  name: string;
  type?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 placeholder:text-gray-400 outline-none focus:border-gray-400"
    />
  );
}