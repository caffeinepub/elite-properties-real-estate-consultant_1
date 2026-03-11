import { ChevronDown, MessageCircle, Star } from "lucide-react";

export default function Hero() {
  const handleScrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image — shifted up to show full scene */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
          backgroundPosition: "center 20%",
        }}
      />

      {/* Layered Overlays — deep charcoal for professional look */}
      <div className="absolute inset-0 bg-charcoal-900/75" />
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.68 0.14 72 / 0.5) 0%, transparent 55%, oklch(0.44 0.11 62 / 0.35) 100%)",
        }}
      />

      {/* Decorative champagne gold line top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-2 bg-gold-500/15 border border-gold-500/35 rounded-full px-5 py-2 mb-8">
          <Star size={13} className="text-gold-400 fill-gold-400" />
          <span
            className="font-body text-xs font-bold tracking-widest uppercase"
            style={{ color: "#f5e6c0" }}
          >
            Pune's Most Trusted Real Estate Business
          </span>
          <Star size={13} className="text-gold-400 fill-gold-400" />
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-black text-white leading-tight mb-3">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight drop-shadow-lg">
            Elite Properties
          </span>
          <span
            className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 font-bold"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.80 0.13 78), oklch(0.68 0.14 72), oklch(0.54 0.13 65))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Real Estate Consultant
          </span>
        </h1>

        {/* Hindi Name */}
        <p className="font-body text-gold-300/80 text-lg sm:text-xl md:text-2xl mb-4 tracking-wide">
          एलिट प्रोपर्टीज रियल एस्टेट कंसलटेंट
        </p>

        {/* Tagline */}
        <p
          className="font-display font-semibold text-white text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
        >
          Your Trusted Partner for Commercial and Residential Purchase or
          Leasing
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          {/* WhatsApp — golden highlight */}
          <a
            href="https://wa.me/919527942323"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.whatsapp_button"
            className="flex items-center gap-3 font-body font-bold text-base px-8 py-4 rounded-sm w-full sm:w-auto justify-center transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f5c842, #d4a017, #f5c842)",
              color: "#1a1a1a",
              boxShadow:
                "0 0 18px rgba(212,160,23,0.7), 0 4px 14px rgba(0,0,0,0.3)",
              border: "1.5px solid #f5c842",
            }}
          >
            <MessageCircle size={20} />
            WhatsApp Enquiry
          </a>
          {/* Enquire Now — golden outline highlight */}
          <a
            href="#contact"
            data-ocid="hero.enquiry_button"
            className="flex items-center gap-3 font-body font-bold text-base px-8 py-4 rounded-sm w-full sm:w-auto justify-center transition-all duration-200 hover:scale-105"
            style={{
              background: "transparent",
              color: "#f5c842",
              border: "2px solid #f5c842",
              boxShadow: "0 0 14px rgba(212,160,23,0.5)",
            }}
          >
            Enquire Now
          </a>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
          {[
            { value: "500+", label: "Properties Sold" },
            { value: "15+", label: "Years Experience" },
            { value: "1000+", label: "Happy Clients" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="font-display font-bold text-2xl sm:text-3xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.80 0.13 78), oklch(0.68 0.14 72))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="font-body text-charcoal-300 text-xs sm:text-sm mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Down */}
      <button
        type="button"
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-400 hover:text-gold-300 transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
