import { useState } from "react";

export default function Donate() {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState(1);
  const [donorInfo, setDonorInfo] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const effectiveAmount = selectedAmount || Number(customAmount) || 0;

  const handleDonorChange = (e) => {
    setDonorInfo({ ...donorInfo, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const impactTable = [
    { amount: "₹500", impact: "Provides free medicines to 5 rural patients" },
    { amount: "₹1,000", impact: "Sponsors full-day diagnostic checkup for 3 families" },
    { amount: "₹2,500", impact: "Funds school stationary packs for 20 rural children" },
    { amount: "₹5,000", impact: "Sponsors cataract surgery for 1 elderly farmer" },
    { amount: "₹10,000", impact: "Covers a full Soil Health Testing drive for one village" },
  ];

  return (
    <div className="font-sans text-[#0f3d25] bg-[#F4F8F5] py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-accent-green bg-accent-green/10 px-3 py-1 rounded-full">Give Back</span>
          <h1 className="font-display font-black text-4xl sm:text-5xl leading-tight">
            Your Donation <span className="text-accent-green">Changes Lives</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">Each rupee directly funds health checkups, crop research, and school supplies for those who need it most.</p>
        </div>

        {!submitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Donation Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-accent-green/10 shadow-xl overflow-hidden">

              {/* Steps Nav */}
              <div className="flex border-b border-white/10">
                {[1, 2].map((s) => (
                  <button key={s} onClick={() => s < step && setStep(s)}
                    className={`flex-1 py-5 font-display font-bold text-sm text-center transition-all ${step === s ? "text-accent-green border-b-2 border-accent-green bg-accent-green/5" : "text-white/60 hover:text-white"}`}>
                    {s === 1 ? "1. Choose Amount" : "2. Your Details"}
                  </button>
                ))}
              </div>

              <div className="p-8 sm:p-10">
                {step === 1 ? (
                  <div className="space-y-8">
                    <h2 className="font-display font-extrabold text-xl text-white">How much would you like to give?</h2>
                    <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                      {presetAmounts.map((a) => (
                        <button key={a} onClick={() => handleAmountSelect(a)}
                          className={`py-3 rounded-xl font-display font-bold text-sm transition-all duration-200 border-2 ${selectedAmount === a ? "bg-accent-green text-white border-accent-green shadow-lg" : "bg-[#0f3d25] text-accent-green border-accent-green/15 hover:border-accent-green hover:text-accent-green"}`}>
                          ₹{a.toLocaleString("en-IN")}
                        </button>
                      ))}
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="custom-amount" className="block text-xs font-bold text-white/70 uppercase tracking-wider">Or enter a custom amount</label>
                      <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-white/70">₹</span>
                        <input id="custom-amount" type="number" min="1" value={customAmount} onChange={handleCustomChange} placeholder="Enter amount" className="w-full pl-8 pr-4 py-3.5 rounded-xl bg-[#0f3d25] border-2 border-accent-green/15 focus:border-accent-green outline-none text-sm font-bold text-white transition-all" />
                      </div>
                    </div>
                    <button disabled={!effectiveAmount} onClick={() => setStep(2)}
                      className="w-full bg-accent-green hover:bg-accent-green-hover disabled:opacity-40 disabled:cursor-not-allowed text-white py-4 rounded-xl font-display font-bold text-sm tracking-wider shadow-xl active:scale-95 transition-all duration-300">
                      Continue →
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFinalSubmit} className="space-y-5">
                    <div className="bg-cream-card border border-accent-green/15 rounded-2xl px-5 py-4 text-left">
                      <p className="text-xs font-bold text-white/70 uppercase tracking-wider">Donation Amount</p>
                      <p className="font-display font-black text-3xl text-accent-green mt-1">₹{effectiveAmount.toLocaleString("en-IN")}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label htmlFor="donor-name" className="block text-xs font-bold text-white/70 uppercase tracking-wider">Full Name</label>
                        <input id="donor-name" name="name" type="text" value={donorInfo.name} onChange={handleDonorChange} required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-[#0f3d25] border border-accent-green/15 focus:border-accent-green outline-none text-sm text-white font-medium transition-all placeholder:text-white/40" />
                      </div>
                      <div className="space-y-1.5">
                        <label htmlFor="donor-email" className="block text-xs font-bold text-white/70 uppercase tracking-wider">Email</label>
                        <input id="donor-email" name="email" type="email" value={donorInfo.email} onChange={handleDonorChange} required placeholder="your@email.com" className="w-full px-4 py-3 rounded-xl bg-[#0f3d25] border border-accent-green/15 focus:border-accent-green outline-none text-sm text-white font-medium transition-all placeholder:text-white/40" />
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="donor-phone" className="block text-xs font-bold text-white/70 uppercase tracking-wider">Phone Number</label>
                      <input id="donor-phone" name="phone" type="tel" value={donorInfo.phone} onChange={handleDonorChange} required placeholder="+91 XXXXX XXXXX" className="w-full px-4 py-3 rounded-xl bg-[#0f3d25] border border-accent-green/15 focus:border-accent-green outline-none text-sm text-white font-medium transition-all placeholder:text-white/40" />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="donor-message" className="block text-xs font-bold text-white/70 uppercase tracking-wider">Message (optional)</label>
                      <textarea id="donor-message" name="message" value={donorInfo.message} onChange={handleDonorChange} rows={3} placeholder="Any message for the trust..." className="w-full px-4 py-3 rounded-xl bg-[#0f3d25] border border-accent-green/15 focus:border-accent-green outline-none text-sm text-white font-medium resize-none transition-all placeholder:text-white/40" />
                    </div>
                    <button type="submit" id="donate-submit-btn" className="w-full bg-accent-green hover:bg-accent-green-hover text-white py-4 rounded-xl font-display font-bold text-sm tracking-wider shadow-xl active:scale-95 transition-all duration-300">
                      Donate ₹{effectiveAmount.toLocaleString("en-IN")} Now 💚
                    </button>
                    <p className="text-center text-[11px] text-white/60">Contributions to Raita Mitra Social Trust (R) are exempt under Section 80G of the Income Tax Act.</p>
                  </form>
                )}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-cream-card rounded-3xl border border-accent-green/15 p-6 sm:p-8 space-y-5">
                <h3 className="font-display font-bold text-lg text-white">Your Impact</h3>
                <ul className="space-y-3">
                  {impactTable.map((row, i) => (
                    <li key={i} className={`flex items-start gap-3 pb-3 border-b border-accent-green/5 last:border-none last:pb-0 transition-all ${effectiveAmount >= Number(row.amount.replace(/[₹,]/g, "")) ? "opacity-100" : "opacity-40"}`}>
                      <span className="font-display font-black text-accent-green text-sm w-16 flex-shrink-0">{row.amount}</span>
                      <span className="text-white/70 text-xs leading-relaxed">{row.impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-accent-green text-white rounded-3xl p-6 space-y-3 shadow-xl">
                <p className="font-display font-bold text-base">🔒 Safe & Secure Payments</p>
                <p className="text-xs text-white/80 leading-relaxed">Your donation is processed securely. We accept UPI, Net Banking, NEFT, and Cheque/DD.</p>
                <div className="flex flex-wrap gap-2 pt-2 text-xs text-white/80 font-bold">
                  <span className="bg-white/10 px-3 py-1.5 rounded-full">📱 UPI</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-full">🏦 NEFT/RTGS</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-full">🎫 Cheque/DD</span>
                  <span className="bg-white/10 px-3 py-1.5 rounded-full">💳 Net Banking</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-accent-green/15 shadow-xl max-w-xl mx-auto p-10 text-center space-y-6">
            <div className="w-20 h-20 bg-accent-green/10 rounded-full flex items-center justify-center text-5xl mx-auto animate-bounce">💚</div>
            <h2 className="font-display font-black text-3xl text-[#0f3d25]">Thank You!</h2>
            <p className="text-slate-700 leading-relaxed text-sm max-w-sm mx-auto">
              Your generous donation of <strong className="text-accent-green font-display font-black text-lg">₹{effectiveAmount.toLocaleString("en-IN")}</strong> has been received.<br />A confirmation receipt will be emailed to <strong>{donorInfo.email}</strong>.
            </p>
            <div className="bg-cream-card rounded-2xl p-4 text-xs text-slate-500 leading-relaxed">
              📑 80G Tax Exemption Certificate will be issued within 7–10 working days.
            </div>
            <button onClick={() => { setSubmitted(false); setStep(1); setSelectedAmount(null); setCustomAmount(""); setDonorInfo({ name: "", email: "", phone: "", message: "" }); }}
              className="bg-accent-green hover:bg-accent-green-hover text-white px-8 py-3 rounded-xl font-display font-bold text-sm transition-colors duration-300">
              Donate Again
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
