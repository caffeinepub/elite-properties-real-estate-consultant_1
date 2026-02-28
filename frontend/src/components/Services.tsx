import {
  Home,
  Settings,
  Key,
  Hammer,
  TrendingUp,
  BarChart3,
  Palmtree,
  HardHat,
  FileText,
  ClipboardList,
  Search,
  Layers,
  Building2,
  Tractor,
  UserCheck,
  Sofa,
  MapPin,
  CreditCard,
  Crown,
  Building,
} from 'lucide-react';

const services = [
  { icon: Home, title: 'Property Buying & Sales', desc: 'Expert guidance for buying and selling residential properties at the best market value.' },
  { icon: Settings, title: 'Property Management', desc: 'Comprehensive management services to maintain and enhance your property value.' },
  { icon: Key, title: 'Property Rentals', desc: 'Find the perfect rental property or reliable tenants with our extensive network.' },
  { icon: Hammer, title: 'Property Development', desc: 'End-to-end development consulting from planning to project completion.' },
  { icon: TrendingUp, title: 'Property Investing', desc: 'Strategic investment advice to maximize returns on your real estate portfolio.' },
  { icon: BarChart3, title: 'Property Sales Management', desc: 'Professional sales management to ensure smooth and profitable transactions.' },
  { icon: Palmtree, title: 'Vacation Properties', desc: 'Discover and invest in premium vacation homes and holiday properties.' },
  { icon: HardHat, title: 'Civil Works Finance Consultant', desc: 'Expert financial consulting for civil construction and infrastructure projects.' },
  { icon: FileText, title: 'Online Agreement', desc: 'Hassle-free digital documentation and online agreement services.' },
  { icon: ClipboardList, title: 'Property Valuation Reports', desc: 'Accurate and certified property valuation reports for informed decisions.' },
  { icon: Search, title: 'Appraisals', desc: 'Professional property appraisal services by certified experts.' },
  { icon: Layers, title: 'Building Lot Sales', desc: 'Prime building lots and plots available for residential and commercial development.' },
  { icon: Building2, title: 'Commercial Property Buying & Sales', desc: 'Specialized services for commercial real estate transactions and investments.' },
  { icon: Tractor, title: 'Farm Sales', desc: 'Agricultural land and farm property sales with complete legal assistance.' },
  { icon: UserCheck, title: 'First-Time Home Buyer Services', desc: 'Dedicated support and guidance for first-time home buyers throughout the process.' },
  { icon: Sofa, title: 'Furnished Property Rentals & Sales', desc: 'Ready-to-move furnished properties for rent and sale across Pune.' },
  { icon: MapPin, title: 'Land Leasing & Sales', desc: 'Comprehensive land leasing and sales services for all types of land parcels.' },
  { icon: CreditCard, title: 'Loans', desc: 'Home loan assistance and financial planning to make your dream property affordable.' },
  { icon: Crown, title: 'Luxury Properties', desc: 'Exclusive luxury homes, penthouses, and premium properties for discerning buyers.' },
  { icon: Building, title: 'New Construction Sales & Leasing', desc: 'Latest new construction projects and pre-launch opportunities in Pune.' },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, oklch(0.72 0.18 75), oklch(0.88 0.16 85), oklch(0.58 0.16 68))' }}
      />
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5 blur-3xl"
        style={{ background: 'oklch(0.72 0.18 75)' }}
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
            Our{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, oklch(0.72 0.18 75), oklch(0.58 0.16 68))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Services
            </span>
          </h2>
          <p className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Comprehensive real estate solutions tailored to meet every property need — from residential to commercial, buying to investing.
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
                  style={{ background: 'linear-gradient(90deg, oklch(0.72 0.18 75), oklch(0.88 0.16 85))' }}
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
            className="inline-flex items-center gap-2 gold-gradient text-charcoal-900 font-body font-bold text-sm px-8 py-3.5 rounded-sm shadow-gold hover:opacity-90 transition-all duration-200 hover:scale-105"
          >
            Get Free Consultation on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
