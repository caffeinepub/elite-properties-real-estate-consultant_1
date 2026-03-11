import {
  BarChart3,
  Building,
  Building2,
  ClipboardList,
  CreditCard,
  Crown,
  FileText,
  Hammer,
  HardHat,
  Home,
  Key,
  LandPlot,
  Layers,
  MapPin,
  Palmtree,
  Search,
  Settings,
  Sofa,
  Star,
  Tractor,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Property Buying & Sales",
    desc: "Expert guidance for buying and selling residential properties at the best market value.",
  },
  {
    icon: Settings,
    title: "Property Management",
    desc: "Comprehensive management services to maintain and enhance your property value.",
  },
  {
    icon: Key,
    title: "Property Rentals",
    desc: "Find the perfect rental property or reliable tenants with our extensive network.",
  },
  {
    icon: Hammer,
    title: "Property Development",
    desc: "End-to-end development consulting from planning to project completion.",
  },
  {
    icon: TrendingUp,
    title: "Property Investing",
    desc: "Strategic investment advice to maximize returns on your real estate portfolio.",
  },
  {
    icon: BarChart3,
    title: "Property Sales Management",
    desc: "Professional sales management to ensure smooth and profitable transactions.",
  },
  {
    icon: LandPlot,
    title: "Plot Selling",
    desc: "Prime residential and commercial plots available across Pune. Get the best deals on open plots with clear titles.",
  },
  {
    icon: Building2,
    title: "Residential Property",
    desc: "Wide range of 1BHK, 2BHK, 3BHK flats, bungalows, and villas for sale and rent across Pune's top localities.",
  },
  {
    icon: Palmtree,
    title: "Vacation Properties",
    desc: "Discover and invest in premium vacation homes and holiday properties.",
  },
  {
    icon: HardHat,
    title: "Civil Works Finance Consultant",
    desc: "Expert financial consulting for civil construction and infrastructure projects.",
  },
  {
    icon: FileText,
    title: "Online Agreement",
    desc: "Hassle-free digital documentation and online agreement services.",
  },
  {
    icon: ClipboardList,
    title: "Property Valuation Reports",
    desc: "Accurate and certified property valuation reports for informed decisions.",
  },
  {
    icon: Search,
    title: "Appraisals",
    desc: "Professional property appraisal services by certified experts.",
  },
  {
    icon: Layers,
    title: "Building Lot Sales",
    desc: "Prime building lots and plots available for residential and commercial development.",
  },
  {
    icon: Tractor,
    title: "Farm Sales",
    desc: "Agricultural land and farm property sales with complete legal assistance.",
  },
  {
    icon: UserCheck,
    title: "First-Time Home Buyer Services",
    desc: "Dedicated support and guidance for first-time home buyers throughout the process.",
  },
  {
    icon: Sofa,
    title: "Furnished Property Rentals & Sales",
    desc: "Ready-to-move furnished properties for rent and sale across Pune.",
  },
  {
    icon: MapPin,
    title: "Land Leasing & Sales",
    desc: "Comprehensive land leasing and sales services for all types of land parcels.",
  },
  {
    icon: CreditCard,
    title: "Loans",
    desc: "Home loan assistance and financial planning to make your dream property affordable.",
  },
  {
    icon: Crown,
    title: "Luxury Properties",
    desc: "Exclusive luxury homes, penthouses, and premium properties for discerning buyers.",
  },
  {
    icon: Building,
    title: "New Construction Sales & Leasing",
    desc: "Latest new construction projects and pre-launch opportunities in Pune.",
  },
];

