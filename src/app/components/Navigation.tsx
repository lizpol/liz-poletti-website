import { Link, useLocation } from "react-router";
import { useEffect, useState } from "react";
import logoImage from "../../imports/Logo-LP.png";

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Expanded top bar — visible at the top */}
      <div className={`w-full px-6 md:px-12 transition-all duration-500 pointer-events-auto ${
        isScrolled ? 'invisible opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center py-6 md:py-8">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="LP Logo" className="h-16 w-auto" />
          </Link>
          <div className="flex gap-8">
            <Link
              to="/"
              className={`text-sm tracking-wider transition-colors ${isActive('/') ? 'text-blue-800' : 'text-slate-600 hover:text-slate-900'}`}
            >
              WORKS
            </Link>
            <Link
              to="/about"
              className={`text-sm tracking-wider transition-colors ${isActive('/about') ? 'text-blue-800' : 'text-slate-600 hover:text-slate-900'}`}
            >
              ABOUT
            </Link>
          </div>
        </div>
      </div>

      {/* Floating pill — appears on scroll */}
      <div className={`absolute top-4 pointer-events-auto transition-all duration-500 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="flex items-center gap-1 px-2 py-2 bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-lg shadow-slate-900/10">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity px-2"
          >
            <img src={logoImage} alt="LP Logo" className="h-7 w-auto" />
          </Link>
          <div className="w-px h-4 bg-slate-200 mx-1" />
          <Link
            to="/"
            className={`text-xs tracking-wider px-3 py-1.5 rounded-full transition-all ${
              isActive('/') ? 'bg-[#201E50] text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            WORKS
          </Link>
          <Link
            to="/about"
            className={`text-xs tracking-wider px-3 py-1.5 rounded-full transition-all ${
              isActive('/about') ? 'bg-[#201E50] text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            ABOUT
          </Link>
        </div>
      </div>
    </nav>
  );
}