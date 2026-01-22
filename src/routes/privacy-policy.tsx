import type { Route } from "react-router";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Privacy Policy | Sydney Roofing & Gutters"
        description="Read the Privacy Policy for Sydney Roofing & Gutters. Learn how we collect, use, store, and protect personal information when you request a quote or contact us."
        keywords="privacy policy sydney roofing and gutters, privacy policy roofing company, personal information policy"
        ogTitle="Privacy Policy | Sydney Roofing & Gutters"
        ogDescription="Learn how Sydney Roofing & Gutters handles personal information, website data, and quote requests."
        schemaType="RoofingContractor"
        location="sydney"
        customName="Sydney Roofing & Gutters"
        customDescription="Sydney Roofing & Gutters privacy policy and personal information handling practices."
      />

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-16">
        <div className="absolute inset-0">
          <img
            src="/images/hero-roof.webp"
            alt="Privacy Policy background"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 relative">
          <div className="text-center text-white">
            <div className="blueprint-line border-t-2 border-accent w-20 mx-auto mb-6"></div>
            <h1 className="text-4xl md:text-5xl font-bold architectural-heading mb-4">
              Privacy Policy
            </h1>
            <p className="text-white/90 max-w-3xl mx-auto text-lg">
              This policy explains how Sydney Roofing &amp; Gutters collects, uses, stores and protects
              personal information when you use our website or request a quote.
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
                  Sydney Roofing &amp; Gutters (“we”, “us”, “our”) is committed to protecting your privacy.
                  We handle personal information in accordance with the Australian Privacy Principles
                  contained in the <strong>Privacy Act 1988 (Cth)</strong>.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">1. What information we collect</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We may collect personal information that you provide directly to us, including:
                </p>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• Name</li>
                  <li>• Phone number</li>
                  <li>• Email address</li>
                  <li>• Property address or suburb (where relevant for service)</li>
                  <li>• Details about your roofing or guttering enquiry</li>
                  <li>• Photos or attachments you send (optional)</li>
                </ul>

                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We may also collect certain information automatically when you use our website, such as
                  your IP address, browser type, device information, pages viewed, and approximate location.
                  This is typically collected via cookies or similar technologies.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">2. How we use your information</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We use your information to:
                </p>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• Respond to enquiries and provide quotes</li>
                  <li>• Arrange inspections, scheduling, and service delivery</li>
                  <li>• Communicate about your job, updates, and follow-ups</li>
                  <li>• Improve our website and customer experience</li>
                  <li>• Maintain security and prevent fraud or misuse</li>
                  <li>• Meet legal and regulatory obligations</li>
                </ul>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">3. When we disclose personal information</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We do not sell your personal information. We may disclose information where necessary to:
                </p>
                <ul className="mt-4 space-y-2 text-sm" style={{ color: "#666666" }}>
                  <li>• Our staff, contractors, and service providers who help deliver our services</li>
                  <li>• IT, website, analytics, and hosting providers supporting our operations</li>
                  <li>• Payment or invoicing providers (if applicable)</li>
                  <li>• Legal, regulatory or law enforcement bodies when required by law</li>
                </ul>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "#666666" }}>
                  Some third-party providers may store data outside Australia. Where this occurs, we take
                  reasonable steps to ensure appropriate protections are in place.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">4. Cookies and analytics</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We may use cookies and analytics tools to understand how visitors use our website. Cookies
                  can help remember preferences and improve functionality. You can control cookies through
                  your browser settings, however disabling cookies may impact parts of the website.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">5. Data security</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We take reasonable steps to protect personal information from loss, misuse, unauthorised
                  access, modification, or disclosure. This includes administrative, technical, and physical
                  safeguards appropriate to the nature of the information we hold.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">6. Data retention</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We keep personal information only for as long as needed to provide services, meet legal
                  obligations, resolve disputes, and enforce agreements. When information is no longer needed,
                  we take reasonable steps to delete or de-identify it.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">7. Your rights</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  You may request access to the personal information we hold about you and request correction
                  if it is inaccurate, out-of-date, incomplete, irrelevant, or misleading. We may need to
                  verify your identity before processing a request.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">8. Links to other websites</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices of those sites. We recommend reviewing their privacy policies before providing
                  personal information.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">9. Changes to this policy</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  We may update this Privacy Policy from time to time. Changes will be published on this page
                  with an updated effective date.
                </p>

                <hr className="my-8" />

                <h2 className="text-2xl font-bold mb-3">10. Contact us</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#666666" }}>
                  If you have questions about this policy, your personal information, or would like to make a
                  privacy request, please contact us:
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
  path: "/privacy-policy/",
  element: <PrivacyPolicyPage />,
  handle: {
    title: "Privacy Policy | Sydney Roofing & Gutters",
    meta: [
      {
        name: "description",
        content:
          "Read the Privacy Policy for Sydney Roofing & Gutters. Learn how we collect, use, store, and protect personal information when you request a quote or contact us.",
      },
      {
        name: "keywords",
        content:
          "privacy policy sydney roofing and gutters, privacy policy roofing company, personal information policy",
      },
    ],
  },
};

export default PrivacyPolicyPage;