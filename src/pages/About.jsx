import { Link } from "react-router-dom";

export default function About() {
  const values = [
    { title: "Farmer Centricity", description: "We place the economic, physical, and technical well-being of local farmers at the center of all our initiatives.", icon: "🌾" },
    { title: "Healthcare Inclusion", description: "Ensuring that expensive specialized diagnostics and surgeries are accessible to the poorest rural families.", icon: "🏥" },
    { title: "Educational Empowerment", description: "Supporting primary education and digital readiness to expand horizons for village students.", icon: "📚" },
    { title: "Transparency & Trust", description: "Functioning as a registered social trust with absolute compliance, transparency, and accountability to our donors.", icon: "🛡️" },
  ];

  return (
    <div className="font-sans text-charcoal bg-primary-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">Our Identity</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-tight">
            Empowering Villages, <span className="text-accent-green">Sustaining</span> Futures
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">Raita Mitra Social Trust (R) is a grassroots non-profit organization focused on healthcare outreach, farming upgrades, and rural education in Karnataka.</p>
        </div>

        {/* Our Story */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-left">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl relative inline-block pb-1">
              Our Journey & Roots
              <span className="absolute bottom-0 left-0 w-12 h-[3px] bg-accent-green"></span>
            </h2>
            <p className="text-gray-600 leading-relaxed">Founded in Koppal, Karnataka, Raita Mitra ("Farmer's Friend") was born out of a simple observation: rural populations faced severe gaps in accessing modern agricultural technologies and quality medical treatments.</p>
            <p className="text-gray-600 leading-relaxed">We started by organizing small-scale workshops to teach soil testing and crop diversification. Recognizing that physical health is the foundation of economic security, we expanded our operations to sponsor medical treatments, partnering with leading multi-specialty hospitals like Srinivasa Hospital to bring top surgeons to village doorsteps.</p>
            <p className="text-gray-600 leading-relaxed">Today, Raita Mitra stands as a trusted network of volunteers, doctors, agronomists, and social workers, dedicated to community upliftment.</p>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl border border-accent-green/10 shadow-2xl overflow-hidden aspect-[4/3]">
              <img src="/images/farmers_illustration.jpg" alt="Farming communities" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent-green/10 rounded-full blur-xl pointer-events-none" />
          </div>
        </section>

        {/* Leadership Spotlight */}
        <section className="bg-cream-card rounded-3xl p-8 sm:p-12 border border-accent-green/15 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6 text-left">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-green bg-accent-green/15 px-3 py-1 rounded-full">Leadership Spotlight</span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-charcoal">Sri C.V. Chandrashekar</h2>
            <p className="text-accent-green font-bold text-sm tracking-wide uppercase">Prominent Social Worker & Patron, Koppal Constituency</p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">A dedicated leader representing the Koppal Assembly Constituency, Sri C.V. Chandrashekar has been the driving force behind the social initiatives of the Raita Mitra Social Trust. His commitment to rural welfare has facilitated collaborations with premier medical colleges and hospitals, enabling mega surgical camps.</p>
            <blockquote className="border-l-4 border-accent-green pl-4 text-gray-500 italic text-sm">
              "Our rural brothers and sisters shouldn't have to compromise on health or farm productivity due to lack of accessibility. We aim to bring high-quality clinical operations and modern agronomy knowledge directly to them."
            </blockquote>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">Under his patronage, the trust has organized free clinical checks, laboratory tests, and distribution of medicines to thousands of villagers.</p>
          </div>
          <div className="lg:col-span-4 space-y-4">
            <div className="rounded-2xl border-4 border-white shadow-lg overflow-hidden aspect-[4/3] bg-white">
              <img src="/images/stage_event.jpg" alt="Health camp event" className="w-full h-full object-cover" />
            </div>
            <p className="text-[11px] font-semibold text-gray-500 text-center italic">Sri C.V. Chandrashekar and trust members at a mega health camp.</p>
          </div>
        </section>

        {/* Core Values */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-accent-green">Our Core Principles</span>
            <h2 className="font-display font-extrabold text-3xl">Values that guide Raita Mitra</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-accent-green/5 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-left space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-green/10 flex items-center justify-center text-2xl">{value.icon}</div>
                <h3 className="font-display font-bold text-lg text-charcoal">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-12 bg-accent-green rounded-3xl text-white px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-xl">
          <div className="text-left space-y-2">
            <h3 className="font-display font-extrabold text-xl sm:text-2xl">Want to learn more about our local projects?</h3>
            <p className="text-white/80 text-sm max-w-xl">Discover how our agricultural, educational, and medical camps are structured to create a sustainable cycle of development.</p>
          </div>
          <Link to="/programs" className="bg-charcoal hover:bg-white text-white hover:text-charcoal px-8 py-3.5 rounded-xl font-display font-bold text-sm tracking-wider active:scale-95 transition-all duration-300">Explore Programs</Link>
        </section>

      </div>
    </div>
  );
}
