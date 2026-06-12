import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactDetails = [
    { icon: "📍", title: "Registered Office", info: ["Raita Mitra Social Trust (R)", "Alwandi Road, Koppal", "Karnataka, India – 583231"] },
    { icon: "📞", title: "Contact Numbers", info: ["+91 94819 12345", "+91 99002 98765"] },
    { icon: "✉️", title: "Email Address", info: ["contact@raitamitra.org", "raitamitratrust@gmail.com"] },
    { icon: "⏰", title: "Working Hours", info: ["Mon–Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"] },
  ];

  return (
    <div className="font-sans text-charcoal bg-primary-bg py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">Get In Touch</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-tight">
            Reach Out to <span className="text-accent-green">Raita Mitra</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">Whether you're a farmer, healthcare partner, donor, or volunteer — we warmly welcome your connection.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left - Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-accent-green text-white p-8 sm:p-10 rounded-3xl space-y-8 shadow-xl">
              <div>
                <h2 className="font-display font-bold text-2xl text-white mb-2">Contact Information</h2>
                <p className="text-white/80 text-sm">Call, email or visit us. Our team is happy to respond to all inquiries.</p>
              </div>
              <div className="space-y-6">
                {contactDetails.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-green/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-display font-bold text-sm text-accent-green uppercase tracking-wider mb-1">{item.title}</p>
                      {item.info.map((line, j) => (
                        <p key={j} className="text-gray-300 text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-gray-800 flex gap-3">
                {["F", "T", "I", "Y"].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-xl bg-white/10 hover:bg-accent-green flex items-center justify-center text-white text-xs font-bold cursor-pointer transition-colors duration-300">{l}</div>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="bg-white rounded-3xl border border-accent-green/10 shadow-lg overflow-hidden aspect-video flex items-center justify-center text-center text-gray-400 font-sans text-sm p-6 space-y-2">
              <div>
                <div className="text-4xl mb-2">🗺️</div>
                <p className="font-semibold text-gray-600">Alwandi Road, Koppal</p>
                <p className="text-xs">Karnataka, India – 583231</p>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-accent-green/10 shadow-xl p-8 sm:p-10">
            {!submitted ? (
              <>
                <div className="mb-8">
                  <h2 className="font-display font-bold text-2xl text-charcoal">Send a Message</h2>
                  <p className="text-gray-400 text-sm mt-1">We'll get back to you as soon as possible.</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Full Name</label>
                      <input id="contact-name" name="name" type="text" value={formState.name} onChange={handleChange} required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-primary-bg border border-accent-green/15 focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 outline-none text-sm text-charcoal font-medium transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Email Address</label>
                      <input id="contact-email" name="email" type="email" value={formState.email} onChange={handleChange} required placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-primary-bg border border-accent-green/15 focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 outline-none text-sm text-charcoal font-medium transition-all" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Subject</label>
                    <input id="contact-subject" name="subject" type="text" value={formState.subject} onChange={handleChange} required placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-primary-bg border border-accent-green/15 focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 outline-none text-sm text-charcoal font-medium transition-all" />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-xs font-bold text-gray-500 uppercase tracking-wider">Message</label>
                    <textarea id="contact-message" name="message" value={formState.message} onChange={handleChange} required rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 rounded-xl bg-primary-bg border border-accent-green/15 focus:border-accent-green focus:ring-2 focus:ring-accent-green/10 outline-none text-sm text-charcoal font-medium transition-all resize-none" />
                  </div>
                  <button type="submit" id="contact-submit-btn" className="w-full bg-accent-green hover:bg-accent-green-hover text-white py-4 rounded-xl font-display font-bold tracking-wider text-sm shadow-xl active:scale-95 transition-all duration-300">
                    Send Message ✉️
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-5">
                <div className="w-16 h-16 bg-accent-green/15 rounded-full flex items-center justify-center text-4xl animate-bounce">✅</div>
                <h3 className="font-display font-black text-2xl text-charcoal">Message Received!</h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">Thank you for reaching out to Raita Mitra. A member of our team will respond to you within 24–48 working hours.</p>
                <button onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", subject: "", message: "" }); }} className="bg-accent-green hover:bg-accent-green-hover text-white px-8 py-3 rounded-xl font-display font-bold text-sm transition-colors duration-300">
                  Send Another Message
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
