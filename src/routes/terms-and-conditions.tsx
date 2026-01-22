import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const TermsAndConditionsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Terms & Conditions | Sydney Roofing & Gutters"
        description="Read the Terms & Conditions for Sydney Roofing & Gutters. Website use, quotes, service limitations, warranties, liability, and other important information."
        keywords="terms and conditions sydney roofing and gutters, roofing terms, guttering terms, website terms"
        ogTitle="Terms & Conditions | Sydney Roofing & Gutters"
        ogDescription="Website terms and service conditions for Sydney Roofing & Gutters."
        schemaType="RoofingContractor"
        location="sydney"
        customName="Sydney Roofing & Gutters"
        customDescription="Sydney Roofing & Gutters terms and conditions for website use and services."
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img
            src="/images/hero-roof.webp"
            alt="Terms & Conditions background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              These Terms &amp; Conditions apply to the use of this website and to quotes, bookings and
              services provided by Sydney Roofing &amp; Gutters.
            </p>
            <p className="mt-4 text-sm text-white/75">
              Effective date: <span className="font-semibold">21 January 2026</span>
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="flex-1 bg-background">
        <section className="py-14">
          <div className="container mx-auto px-7 lg:px-14 xl:px-20">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-sm border border-border p-7 md:p-10">
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  By accessing or using this website, requesting a quote, or engaging our services, you
                  agree to these Terms &amp; Conditions (“Terms”). If you do not agree, please do not use
                  this website.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">1. About us</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  Sydney Roofing &amp; Gutters (“we”, “us”, “our”) provides roofing and guttering-related
                  services, including inspections, repairs, maintenance, restorations, replacements, and
                  related work across Sydney (NSW).
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">2. Website use</h2>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• You must not misuse this website or attempt to interfere with its security or functionality.</li>
                  <li>• Content is provided for general information only and may change without notice.</li>
                  <li>• We do not guarantee the website will be uninterrupted, error-free, or free from harmful components.</li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">3. Quotes and estimates</h2>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• Quotes are generally based on information available at the time, including inspection details (where applicable).</li>
                  <li>• If conditions are different from what was disclosed or visible (e.g., concealed damage), we may need to revise the quote.</li>
                  <li>• Unless stated otherwise, quotes may be valid for a limited period and can expire.</li>
                  <li>• Any dates or timeframes provided are estimates only and may change due to weather, supplier availability, or scheduling.</li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">4. Bookings, access and site conditions</h2>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• You are responsible for providing safe and reasonable access to the property and work area.</li>
                  <li>• You must disclose any known hazards (e.g., asbestos, fragile roofing, electrical risks) before work begins.</li>
                  <li>• If we cannot safely proceed, we may postpone or cancel work until conditions are safe.</li>
                  <li>• If access is not available at the agreed time, rescheduling fees may apply.</li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">5. Variations</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  Roofing and guttering work can uncover hidden issues. If extra work is required beyond
                  the original scope, we will discuss it with you as a “variation”. Variations may affect
                  price and timing. Where possible, we will seek your approval before proceeding.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">6. Payments</h2>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• Payment terms will be provided on your quote/invoice.</li>
                  <li>• Deposits may be required for certain jobs, materials, or scheduling.</li>
                  <li>• Overdue invoices may incur reasonable recovery costs and/or late payment fees where permitted by law.</li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">7. Warranties and workmanship</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We stand by our workmanship. Any workmanship warranty (if offered) will be outlined in
                  your quote/invoice. Manufacturer warranties may apply to materials and are subject to
                  the manufacturer’s terms. Warranties may not apply where issues arise from:
                </p>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• Pre-existing defects or structural movement</li>
                  <li>• Severe weather events beyond design limits</li>
                  <li>• Third-party work, modifications, or damage after completion</li>
                  <li>• Lack of maintenance, blockage build-up, or neglected drainage</li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">8. Limitation of liability</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  To the extent permitted by law, we exclude liability for indirect or consequential
                  loss (such as loss of profit, revenue, or business interruption). Where the Australian
                  Consumer Law applies, our goods and services come with guarantees that cannot be
                  excluded. If a failure is minor, we may choose to remedy it within a reasonable time.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">9. Intellectual property</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  All website content, branding, text, graphics, and logos are owned by or licensed to
                  us and are protected by intellectual property laws. You may not reproduce, distribute,
                  or use our content for commercial purposes without written permission.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">10. Privacy</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  Our collection and use of personal information is governed by our Privacy Policy.
                  Please review it at <a className="underline" href="/privacy-policy/">/privacy-policy/</a>.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">11. Changes to these Terms</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We may update these Terms from time to time. Updates will be published on this page
                  with a revised effective date. Continued use of the website after changes indicates
                  acceptance of the updated Terms.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">12. Contact us</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  If you have questions about these Terms, please contact us:
                </p>

                <div className="mt-5 rounded-lg bg-muted/30 p-5">
                  <p className="text-sm font-semibold">Sydney Roofing &amp; Gutters</p>
                  <p className="text-sm" style={{ color: "#666666" }}>
                    Phone: <a className="underline" href="tel:1300796024">1300 796 024</a>
                    <br />
                    Email:{" "}
                    <a className="underline" href="mailto:sales@sydneyroofingandgutters.com.au">
                      sales@sydneyroofingandgutters.com.au
                    </a>
                  </p>
                </div>

                <p className="mt-6 text-xs" style={{ color: "#888888" }}>
                  Note: This page provides general information and is not legal advice. For legal advice,
                  please consult a qualified professional.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const route: Route = {
  path: "/terms-and-conditions/",
  element: <TermsAndConditionsPage />,
  handle: {
    title: "Terms & Conditions | Sydney Roofing & Gutters",
    meta: [
      {
        name: "description",
        content:
          "Read the Terms & Conditions for Sydney Roofing & Gutters. Website use, quotes, service limitations, warranties, liability, and other important information.",
      },
      {
        name: "keywords",
        content:
          "terms and conditions sydney roofing and gutters, roofing terms, guttering terms, website terms",
      },
    ],
  },
};

export default TermsAndConditionsPage;