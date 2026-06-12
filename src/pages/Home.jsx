import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const stats = [
    { number: "500+", label: "Villages Reached" },
    { number: "30,000+", label: "Lives Impacted" },
    { number: "15+", label: "Active Initiatives" },
    { number: "8+ Years", label: "Field Experience" },
  ];

  const focusPoints = [
    "Rural Health & Surgical Camps",
    "Sustainable Agricultural Support",
    "Rural Youth Education & Digital Literacy",
    "Women Self-Help & Micro-Finance Groups",
    "Water Conservation & Irrigation Initiatives",
  ];

  return (
    <div className="relative font-sans text-charcoal bg-primary-bg overflow-hidden">

      {/* HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

          {/* Left */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-green/15 border border-accent-green/25">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green animate-ping" />
              <span className="text-xs font-bold text-accent-green tracking-wider uppercase">Uplifting Rural Lives</span>
            </div>

            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-[1.15] tracking-tight">
              Harnessing <br className="hidden sm:inline" />
              <span className="text-accent-green">technologies</span> <br />
              for social impact
            </h1>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-xl">
              Raita Mitra Social Trust is committed to driving sustainable agricultural improvements, organizing free health & surgical camps, supporting rural education, and empowering women.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-2">
              <Link to="/about" className="bg-charcoal hover:bg-accent-green text-white px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider shadow-xl hover:shadow-accent-green/20 hover:-translate-y-0.5 active:scale-95 transition-all duration-300">
                What we do
              </Link>
              <button onClick={() => setIsVideoOpen(true)} className="group flex items-center gap-3 font-display font-bold text-sm text-charcoal hover:text-accent-green transition-colors duration-300 focus:outline-none">
                <span className="w-12 h-12 rounded-full bg-accent-green text-white flex items-center justify-center shadow-lg shadow-accent-green/20 group-hover:scale-110 active:scale-95 transition-all duration-300">
                  <svg className="w-5 h-5 fill-current ml-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </span>
                Play Video
              </button>
            </div>

            <div className="flex items-center gap-2.5 pt-4">
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green/30 cursor-pointer" />
              <span className="w-2.5 h-2.5 rounded-full bg-accent-green/30 cursor-pointer" />
            </div>
          </div>

          {/* Right - Image Collage */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[450px] sm:h-[520px]">
            <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-accent-green to-emerald-400 opacity-90" />

            <div className="absolute left-6 top-16 text-accent-green/30 select-none hidden sm:block">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M10 5l15 15-15 15" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M20 5l15 15-15 15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className="absolute top-10 right-4 sm:right-12 z-20 bg-white/90 backdrop-blur-sm shadow-xl px-4 py-3 rounded-2xl border border-white/50 flex items-center gap-2.5 animate-bounce">
              <span className="text-xl">☁️</span>
              <span className="text-xs font-bold font-display text-charcoal">Clean Health Care</span>
            </div>

            <div className="absolute bottom-12 left-2 sm:left-10 z-20 bg-white/90 backdrop-blur-sm shadow-xl px-4 py-3 rounded-2xl border border-white/50 flex items-center gap-2.5 animate-bounce">
              <span className="text-xl">🌱</span>
              <span className="text-xs font-bold font-display text-charcoal">Farmers First</span>
            </div>

            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] rounded-full border-8 border-white overflow-hidden shadow-2xl z-10">
              <img src="/images/farmers_illustration.jpg" alt="Raita Mitra Rural Work" className="w-full h-full object-cover scale-105 hover:scale-110 transition-transform duration-700" />
            </div>

            <div className="absolute -bottom-4 right-2 sm:right-8 z-20 w-36 h-36 sm:w-44 sm:h-44 rounded-2xl border-4 border-white overflow-hidden shadow-2xl rotate-6 hover:rotate-0 transition-all duration-300">
              <img src="/images/oxen_plowing.jpg" alt="Farmer plowing" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-24">
        <div className="bg-white rounded-3xl shadow-xl border border-accent-green/10 p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item, i) => (
            <div key={i} className="text-center space-y-2 group">
              <h3 className="font-display font-black text-4xl sm:text-5xl text-accent-green group-hover:scale-105 transition-transform duration-300">{item.number}</h3>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT HIGHLIGHT */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl border border-accent-green/10 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/oxen_plowing.jpg" alt="Traditional Farming" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-accent-green text-white p-6 rounded-2xl shadow-xl max-w-xs space-y-1">
              <p className="text-xs uppercase font-bold tracking-widest text-white/80">Our Vision</p>
              <p className="font-display font-bold text-sm leading-relaxed">"Uplifting standard of living for farmers and rural populations."</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-green">Know About Us</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-snug">
              Raita Mitra successfully completes large social & medical security experiments in Karnataka
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Established with the core goal of helping small-scale farmers and rural dwellers, Raita Mitra Social Trust has consistently conducted health outreach camps, supported agricultural automation training, and funded school supplies for low-income families.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our recent collaborations with regional healthcare institutes like Srinivasa Hospital have helped bring specialized surgical consulting and diagnostics directly to underserved villages, completely free of charge.
            </p>
            <Link to="/about" className="inline-flex items-center gap-2 border-2 border-charcoal hover:border-accent-green hover:bg-accent-green text-charcoal hover:text-white px-6 py-3 rounded-xl font-display font-bold text-sm transition-all duration-300">
              Learn More <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-cream-card py-12 px-4 border-y border-accent-green/5">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Collaborating Institutes & Backed By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
            {["🏥 Srinivasa Hospital Surathkal", "🌾 Koppal Farmer Union", "🎓 Srinivasa Med Sciences", "🤝 Social Welfare Dept."].map((p, i) => (
              <span key={i} className="font-display font-extrabold text-lg sm:text-xl text-gray-500 tracking-tight">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-green">What We Do</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl leading-snug">Raita Mitra Trust is carrying out vital works</h2>
            </div>
            <ul className="space-y-4">
              {focusPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-green/15 text-accent-green flex items-center justify-center font-bold text-xs">✓</span>
                  <span className="font-medium text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
            <Link to="/programs" className="bg-charcoal hover:bg-accent-green text-white px-7 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider shadow-lg hover:shadow-accent-green/20 transition-all duration-300">
              Explore Programs
            </Link>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl border border-accent-green/10 shadow-2xl overflow-hidden aspect-[4/3] bg-white">
              <img src="/images/stage_event.jpg" alt="Health camp event stage" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-accent-green/20 text-xs font-bold text-accent-green">
              📍 Alwandi Health Camp
            </div>
          </div>
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="py-20 bg-cream-card/50 border-t border-accent-green/5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div className="space-y-3 text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-green">Our Latest News</span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl">Recent Activities in the Field</h2>
            </div>
            <Link to="/gallery" className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-green hover:text-accent-green-hover transition-colors">
              View full photo gallery <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: "/images/stage_event.jpg", tag: "Health Outreach", title: "Mega Free Medical & Surgical Health Camp Conducted", desc: "Collaborating with doctors from Mangalore to provide diagnosis and surgery recommendations for rural residents." },
              { img: "/images/oxen_plowing.jpg", tag: "Sustainable Agriculture", title: "Organic Soil Health and Irrigation Workshop", desc: "Local training sessions on biological crop management, water harvesting techniques, and animal health support." },
              { img: "/images/stage_empty.jpg", tag: "Community Welfare", title: "Trust Infrastructure Setup for Healthcare Service", desc: "Establishing local contact hubs in Koppal district to route emergency healthcare cases to specialized hospitals." },
            ].map((card, i) => (
              <article key={i} className="bg-white rounded-3xl overflow-hidden shadow-lg border border-accent-green/5 flex flex-col group hover:-translate-y-1.5 transition-transform duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6 text-left flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-accent-green uppercase tracking-wider">{card.tag}</span>
                    <h3 className="font-display font-bold text-lg leading-snug group-hover:text-accent-green transition-colors">{card.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                  <Link to="/programs" className="text-xs font-bold text-charcoal hover:text-accent-green transition-colors">Read details</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-12 overflow-hidden rounded-3xl bg-charcoal text-white text-center">
        <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full bg-accent-green/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -top-24 w-80 h-80 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto space-y-8">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl leading-tight">Together we can transform rural communities</h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">Your support enables us to organize medical treatments, buy seed supplies for struggling families, and sustain local educational facilities.</p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link to="/donate" className="bg-accent-green hover:bg-accent-green-hover text-white px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider shadow-lg active:scale-95 transition-all duration-300">Make a Donation</Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-display font-bold text-sm tracking-wider active:scale-95 transition-all duration-300">Become a Volunteer</Link>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/80 backdrop-blur-md">
          <div className="relative bg-charcoal rounded-3xl shadow-2xl w-full max-w-3xl overflow-hidden aspect-video border border-accent-green/15 flex flex-col items-center justify-center text-white space-y-6 p-8">
            <button onClick={() => setIsVideoOpen(false)} className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm z-30 transition-colors">✕</button>
            <div className="w-16 h-16 rounded-full bg-accent-green text-white flex items-center justify-center text-2xl font-bold animate-pulse">🌾</div>
            <div className="text-center space-y-2 max-w-md">
              <h3 className="font-display font-extrabold text-lg sm:text-xl">Raita Mitra Social Trust Initiatives</h3>
              <p className="text-xs text-gray-400 leading-relaxed">Empowering farming practices and free rural clinics in Alwandi, Koppal district, Karnataka.</p>
            </div>
            <button onClick={() => setIsVideoOpen(false)} className="bg-accent-green hover:bg-accent-green-hover px-6 py-2.5 rounded-xl font-display font-bold text-xs transition-colors">Close Player</button>
          </div>
        </div>
      )}
    </div>
  );
}
