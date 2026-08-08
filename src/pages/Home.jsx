// src/pages/Home.jsx
import { Link } from 'react-router';
import { 
  ShieldCheck, 
  Gauge, 
  Wrench, 
  Headphones, 
  Coins,
  ArrowRight,
  CheckCircle,
  FlaskConical,
  Microscope,
  Package,
  Building2
} from 'lucide-react';
import { categories } from '../data/products';

const HomePage = () => {
  // ---------- Data for "Why Choose Us" cards ----------
  const whyChooseUs = [
    {
      id: 1,
      icon: ShieldCheck,
      title: 'Superior Build Quality',
      description:
        'Heavy-duty construction, precision controllers, and robust engineering for long-term performance in rigorous conditions.',
    },
    {
      id: 2,
      icon: Gauge,
      title: 'User-Friendly Design',
      description:
        'Digital displays, ergonomic handles, safe door mechanisms, and intuitive controls make our products easy to operate.',
    },
    {
      id: 3,
      icon: Wrench,
      title: 'Customization Options',
      description:
        'Custom sizes, enhanced features, and special purpose designs tailored to your unique workflow requirements.',
    },
    {
      id: 4,
      icon: Headphones,
      title: 'Reliable After-Sales Support',
      description:
        'Trained technicians and readily available parts for fast service, calibration, maintenance, and support.',
    },
    {
      id: 5,
      icon: Coins,
      title: 'Competitive Premium Pricing',
      description:
        'Global-level performance at cost-effective Indian pricing without compromising on materials or engineering.',
    },
  ];

  // ---------- Global Partner Brands ----------
  const brands = [
    { name: 'Horiba', country: 'Japan' },
    { name: 'Panasonic', country: 'Japan' },
    { name: 'Labconco', country: 'UK' },
    { name: 'Nabertherm', country: 'Germany' },
    { name: 'Teledyne', country: 'USA' },
  ];

  return (
    <div className="flex flex-col gap-16 pb-16">
      
      {/* ============================================================ */}
      {/* 1. HERO SECTION */}
      {/* ============================================================ */}
      <section className="relative -mt-8 -mx-4 px-4 py-20 md:py-28 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white rounded-b-3xl shadow-2xl overflow-hidden">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block bg-blue-400/20 backdrop-blur-sm text-blue-100 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider border border-blue-400/30">
            🇮🇳 TRUSTED INDIAN OEM
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Precision Lab Equipment <br />
            <span className="text-blue-200">Built for India's Toughest R&D</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed">
            Indian OEM delivering globally benchmarked instrumentation, consumables, 
            and custom solutions to pharmaceutical, research, and industrial labs worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl text-lg"
            >
              Explore Products <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-transparent border-2 border-white/60 hover:bg-white/10 text-white font-semibold px-8 py-3.5 rounded-xl transition-all text-lg"
            >
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. GLOBAL PARTNERS / BRANDS STRIP */}
      {/* ============================================================ */}
      <section className="-mt-8 relative z-10">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg py-6 px-8 max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">
            Trusted Global Partners &amp; Distributions
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {brands.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center">
                <span className="text-gray-800 font-bold text-lg md:text-xl tracking-tight">
                  {brand.name}
                </span>
                <span className="text-[10px] font-medium text-gray-400 tracking-wider">
                  {brand.country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. WHY CHOOSE US (5 PILLARS) */}
      {/* ============================================================ */}
      <section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full">
            Why ARMS Technologies
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 mb-4">
            Engineering Excellence. Indian Made.
          </h2>
          <p className="text-gray-500 text-lg">
            Every instrument is built with accuracy you can trust, durability that lasts for years, 
            and support that stays with you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            // Make the 5th card span full width on lg if odd number, or just keep it.
            // We'll keep grid clean, but let's make it span 2 cols on larger screens for the 5th? 
            // Actually, let's just make it a 3-col grid and let the 5th fall naturally, 
            // but center it. Better: We'll let it flow. 
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 group hover:border-blue-200 flex flex-col items-start text-left"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 mb-4">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
        {/* Centering the 5th card to not look awkward */}
        <div className="flex justify-center mt-6 lg:hidden">
          {/* Empty div to balance layout, but grid handles it fine. We'll just let it be. */}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. MISSION & VISION SPLIT */}
      {/* ============================================================ */}
      <section className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
        <div className="grid md:grid-cols-2 gap-10">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-600">
            <div className="flex items-center gap-3 mb-4">
              <Building2 className="text-blue-600" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To design and manufacture world-class laboratory equipment that improves efficiency, 
              ensures accuracy, and supports innovation across scientific and industrial sectors.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-blue-800">
            <div className="flex items-center gap-3 mb-4">
              <Microscope className="text-blue-800" size={28} />
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To become the most trusted Indian brand for laboratory instrumentation by offering 
              globally benchmarked products built with engineering excellence and long-term reliability.
            </p>
          </div>
        </div>
        
        {/* The Promise */}
        <div className="mt-8 bg-blue-900 text-white rounded-2xl p-8 text-center">
          <h4 className="text-xl font-bold mb-2">Our Promise to You</h4>
          <p className="text-blue-200">
            Accuracy you can trust • Durability that lasts for years • Support that stays with you
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. EXPLORE CATEGORIES (Quick links to your 5 main categories) */}
      {/* ============================================================ */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <div>
            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase bg-blue-50 px-4 py-1.5 rounded-full">
              Browse Categories
            </span>
            <h2 className="text-3xl font-bold text-gray-800 mt-3">Complete Lab Solutions</h2>
          </div>
          <Link to="/products" className="text-blue-600 font-medium hover:text-blue-800 flex items-center gap-1 text-sm">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.slice(0, 5).map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/products/${category.id}`}
                className="group bg-white border border-gray-200 rounded-2xl p-6 text-center hover:shadow-xl transition-all hover:border-blue-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mb-3">
                  <Icon size={24} />
                </div>
                <h4 className="font-semibold text-gray-800 text-sm group-hover:text-blue-600 transition">
                  {category.name}
                </h4>
                <p className="text-gray-400 text-xs mt-1">{category.products.length} Products</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. FINAL CALL TO ACTION (Customization Focus) */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 to-blue-900 rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl">
        {/* Decorative blobs */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-400 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-cyan-400 rounded-full opacity-10 blur-2xl"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need a Custom <span className="text-blue-200">Lab Solution</span>?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            We understand that every lab is unique. Tell us your requirements, and we will design 
            a custom instrument tailored to your workflow.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-2xl text-lg"
          >
            Request Custom Build <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

