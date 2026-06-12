import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e3e26] text-green-100 font-sans">
      <div className="h-2 bg-gradient-to-r from-accent-green/90 via-[#2ca45c] to-accent-green/90"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-accent-green">
                  <path d="M35 75 C 35 55, 45 45, 48 40 C 42 43, 30 45, 25 40 C 32 38, 43 41, 48 40 C 45 35, 38 28, 35 25 C 40 28, 46 36, 48 40 L 48 75 Z" />
                  <path d="M62 75 C 62 58, 55 50, 52 46 C 57 48, 66 50, 70 46 C 65 45, 57 47, 52 46 C 54 42, 59 36, 61 33 C 57 36, 53 43, 52 46 L 52 75 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-base text-white tracking-wider">RAITA MITRA</span>
                <span className="text-[9px] font-semibold text-accent-green tracking-widest uppercase">Social Trust (R)</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Raita Mitra Social Trust is dedicated to the welfare of farmers, promotion of sustainable agriculture, rural youth education, health camp initiatives, and overall rural development.
            </p>
            <div className="flex gap-4">
              {["F", "T", "I", "Y"].map((letter, i) => (
              <div className="w-9 h-9 rounded-xl bg-green-900/80 hover:bg-accent-green text-green-200 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <span className="text-xs font-semibold">{letter}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg tracking-wider relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent-green"></span>
            </h3>
            <ul className="grid grid-cols-2 gap-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Programs", path: "/programs" },
                { name: "Photo Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
                { name: "Donate", path: "/donate" },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-accent-green transition-colors duration-300 flex items-center gap-1.5">
                    <span className="text-accent-green">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg tracking-wider relative inline-block">
              Contact Info
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent-green"></span>
            </h3>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <span className="text-accent-green text-lg">📍</span>
                <span><strong>Regd. Office:</strong><br />Raita Mitra Social Trust (R),<br />Alwandi Road, Koppal,<br />Karnataka, India - 583231</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent-green text-lg">📞</span>
                <span>+91 94819 12345 / +91 99002 98765</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent-green text-lg">✉️</span>
                <span>contact@raitamitra.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="font-display font-bold text-white text-lg tracking-wider relative inline-block">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-8 h-[2px] bg-accent-green"></span>
            </h3>
            <p className="text-sm text-white/70 leading-relaxed">
              Subscribe to receive updates on rural healthcare camps and agricultural guidance drives.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input type="email" placeholder="Your email address" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-green-700 text-green-100 text-sm focus:outline-none focus:border-accent-green transition-colors" required />
              <button type="submit" className="w-full bg-accent-green hover:bg-accent-green-hover text-white py-3 rounded-xl font-display font-bold text-sm tracking-wider shadow-lg active:scale-95 transition-all duration-300">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-green-700 text-center text-xs text-green-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} Raita Mitra Social Trust (R). All Rights Reserved.</p>
          <div className="flex gap-4 text-green-100">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
