import { MapPin, Clock, Phone, MessageCircle, Heart } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'elite-properties-pune');

  return (
    <footer className="bg-charcoal-900 border-t border-charcoal-700 relative overflow-hidden">
      {/* Gold top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, oklch(0.72 0.18 75), oklch(0.88 0.16 85), oklch(0.58 0.16 68))' }}
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center shadow-gold flex-shrink-0">
                <span className="font-display font-bold text-charcoal-900 text-xl">EP</span>
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
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-gold-500 flex-shrink-0" />
                <a
                  href="tel:+919527942323"
                  className="font-body text-charcoal-300 hover:text-gold-400 text-sm transition-colors"
                >
                  095279 42323
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Clock size={16} className="text-gold-500 flex-shrink-0" />
                <span className="font-body text-charcoal-300 text-sm">
                  Mon–Sun: <span className="text-gold-400 font-medium">9:30 AM – 8:30 PM</span>
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <SiWhatsapp size={16} className="text-gold-500 flex-shrink-0" />
                <a
                  href="https://wa.me/919527942323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-charcoal-300 hover:text-gold-400 text-sm transition-colors"
                >
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links + CTA */}
          <div>
            <h4 className="font-display font-semibold text-white text-base mb-5 pb-2 border-b border-charcoal-700">
              Quick Links
            </h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Our Services', href: '#services' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="font-body text-charcoal-300 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-600 group-hover:bg-gold-400 transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/919527942323"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 gold-gradient text-charcoal-900 font-body font-bold text-sm px-5 py-3 rounded-sm shadow-gold hover:opacity-90 transition-all duration-200 w-full"
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal-700 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-body text-charcoal-500 text-xs text-center sm:text-left">
              © {year} Elite Properties Real Estate Consultant. All rights reserved.
            </p>
            <p className="font-body text-charcoal-500 text-xs flex items-center gap-1">
              Built with{' '}
              <Heart size={12} className="text-gold-500 fill-gold-500 mx-0.5" />
              {' '}using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-500 hover:text-gold-400 transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
