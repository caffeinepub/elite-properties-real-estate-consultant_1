import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding bg-charcoal-900 relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-5 blur-3xl"
        style={{ background: "oklch(0.68 0.14 72)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-body text-gold-400 text-sm font-semibold tracking-widest uppercase">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-4">
            Contact{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.13 78), oklch(0.68 0.14 72))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Us
            </span>
          </h2>
          <p className="font-body text-charcoal-300 text-base sm:text-lg max-w-xl mx-auto">
            Ready to find your dream property? Reach out to us today and let our
            experts assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-5">
            {/* Address */}
            <div className="flex gap-4 p-6 bg-charcoal-800/60 border border-charcoal-700 rounded-sm hover:border-gold-600/40 transition-colors group">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
                }}
              >
                <MapPin size={20} className="text-charcoal-900" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base mb-1">
                  Our Office
                </h3>
                <p className="font-body text-charcoal-300 text-sm leading-relaxed">
                  Zala Society Building No 1, Office No 6,
                  <br />
                  First Floor, Karve Rd,
                  <br />
                  Near Karishma Chowk, Kothrud,
                  <br />
                  Pune, Maharashtra 411038
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4 p-6 bg-charcoal-800/60 border border-charcoal-700 rounded-sm hover:border-gold-600/40 transition-colors group">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
                }}
              >
                <Clock size={20} className="text-charcoal-900" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base mb-1">
                  Business Hours
                </h3>
                <p className="font-body text-charcoal-300 text-sm">
                  Monday – Sunday
                </p>
                <p className="font-body text-gold-400 font-semibold text-base mt-0.5">
                  9:30 AM – 8:30 PM
                </p>
                <p className="font-body text-charcoal-400 text-xs mt-1">
                  Open all days including holidays
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4 p-6 bg-charcoal-800/60 border border-charcoal-700 rounded-sm hover:border-gold-600/40 transition-colors group">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
                }}
              >
                <Phone size={20} className="text-charcoal-900" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-white text-base mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+919527942323"
                  className="font-body text-gold-400 hover:text-gold-300 font-semibold text-lg transition-colors"
                >
                  095279 42323
                </a>
                <p className="font-body text-charcoal-400 text-xs mt-0.5">
                  Tap to call directly
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA Panel */}
          <div className="relative">
            <div
              className="rounded-sm p-8 text-center relative overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.16 0.01 260), oklch(0.20 0.01 260))",
              }}
            >
              {/* Gold border */}
              <div
                className="absolute inset-0 rounded-sm pointer-events-none"
                style={{
                  border: "2px solid transparent",
                  backgroundClip: "padding-box",
                  outline: "1.5px solid oklch(0.68 0.14 72)",
                  outlineOffset: "-1.5px",
                }}
              />

              <div className="relative z-10">
                {/* WhatsApp Icon */}
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-gold-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
                  }}
                >
                  <SiWhatsapp size={36} className="text-charcoal-900" />
                </div>

                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3">
                  WhatsApp Enquiry
                </h3>
                <p className="font-body text-charcoal-300 text-sm mb-6 leading-relaxed max-w-xs mx-auto">
                  Chat with us instantly on WhatsApp for quick responses,
                  property details, and personalized assistance.
                </p>

                {/* Start WhatsApp Chat — golden glow button */}
                <a
                  href="https://wa.me/919527942323"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.whatsapp_button"
                  className="flex items-center justify-center gap-3 font-body font-bold text-base px-8 py-4 rounded-sm w-full transition-all duration-200 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #f5c842, #d4a017, #f5c842)",
                    color: "#1a1a1a",
                    boxShadow:
                      "0 0 20px rgba(212,160,23,0.75), 0 4px 14px rgba(0,0,0,0.3)",
                    border: "1.5px solid #f5c842",
                  }}
                >
                  <MessageCircle size={20} />
                  Start WhatsApp Chat
                </a>

                <div className="mt-5">
                  {/* Enquire Now — golden outline button */}
                  <a
                    href="tel:+919527942323"
                    data-ocid="contact.enquiry_button"
                    className="flex items-center justify-center gap-3 font-body font-bold text-base px-8 py-3.5 rounded-sm w-full transition-all duration-200 hover:scale-105"
                    style={{
                      background: "transparent",
                      color: "#f5c842",
                      border: "2px solid #f5c842",
                      boxShadow: "0 0 12px rgba(212,160,23,0.45)",
                    }}
                  >
                    <Phone size={18} />
                    Enquire Now
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Info */}
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="p-4 bg-charcoal-800/60 border border-charcoal-700 rounded-sm text-center">
                <div className="font-display font-bold text-gold-400 text-xl">
                  24/7
                </div>
                <div className="font-body text-charcoal-400 text-xs mt-0.5">
                  WhatsApp Support
                </div>
              </div>
              <div className="p-4 bg-charcoal-800/60 border border-charcoal-700 rounded-sm text-center">
                <div className="font-display font-bold text-gold-400 text-xl">
                  Free
                </div>
                <div className="font-body text-charcoal-400 text-xs mt-0.5">
                  Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
