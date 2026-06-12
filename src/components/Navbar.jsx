import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Programs", path: "/programs" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-accent-green/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-accent-green/10 group-hover:bg-accent-green/20 transition-colors duration-300">
              <svg viewBox="0 0 100 100" className="w-8 h-8 fill-white group-hover:fill-accent-green transition-colors duration-300">
                <circle cx="50" cy="50" r="12" className="fill-accent-green/30" />
                <path d="M35 75 C 35 55, 45 45, 48 40 C 42 43, 30 45, 25 40 C 32 38, 43 41, 48 40 C 45 35, 38 28, 35 25 C 40 28, 46 36, 48 40 C 49 34, 48 24, 48 20 C 51 25, 51 35, 48 40 C 52 40, 60 38, 65 35 C 59 38, 52 40, 48 40 C 51 45, 56 50, 60 55 C 55 50, 50 46, 48 40 L 48 75 Z" />
                <path d="M62 75 C 62 58, 55 50, 52 46 C 57 48, 66 50, 70 46 C 65 45, 57 47, 52 46 C 54 42, 59 36, 61 33 C 57 36, 53 43, 52 46 C 51 41, 51 32, 50 28 C 48 33, 49 41, 52 46 C 48 46, 42 45, 38 42 C 43 44, 49 46, 52 46 C 50 50, 46 54, 43 58 C 47 54, 51 51, 52 46 L 52 75 Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg leading-none tracking-tight text-slate-900 group-hover:text-accent-green transition-colors">
                RAITA MITRA
              </span>
              <span className="text-[10px] font-semibold text-accent-green tracking-widest uppercase">
                Social Trust (R)
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative py-2 text-slate-700/80 hover:text-accent-green transition-colors duration-300 ${isActive ? "text-accent-green font-bold font-display" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && <span className="absolute bottom-0 left-0 right-0 h-[3px] rounded-full bg-accent-green" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden md:flex items-center">
            <Link to="/donate" className="bg-accent-green hover:bg-accent-green-hover text-white px-6 py-3 rounded-xl font-display font-bold text-sm tracking-wider shadow-lg hover:shadow-accent-green/20 active:scale-95 transition-all duration-300">
              Donate Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-xl text-white hover:text-accent-green hover:bg-accent-green/10 focus:outline-none transition-colors">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-b border-accent-green/10`} id="mobile-menu">
        <div className="px-4 pt-2 pb-4 space-y-2 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl font-medium text-base transition-colors ${isActive ? "bg-accent-green/10 text-accent-green font-bold" : "text-slate-700/80 hover:bg-accent-green/5 hover:text-accent-green"}`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <div className="pt-4 pb-2 border-t border-accent-green/10">
            <Link to="/donate" onClick={() => setIsOpen(false)} className="block w-full text-center bg-accent-green hover:bg-accent-green-hover text-white py-3.5 rounded-xl font-display font-bold text-base transition-all duration-300">
              Donate Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
