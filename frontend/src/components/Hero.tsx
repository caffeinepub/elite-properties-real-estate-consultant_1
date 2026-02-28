import { MessageCircle, ChevronDown, Star } from 'lucide-react';

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.querySelector('#about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')" }}
      />

      {/* Layered Overlays */}
      <div className="absolute inset-0 bg-charcoal-900/70" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, oklch(0.72 0.18 75 / 0.6) 0%, transparent 60%, oklch(0.48 0.14 65 / 0.4) 100%)'
        }}
      />

      {/* Decorative gold line top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, oklch(0.72 0.18 75), oklch(0.88 0.16 85), oklch(0.58 0.16 68))' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 rounded-full px-4 py-1.5 mb-8">
          <Star size={14} className="text-gold-400 fill-gold-400" />
          <span className="font-display text-charcoal-900 text-xs font-bold tracking-widest uppercase"
            style={{ color: '#111111' }}>
            Pune's Most Trusted Real Estate Business
          </span>
          <Star size={14} className="text-gold-400 fill-gold-400" />
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-bold text-white leading-tight mb-3">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
            Elite Properties
          </span>
          <span
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-1"
            style={{
              background: 'linear-gradient(135deg, oklch(0.88 0.16 85), oklch(0.72 0.18 75), oklch(0.58 0.16 68))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Real Estate Consultant
          </span>
        </h1>

        {/* Hindi Name */}
        <p className="font-body text-gold-300/90 text-lg sm:text-xl md:text-2xl mb-2 tracking-wide">
          एलिट प्रोपर्टीज रियल एस्टेट कंसलटेंट
        </p>

        {/* Tagline */}
        <p className="font-body text-charcoal-200 text-base sm:text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Your trusted partner for all property needs in Pune — from buying and selling to investment and management.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="https://wa.me/919527942323"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 gold-gradient text-charcoal-900 font-body font-bold text-base px-8 py-4 rounded-sm shadow-gold-lg hover:opacity-90 transition-all duration-200 hover:scale-105 w-full sm:w-auto justify-center"
          >
            <MessageCircle size={20} />
            WhatsApp Enquiry
          </a>
          <a
            href="tel:+919527942323"
            className="flex items-center gap-3 bg-white/10 border border-white/30 text-white font-body font-semibold text-base px-8 py-4 rounded-sm hover:bg-white/20 transition-all duration-200 w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            Call: 095279 42323
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: '500+', label: 'Properties Sold' },
            { value: '15+', label: 'Years Experience' },
            { value: '1000+', label: 'Happy Clients' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-gold-400 text-2xl sm:text-3xl">{stat.value}</div>
              <div className="font-body text-charcoal-300 text-xs sm:text-sm mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400 hover:text-gold-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
