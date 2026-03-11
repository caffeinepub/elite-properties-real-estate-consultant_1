import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl shadow-black/10 border-b border-gold-200"
          : "bg-white/90 backdrop-blur-sm border-b border-gold-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 py-2">
          {/* Logo / Brand */}
          <button
            type="button"
            onClick={() => handleNavClick("#home")}
            className="flex items-center gap-4 group"
          >
            {/* Elite Properties Logo — matching Commercial Rent & Sale card style (dark bg, gold border) */}
            <div className="flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.20 0.01 260), oklch(0.26 0.01 260))",
                  boxShadow: "0 4px 16px oklch(0.68 0.14 72 / 0.35)",
                  border: "1.5px solid oklch(0.68 0.14 72 / 0.7)",
                }}
              >
                <img
                  src="/assets/generated/elite-logo.dim_300x300.png"
                  alt="Elite Properties Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="text-left">
              <div className="font-display font-black text-[#0a0a0a] text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tight">
                Elite Properties
              </div>
              <div className="font-body font-semibold text-gold-600 text-xs md:text-sm leading-tight tracking-widest uppercase mt-0.5">
                Real Estate Consultant
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body font-semibold text-charcoal-700 hover:text-gold-600 hover:bg-gold-50 px-4 py-2 rounded transition-all duration-200 text-sm tracking-wide uppercase"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919527942323"
              className="flex items-center gap-2 font-body text-charcoal-700 hover:text-gold-600 text-sm font-semibold transition-colors"
            >
              <Phone size={15} />
              <span>095279 42323</span>
            </a>
            <a
              href="https://wa.me/919527942323"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal-900 text-gold-400 font-body font-bold text-sm px-5 py-2.5 rounded-sm hover:bg-charcoal-800 transition-colors shadow-lg"
            >
              WhatsApp Enquiry
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="md:hidden text-charcoal-800 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gold-100 px-4 pb-4 shadow-lg">
          <nav className="flex flex-col gap-1 pt-3">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body font-semibold text-charcoal-700 hover:bg-gold-50 hover:text-gold-600 px-3 py-3 text-left rounded transition-colors text-sm tracking-wide uppercase border-b border-gold-100/60 last:border-0"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/919527942323"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 bg-charcoal-900 text-gold-400 font-body font-bold text-sm px-5 py-3 rounded-sm text-center hover:bg-charcoal-800 transition-colors shadow-lg"
            >
              WhatsApp Enquiry
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
