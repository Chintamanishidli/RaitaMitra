import { Link } from "react-router-dom";

export default function Programs() {
  const programs = [
    {
      id: "health-camps", tag: "Community Health", title: "Rural Health Checkups & Surgical Camps",
      description: "In collaboration with Srinivasa Hospital (Surathkal, Mangalore), we organize large-scale medical camps in Koppal district. We provide free clinical checkups, distribute essential drugs, and sponsor specialized surgeries for underprivileged villagers.",
      features: ["Surgical consultations & general checkups", "Free distribution of diagnostics & medicines", "Fully funded cataract & general surgeries", "Collaboration with multi-specialty doctors"],
      image: "/images/stage_event.jpg", reverse: false,
    },
    {
      id: "agriculture", tag: "Farming Growth", title: "Sustainable Agricultural Training & Guidance",
      description: "Helping small-scale and marginal farmers adopt modern, sustainable, and cost-effective methods. We sponsor soil test kits, conduct organic composting workshops, and support water conservation layouts for dryland farming.",
      features: ["Biological pest management workshops", "Rainwater harvesting & drip irrigation setups", "Traditional organic composting techniques", "Soil health card generation"],
      image: "/images/oxen_plowing.jpg", reverse: true,
    },
    {
      id: "education", tag: "Youth Empowerment", title: "Rural Youth Education Support",
      description: "Enabling kids from farming families to successfully complete their schooling. We distribute kits comprising backpacks, notebooks, uniforms, and stationary. We also fund internet-enabled computers for village schools.",
      features: ["Annual school supply distribution drives", "Scholarships for higher education for girls", "Digital library & study room setups", "Peer-to-peer student mentorship"],
      image: "/images/farmers_illustration.jpg", reverse: false,
    },
    {
      id: "women-empowerment", tag: "Livelihood Support", title: "Women Self-Reliance Initiatives",
      description: "Providing rural women with vocational skills to establish supplemental income streams. We sponsor tailoring machines, hold manufacturing workshops, and help structure local micro-finance groups.",
      features: ["Free tailoring & stitching certification courses", "Business setup guidance for Self-Help Groups", "Financial literacy & digital banking workshops", "Marketing assistance for home-made goods"],
      image: "https://images.unsplash.com/photo-1573164713988-8695df143605?q=80&w=1200&auto=format&fit=crop", reverse: true,
    },
  ];

  return (
    <div className="font-sans text-[#0f3d25] bg-[#F4F8F5] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">Our Initiatives</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-tight text-[#0f3d25]">
            How Raita Mitra <span className="text-accent-green">Creates</span> Impact
          </h1>
          <p className="text-slate-700 text-lg leading-relaxed">Through targeted community programs, we strive to build self-reliant villages by resolving core healthcare, agronomic, and educational challenges.</p>
        </div>

        {/* Programs */}
        <section className="space-y-24">
          {programs.map((program) => (
            <div key={program.id} id={program.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className={`lg:col-span-6 relative ${program.reverse ? "lg:order-2" : ""}`}>
                <div className="relative rounded-3xl border border-accent-green/10 shadow-2xl overflow-hidden aspect-[4/3] bg-white">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent" />
                </div>
              </div>
              <div className={`lg:col-span-6 space-y-6 text-left ${program.reverse ? "lg:order-1" : ""}`}>
                <span className="text-xs font-bold text-accent-green uppercase tracking-wider bg-accent-green/10 px-3 py-1 rounded-full">{program.tag}</span>
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl leading-snug text-white">{program.title}</h2>
                <p className="text-white/80 leading-relaxed text-sm sm:text-base">{program.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {program.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-accent-green font-bold text-base mt-0.5">✓</span>
                      <span className="text-white/80 text-sm font-medium leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/donate" className="inline-block bg-accent-green hover:bg-accent-green-hover text-white px-6 py-3 rounded-xl font-display font-bold text-xs tracking-wider shadow-lg hover:shadow-accent-green/20 transition-all duration-300">
                  Support this Initiative
                </Link>
              </div>
            </div>
          ))}
        </section>

        {/* CTA */}
        <section className="bg-cream-card rounded-3xl p-8 sm:p-12 border border-accent-green/15 shadow-xl text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-2xl sm:text-3xl">Have a proposal or want to collaborate with us?</h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">We actively coordinate with medical institutions, organic farming trainers, and school administrators to run local social campaigns.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-accent-green hover:border-accent-green text-accent-green hover:text-white hover:bg-accent-green px-8 py-3.5 rounded-xl font-display font-bold text-sm transition-all duration-300">
            Contact Our Trust <span>→</span>
          </Link>
        </section>

      </div>
    </div>
  );
}