// Standalone featured Commercial Rent & Sale card — rendered between Hero and Services grid
export function FeaturedCommercialCard() {
  return (
    <section className="bg-background py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, oklch(0.68 0.14 72 / 0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-3xl mx-auto relative">
        {/* Gold gradient border wrapper using padding trick */}
        <div
          className="p-[3px] rounded-xl"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.80 0.13 78), oklch(0.68 0.14 72), oklch(0.54 0.13 65), oklch(0.80 0.13 78))",
            boxShadow:
              "0 0 32px oklch(0.68 0.14 72 / 0.45), 0 4px 24px rgba(0,0,0,0.30)",
          }}
        >
          <div
            className="group relative rounded-[10px] overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.13 0.01 260), oklch(0.18 0.015 260))",
            }}
          >
            {/* Gold shimmer top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{
                background:
                  "linear-gradient(90deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
              }}
            />

            <div className="p-7 sm:p-9 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              {/* Elite Properties Logo as icon */}
              <div
                className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:scale-105 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.20 0.01 260), oklch(0.26 0.01 260))",
                  boxShadow: "0 4px 16px oklch(0.68 0.14 72 / 0.35)",
                  border: "1.5px solid oklch(0.68 0.14 72 / 0.5)",
                }}
              >
                <img
                  src="/assets/generated/elite-logo.dim_300x300.png"
                  alt="Elite Properties"
                  className="w-16 h-16 object-contain"
                />
              </div>

              <div className="flex-1 text-center sm:text-left">
                {/* Badges */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-3">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase"
                    style={{
                      background:
                        "linear-gradient(135deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78))",
                      color: "oklch(0.13 0.01 260)",
                    }}
                  >
                    <Star size={10} fill="currentColor" />
                    Commercial Rent &amp; Sale
                  </span>
                  <span
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border"
                    style={{
                      borderColor: "oklch(0.68 0.14 72)",
                      color: "oklch(0.80 0.13 78)",
                      background: "transparent",
                    }}
                  >
                    Featured
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-3 leading-snug">
                  Commercial Property Buying &amp; Sales
                </h3>
                <p className="font-body text-charcoal-300 text-sm sm:text-base leading-relaxed mb-5">
                  Specialized services for commercial real estate transactions,
                  rentals, and investments across Pune. Our expert team ensures
                  the best deals for offices, shops, warehouses, and more.
                </p>

                <a
                  href="https://wa.me/919527942323"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="featured.enquiry_button"
                  className="inline-flex items-center gap-2 font-body font-bold text-sm px-7 py-3 rounded-sm transition-all duration-200 hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #f5c842, #d4a017, #f5c842)",
                    color: "#1a1a1a",
                    boxShadow:
                      "0 0 16px rgba(212,160,23,0.65), 0 2px 10px rgba(0,0,0,0.25)",
                    border: "1.5px solid #f5c842",
                  }}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78), oklch(0.54 0.13 65))",
        }}
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: "oklch(0.68 0.14 72)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-body text-gold-600 text-sm font-semibold tracking-widest uppercase">
              What We Offer
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-display font-bold text-foreground text-3xl sm:text-4xl md:text-5xl mb-4">
            Our{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.68 0.14 72), oklch(0.54 0.13 65))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Services
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to meet every property
            need — from residential to commercial, buying to investing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative bg-card border border-border rounded-sm p-5 hover:border-gold-400 hover:shadow-card-hover transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover accent */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(0.68 0.14 72), oklch(0.80 0.13 78))",
                  }}
                />

                {/* Icon */}
                <div className="w-11 h-11 rounded-sm gold-gradient flex items-center justify-center mb-4 shadow-gold group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Icon size={20} className="text-charcoal-900" />
                </div>

                {/* Content */}
                <h3 className="font-display font-semibold text-foreground text-base mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="font-body text-muted-foreground text-xs leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground text-sm mb-4">
            Not sure which service you need? Let our experts guide you.
          </p>
          <a
            href="https://wa.me/919527942323"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="services.whatsapp_button"
            className="inline-flex items-center gap-2 font-body font-bold text-sm px-8 py-3.5 rounded-sm transition-all duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #f5c842, #d4a017, #f5c842)",
              color: "#1a1a1a",
              boxShadow:
                "0 0 16px rgba(212,160,23,0.6), 0 2px 10px rgba(0,0,0,0.25)",
              border: "1.5px solid #f5c842",
            }}
          >
            Get Free Consultation on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
