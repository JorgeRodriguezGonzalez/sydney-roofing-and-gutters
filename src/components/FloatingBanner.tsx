import { useState } from "react";
import { Phone, Mail, X, Send } from "lucide-react";
import { submitNetlifyForm } from "@/lib/netlifyForm";
import type { FormEvent } from "react";

const PHONE = "1300796024";
const FORM_NAME = "Floating banner form";

function ContactPopup({ onClose }: { onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setIsSubmitting(true);
    try {
      const response = await submitNetlifyForm({
        form,
        endpoint: "/",
        fullName: { firstField: "firstName", lastField: "lastName", targetField: "fullName" },
      });
      if (!response.ok) throw new Error("Submission failed");
      setShowSuccess(true);
      form.reset();
      window.setTimeout(() => onClose(), 3000);
    } catch {
      alert("Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50" onClick={onClose}>
      <div
        className="bg-white rounded-xl shadow-2xl w-[90vw] max-w-md mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between bg-[#179DC2] px-5 py-4">
          <div className="text-white font-bold text-lg">Request a Free Quote</div>
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <X className="h-5 w-5" />
          </button>
        </div>

        {showSuccess ? (
          <div className="p-8 text-center">
            <div className="text-emerald-600 font-bold text-lg mb-2">Thanks!</div>
            <p className="text-sm" style={{ color: "#666666" }}>We will contact you shortly.</p>
          </div>
        ) : (
          <form
            name={FORM_NAME}
            method="POST"
            action="/thanks/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="p-5 space-y-3"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value={FORM_NAME} />
            <input type="hidden" name="fullName" value="" />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                className="h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#179DC2]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                className="h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#179DC2]"
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#179DC2]"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="w-full h-10 rounded-md border border-gray-300 px-3 text-sm outline-none focus:border-[#179DC2]"
            />
            <textarea
              name="issue"
              placeholder="How can we help?"
              className="w-full min-h-[80px] rounded-md border border-gray-300 px-3 py-2 text-sm outline-none focus:border-[#179DC2]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-10 rounded-md bg-[#179DC2] text-white font-semibold text-sm hover:bg-[#ff1616] transition-colors disabled:opacity-70"
            >
              <span className="inline-flex items-center gap-2">
                <Send className="h-4 w-4" />
                {isSubmitting ? "SENDING..." : "GET QUOTE"}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

const FloatingBanner = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#179DC2] shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
        <div className="container mx-auto px-7 lg:px-14 xl:px-20 py-3">
          <div className="flex items-center justify-between gap-4">
            <p className="text-white font-semibold text-sm md:text-base truncate flex-1 min-w-0">
              Need roofing or guttering help? Call now for a free quote!
            </p>
            <div className="flex items-center gap-2 flex-shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center gap-1.5 bg-white text-[#179DC2] font-bold text-sm px-4 py-2 rounded-md hover:bg-gray-100 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">{PHONE}</span>
                <span className="sm:hidden">Call</span>
              </a>
              <button
                onClick={() => setShowForm(true)}
                className="inline-flex items-center gap-1.5 bg-[#ff1616] text-white font-bold text-sm px-4 py-2 rounded-md hover:bg-[#e01010] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Get Free Quote</span>
                <span className="sm:hidden">Quote</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {showForm && <ContactPopup onClose={() => setShowForm(false)} />}
    </>
  );
};

export default FloatingBanner;
