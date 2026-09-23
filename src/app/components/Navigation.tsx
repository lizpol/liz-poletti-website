import { Link, useLocation } from "react-router";
import { useEffect, useRef, useState } from "react";
import logoImage from "../../imports/Logo-LP.png";

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloating, setShowFloating] = useState(false);
  const navigationRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const scrollPosition = () => Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - window.innerHeight));
    let previousY = scrollPosition();
    let distance = 0;
    let direction = 0;
    setIsScrolled(previousY > 50);
    setShowFloating(false);

    const handleScroll = () => {
      const currentY = scrollPosition();
      const delta = currentY - previousY;
      previousY = currentY;
      setIsScrolled(currentY > 50);
      if (currentY <= 50) {
        distance = 0;
        setShowFloating(false);
        return;
      }
      if (!delta) return;
      const nextDirection = Math.sign(delta);
      distance = nextDirection === direction ? distance + Math.abs(delta) : Math.abs(delta);
      direction = nextDirection;
      if (distance >= 24) {
        // Never hide a navigation link while someone is using the keyboard.
        if (!navigationRef.current?.contains(document.activeElement)) {
          setShowFloating(direction < 0);
        }
        distance = 0;
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Tab" && window.scrollY > 50) setShowFloating(true);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [location.key]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav ref={navigationRef} aria-label="Main navigation" className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      {/* Expanded top bar — visible at the top */}
      <div className={`w-full px-6 md:px-12 transition-all duration-200 motion-reduce:transition-none pointer-events-auto ${
        isScrolled ? 'invisible opacity-0 -translate-y-full pointer-events-none' : 'opacity-100 translate-y-0'
      }`}>
        <div className="max-w-7xl mx-auto grid grid-cols-[1fr_auto_1fr] items-center py-6 md:py-8">
          <Link to="/" className="justify-self-start flex items-center hover:opacity-80 transition-opacity">
            <img src={logoImage} alt="LP Logo" className="h-16 w-auto" />
          </Link>
          <div className="flex gap-8">
            <Link
              to="/#projects"
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

      {/* Floating pill — revealed by upward scrolling or keyboard navigation */}
      <div className={`absolute top-[32px] md:top-[40px] inset-x-0 px-6 md:px-12 pointer-events-none transition-all duration-200 motion-reduce:transition-none ${
        isScrolled && showFloating ? 'opacity-100 translate-y-0' : 'invisible opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto flex justify-center">
        <div className="pointer-events-auto flex items-center gap-1 px-2 py-2 bg-white/85 backdrop-blur-xl border border-slate-200/80 rounded-full shadow-lg shadow-slate-900/10">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity px-2"
          >
            <img src={logoImage} alt="LP Logo" className="h-7 w-auto" />
          </Link>
          <div className="w-px h-4 bg-slate-200 mx-1" />
          <Link
            to="/#projects"
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
      </div>
    </nav>
  );
}