import {
  Award,
  Building2,
  CheckCircle,
  Shield,
  TrendingUp,
  Users,
} from "lucide-react";

const highlights = [
  {
    icon: Shield,
    title: "Most Trusted in Pune",
    description:
      "Recognized as Pune's most reliable real estate consultancy with a proven track record of transparent dealings and client satisfaction.",
  },
  {
    icon: Award,
    title: "Expert Consultants",
    description:
      "Our team of seasoned professionals brings deep market knowledge and expertise to guide you through every step of your property journey.",
  },
  {
    icon: Users,
    title: "Client-First Approach",
    description:
      "We prioritize your needs above all else, offering personalized consultations and tailored solutions for every unique requirement.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investments",
    description:
      "Leverage our market insights to make informed investment decisions that maximize returns and secure your financial future.",
  },
  {
    icon: Building2,
    title: "End-to-End Services",
    description:
      "From property search to documentation, loans to registration — we handle everything so you can focus on what matters most.",
  },
  {
    icon: CheckCircle,
    title: "Verified Properties",
    description:
      "Every property we list is thoroughly verified for legal compliance, ensuring a safe and hassle-free transaction for our clients.",
  },
];

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "15+", label: "Years in Business" },
  { value: "1000+", label: "Happy Clients" },
  { value: "20+", label: "Services Offered" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding bg-charcoal-900 relative overflow-hidden"
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "oklch(0.68 0.14 72)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-5 blur-3xl"
        style={{ background: "oklch(0.80 0.13 78)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-body text-gold-400 text-sm font-semibold tracking-widest uppercase">
              About Us
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-4">
            Why Choose{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.80 0.13 78), oklch(0.68 0.14 72))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Elite Properties
            </span>
          </h2>
          <p className="font-body text-charcoal-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            With over a decade of excellence in Pune's real estate market, we
            bring unmatched expertise, integrity, and dedication to every client
            relationship.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-sm border border-gold-700/30 bg-charcoal-800/50 backdrop-blur-sm"
            >
              <div
                className="font-display font-bold text-3xl sm:text-4xl mb-1"
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
              <div className="font-body text-charcoal-300 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group p-6 rounded-sm bg-charcoal-800/60 border border-charcoal-700 hover:border-gold-600/50 transition-all duration-300 hover:shadow-gold"
              >
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-4 shadow-gold group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
                  }}
                >
                  <Icon size={22} className="text-charcoal-900" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  {item.title}
                </h3>
                <p className="font-body text-charcoal-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* About Image Section */}
        <div className="mt-16 rounded-sm overflow-hidden relative">
          <img
            src="/assets/generated/about-bg.dim_1200x600.jpg"
            alt="Elite Properties Office"
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-charcoal-900/60 flex items-center justify-center">
            <div className="text-center px-4">
              <p className="font-display font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-2">
                Kothrud, Pune's Premier
              </p>
              <p
                className="font-display font-bold text-3xl sm:text-4xl md:text-5xl"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.80 0.13 78), oklch(0.68 0.14 72))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Real Estate Experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
