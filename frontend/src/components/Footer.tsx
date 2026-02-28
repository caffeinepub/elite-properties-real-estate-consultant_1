import { MapPin, Clock, Phone, MessageCircle, Heart } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'elite-properties-pune');

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 relative overflow-hidden">
      {/* Champagne gold top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))' }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              {/* Logo with gradient border ring */}
              <div
                className="p-[2px] rounded-xl flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, oklch(0.80 0.13 78), oklch(0.68 0.14 72), oklch(0.54 0.13 65))',
                }}
              >
                <div className="bg-charcoal-800 rounded-xl overflow-hidden w-12 h-12 flex items-center justify-center">
                  <img
                    src="/assets/generated/elite-logo.dim_400x400.png"
                    alt="Elite Properties Logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
              </div>
              <div>
                <div className="font-display font-bold text-gold-400 text-lg leading-tight">
                  Elite Properties
                </div>
                <div className="font-body text-charcoal-400 text-xs tracking-wider uppercase">
                  Real Estate Consultant
                </div>
              </div>
            </div>
            <p className="font-body text-charcoal-300 text-sm leading-relaxed mb-3">
              Elite Properties Real Estate Consultant
            </p>
            <p className="font-body text-gold-500/80 text-sm leading-relaxed mb-5">
              एलिट प्रोपर्टीज रियल एस्टेट कंसलटेंट
            </p>
            <p className="font-body text-charcoal-400 text-xs leading-relaxed">
              Pune's most trusted real estate consultancy, delivering excellence in property services since our founding.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5 pb-2 border-b border-charcoal-700">
              Contact Information
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="font-body text-charcoal-300 text-sm leading-relaxed">
                  Zala Society Building No 1, Office No 6, First Floor,<br />
                  Karve Rd, Near Karishma Chowk,<br />
                  Kothrud, Pune, Maharashtra 411038
                </span>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-body text-charcoal-300 text-sm">Mon – Sun: </span>
                  <span className="font-body text-gold-400 text-sm font-semibold">9:30 AM – 8:30 PM</span>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-gold-500 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919527942323"
                  className="font-body text-charcoal-300 hover:text-gold-400 text-sm transition-colors"
                >
                  095279 42323
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links + WhatsApp CTA */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5 pb-2 border-b border-charcoal-700">
              Quick Links
            </h4>
            <ul className="space-y-2 mb-6">
              {['Home', 'About', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const el = document.querySelector(`#${link.toLowerCase()}`);
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-charcoal-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/919527942323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 gold-gradient text-charcoal-900 font-body font-bold text-sm px-5 py-3 rounded-sm shadow-gold hover:opacity-90 transition-all duration-200 hover:scale-105"
            >
              <SiWhatsapp size={16} />
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: 'linear-gradient(90deg, transparent, oklch(0.68 0.14 72 / 0.4), transparent)' }}
        />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="font-body text-charcoal-500 text-xs">
            © {year} Elite Properties Real Estate Consultant. All rights reserved.
          </p>
          <p className="font-body text-charcoal-500 text-xs flex items-center gap-1">
            Built with <Heart size={12} className="text-gold-500 fill-gold-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
