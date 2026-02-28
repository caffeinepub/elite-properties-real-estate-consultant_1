import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

function ElitePropertiesLogo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Elite Properties Logo"
    >
      {/* Outer hexagon frame */}
      <polygon
        points="24,2 44,13 44,35 24,46 4,35 4,13"
        fill="#111111"
        stroke="#C9A84C"
        strokeWidth="1.5"
      />
      {/* Building silhouette */}
      <rect x="14" y="20" width="20" height="16" fill="#C9A84C" rx="0.5" />
      {/* Roof / triangle peak */}
      <polygon points="24,10 36,20 12,20" fill="#E8C96A" />
      {/* Door */}
      <rect x="20.5" y="28" width="7" height="8" fill="#111111" rx="0.5" />
      {/* Left window */}
      <rect x="15" y="22" width="4" height="4" fill="#111111" rx="0.3" />
      {/* Right window */}
      <rect x="29" y="22" width="4" height="4" fill="#111111" rx="0.3" />
      {/* Crown accent on top */}
      <polygon points="24,6 26,10 22,10" fill="#E8C96A" />
      {/* Key symbol overlay — vertical bar */}
      <rect x="23" y="11" width="2" height="5" fill="#111111" rx="0.5" />
    </svg>
  );
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gold-500 shadow-xl shadow-black/30'
          : 'bg-gold-400'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-22 py-2">
          {/* Logo / Brand */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group"
          >
            {/* Innovative SVG Logo Mark */}
            <div className="flex-shrink-0 drop-shadow-md group-hover:scale-105 transition-transform duration-200">
              <ElitePropertiesLogo />
            </div>

            {/* Company Name — Black, Large, Bold */}
            <div className="text-left">
              <div className="font-display font-black text-[#0a0a0a] text-xl md:text-2xl leading-tight tracking-tight">
                Elite Properties
              </div>
              <div className="font-body font-bold text-[#111111] text-xs md:text-sm leading-tight tracking-widest uppercase mt-0.5">
                Real Estate Consultant
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body font-semibold text-[#111111] hover:text-charcoal-900 hover:bg-gold-300/60 px-4 py-2 rounded transition-all duration-200 text-sm tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919527942323"
              className="flex items-center gap-2 font-body text-[#111111] hover:text-charcoal-900 text-sm font-semibold transition-colors"
            >
              <Phone size={15} />
              <span>095279 42323</span>
            </a>
            <a
              href="https://wa.me/919527942323"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#111111] text-gold-400 font-body font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-charcoal-800 transition-colors shadow-lg"
            >
              WhatsApp Enquiry
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-[#111111] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-gold-300 border-t border-gold-600 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body font-semibold text-[#111111] hover:bg-gold-400/60 px-3 py-3 text-left rounded transition-colors text-sm tracking-wide uppercase border-b border-gold-500/40 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/919527942323"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-[#111111] text-gold-400 font-body font-bold text-sm px-5 py-3 rounded-sm text-center hover:bg-charcoal-800 transition-colors shadow-lg"
            >
              WhatsApp Enquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
