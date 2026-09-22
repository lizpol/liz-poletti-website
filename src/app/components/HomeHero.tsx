import { useState } from "react";
import type { PointerEvent } from "react";
import { Link } from "react-router";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import lizPhoto from "../../imports/Dreamwave-Photo__7_.png";
import heroVisual from "../../imports/hero-sculpture.jpg";
import "../../styles/home-hero.css";

export default function HomeHero() {
  const [showNote, setShowNote] = useState(false);
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useSpring(pointerX, { stiffness: 45, damping: 22 });
  const y = useSpring(pointerY, { stiffness: 45, damping: 22 });

  function moveVisual(event: PointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left - bounds.width / 2) * 0.018);
    pointerY.set((event.clientY - bounds.top - bounds.height / 2) * 0.018);
  }

  return (
    <section
      className="home-hero"
      aria-labelledby="hero-heading"
      onPointerMove={moveVisual}
      onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}
    >
      <motion.div className="hero-visual" style={{ x: reducedMotion ? 0 : x, y: reducedMotion ? 0 : y }} aria-hidden="true">
        <img src={heroVisual} alt="" fetchPriority="high" />
      </motion.div>
      <div className="hero-wash" aria-hidden="true" />

      <motion.div
        className="hero-center"
        initial={reducedMotion ? false : { opacity: 0, y: 18, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.15 }}
      >
        <span className="hero-eyebrow">UX / Product Designer</span>
        <button
          type="button"
          className="hero-avatar-button"
          aria-expanded={showNote}
          aria-controls="hero-personal-note"
          aria-label={showNote ? "Close Liz’s introduction" : "Meet Liz — read a little about me"}
          onClick={() => setShowNote(!showNote)}
        >
          <span className="hero-avatar-wrap">
            <img src={lizPhoto} alt="Liz" width="64" height="64" />
            <span className="hero-avatar-plus"><Plus size={13} style={{ transform: showNote ? "rotate(45deg)" : undefined }} aria-hidden="true" /></span>
          </span>
          <span>Hi, I’m Liz.</span>
        </button>

        <div id="hero-personal-note">
          <AnimatePresence initial={false}>
            {showNote && (
              <motion.div
                className="hero-personal-note"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reducedMotion ? 0 : 0.3 }}
              >
                <p>I’m the designer behind the details — the flows, the interfaces, and the words that make a product feel effortless. <Link to="/about">A little more about me <ArrowRight size={13} aria-hidden="true" /></Link></p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <h1 id="hero-heading">Complex products.<br /><span className="hero-serif">Simple</span> experiences.</h1>
        <p className="hero-description">I turn complexity into clear, intuitive experiences.<br className="hero-desktop-break" /> From structure and flows to UI and words.</p>
        <a href="#projects" className="hero-work-link">Explore my work <ArrowRight size={17} aria-hidden="true" /></a>
      </motion.div>

      <div className="hero-bottom">
        <span>From academia to product design <span className="hero-dot">·</span> 6+ years in UX</span>
        <span>Clarity. Language. Logic.</span>
      </div>
    </section>
  );
}
