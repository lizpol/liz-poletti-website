import { Link } from "react-router";
import Navigation from "../components/Navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, CheckCircle2, Mail, Copy } from "lucide-react";

function HeroIllustration() {
  return (
    <div className="relative w-full" style={{ minHeight: 420 }}>

      {/* Sticky note */}
      <div className="absolute" style={{ top: '2%', left: '0%', width: '56%', transform: 'rotate(-2.5deg)' }}>
        <div className="relative bg-amber-100 shadow-xl px-6 py-5 pb-8">
          {/* Tape strip */}
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-5"
            style={{ background: 'rgba(254,240,138,0.75)', border: '1px solid rgba(253,224,71,0.4)', boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.06)' }}
          />
          <p style={{ fontFamily: "'Caveat', cursive", fontSize: '1.35rem', lineHeight: 1.55, color: '#374151' }}>
            Make it easy<br />
            to do the<br />
            <span style={{ textDecoration: 'underline' }}>right thing.</span>
          </p>
        </div>
      </div>

      {/* SVG dashed connector */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 420 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <path
          d="M 235 130 C 270 100 330 110 365 185"
          stroke="#201E50"
          strokeWidth="1.6"
          strokeDasharray="5 5"
          strokeLinecap="round"
        />
      </svg>

      {/* Sparkle circle */}
      <div
        className="absolute flex items-center justify-center rounded-full bg-blue-50 border border-blue-100"
        style={{ top: '42%', right: '6%', width: 100, height: 100, boxShadow: '0 2px 16px rgba(32,30,80,0.07)' }}
      >
        {/* 4-pointed sparkle */}
        <svg viewBox="0 0 32 32" fill="none" style={{ width: 42, height: 42 }}>
          <path
            d="M16 2 L17.8 13.2 L29 16 L17.8 18.8 L16 30 L14.2 18.8 L3 16 L14.2 13.2 Z"
            fill="#201E50"
          />
          <path
            d="M25 5 L25.7 8.3 L29 9 L25.7 9.7 L25 13 L24.3 9.7 L21 9 L24.3 8.3 Z"
            fill="#5C80BC"
            opacity="0.7"
          />
        </svg>
      </div>

    </div>
  );
}
import { useState, useRef, useEffect } from "react";
import lizPhoto from "../../imports/Dreamwave-Photo__7_.png";
import heroImage from "../../imports/Hero-image-1.png";
import squadraImage from "../../imports/Squadra-Hero-image-EN.png";
import checklistsImage from "../../imports/Tablet.png";
import swapsImage from "../../imports/Swap-real.png";
import caveoImage from "../../imports/3.png";
import nvoyeImage from "../../imports/Connections.png";
import fosterImage from "../../imports/foster-preview.jpg";

interface ProjectCardProps {
  number: string;
  year: string;
  title: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
  id: string;
}

const cardConfig: Record<string, { img: string; bg: string; fit: string; parent?: string }> = {
  squadra: {
    img: squadraImage,
    bg: "bg-gradient-to-br from-[#201E50]/6 to-slate-100",
    fit: "object-contain p-6",
  },
  "squadra-checklists": {
    img: checklistsImage,
    bg: "bg-gradient-to-br from-violet-50 to-slate-50",
    fit: "object-cover object-top",
    parent: "Squadra",
  },
  "squadra-swaps": {
    img: swapsImage,
    bg: "bg-gradient-to-br from-blue-50 to-indigo-50",
    fit: "object-contain p-4",
    parent: "Squadra",
  },
  caveo: {
    img: caveoImage,
    bg: "bg-gradient-to-br from-sky-50 to-blue-100",
    fit: "object-contain py-4",
  },
  nvoye: {
    img: nvoyeImage,
    bg: "bg-slate-50",
    fit: "object-cover object-top",
  },
  foster: {
    img: fosterImage,
    bg: "",
    fit: "object-cover object-center",
  },
};

function ProjectCard({ year, title, description, tags, id }: ProjectCardProps) {
  const config = cardConfig[id] ?? { img: "", bg: "bg-slate-100", fit: "object-cover" };

  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/work/${id}`} className="group block h-full">
        <div className="h-full flex flex-col bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">

          {/* Image area — fixed height */}
          <div className={`h-[240px] flex-shrink-0 overflow-hidden ${config.bg}`}>
            {config.img ? (
              <img
                src={config.img}
                alt={title}
                className={`w-full h-full ${config.fit} group-hover:scale-[1.03] transition-transform duration-500`}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
            )}
          </div>

          {/* Text — fills remaining space */}
          <div className="flex-1 flex flex-col justify-between p-6 overflow-hidden">
            <div>
              {config.parent && (
                <div className="text-slate-400 text-xs tracking-widest mb-1.5 uppercase">{config.parent} →</div>
              )}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-slate-900 text-lg font-semibold leading-snug">{title}</h3>
                <span className="text-slate-400 text-xs pt-0.5 flex-shrink-0">{year}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{description}</p>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              {tags.map(tag => (
                <span key={tag} className="text-xs text-[#201E50]/70 bg-[#201E50]/5 rounded-full px-3 py-1">{tag}</span>
              ))}
            </div>
          </div>

        </div>
      </Link>
    </motion.div>
  );
}

interface CapabilityAccordionItemProps {
  title: string;
  description: string;
  items: string[];
  isOpen: boolean;
  onClick: () => void;
}

function CapabilityAccordionItem({ title, description, items, isOpen, onClick }: CapabilityAccordionItemProps) {
  return (
    <div className="border-b border-blue-200">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-6 group"
      >
        <h3 className="text-2xl text-slate-900 group-hover:text-blue-800 transition-colors tracking-tight flex-1 text-left">
          {title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-5 h-5 text-blue-800 group-hover:text-blue-900 transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-8 space-y-6">
              <p className="text-slate-700 leading-relaxed">
                {description}
              </p>
              <p className="text-slate-700 leading-relaxed">
                I focus on:
              </p>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Home() {
  const [openCapability, setOpenCapability] = useState(0);
  const [showEmailPopover, setShowEmailPopover] = useState(false);
  const [showFooterEmailPopover, setShowFooterEmailPopover] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [footerCopySuccess, setFooterCopySuccess] = useState(false);
  const emailButtonRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);
  const footerEmailButtonRef = useRef<HTMLButtonElement>(null);
  const footerPopoverRef = useRef<HTMLDivElement>(null);

  const handleCapabilityClick = (index: number) => {
    setOpenCapability(openCapability === index ? -1 : index);
  };

  const handleCopyEmail = async () => {
    const email = "polettilaiza@gmail.com";
    
    // Use fallback method by default since clipboard API may be blocked
    try {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      textArea.remove();
      
      if (successful) {
        setCopySuccess(true);
        setTimeout(() => {
          setCopySuccess(false);
          setShowEmailPopover(false);
        }, 1500);
      }
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleOpenEmail = () => {
    window.location.href = "mailto:polettilaiza@gmail.com";
    setShowEmailPopover(false);
  };

  const handleCopyFooterEmail = async () => {
    const email = "polettilaiza@gmail.com";
    
    // Use fallback method by default since clipboard API may be blocked
    try {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.style.position = "fixed";
      textArea.style.left = "-999999px";
      textArea.style.top = "-999999px";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      
      const successful = document.execCommand('copy');
      textArea.remove();
      
      if (successful) {
        setFooterCopySuccess(true);
        setTimeout(() => {
          setFooterCopySuccess(false);
          setShowFooterEmailPopover(false);
        }, 1500);
      }
    } catch (err) {
      console.error("Failed to copy email:", err);
    }
  };

  const handleOpenFooterEmail = () => {
    window.location.href = "mailto:polettilaiza@gmail.com";
    setShowFooterEmailPopover(false);
  };

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        emailButtonRef.current &&
        !emailButtonRef.current.contains(event.target as Node)
      ) {
        setShowEmailPopover(false);
      }
    };

    if (showEmailPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showEmailPopover]);

  // Close footer popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        footerPopoverRef.current &&
        !footerPopoverRef.current.contains(event.target as Node) &&
        footerEmailButtonRef.current &&
        !footerEmailButtonRef.current.contains(event.target as Node)
      ) {
        setShowFooterEmailPopover(false);
      }
    };

    if (showFooterEmailPopover) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFooterEmailPopover]);

  const capabilities = [
    {
      title: "Product Design (UX & UI)",
      description: "I design end-to-end digital products, from early concept and product framing to detailed UX and UI design and implementation support. Whether working on simple flows or complex systems, I create clear structures that help users understand, decide, and act with confidence.",
      items: [
        "Product structure and user journeys",
        "Turning constraints and research insights into usable solutions",
        "High-impact flows that support adoption and trust",
        "Scalable information architecture and UI systems"
      ]
    },
    {
      title: "User Research",
      description: "My academic research background gives me a strong foundation in UX research methodology. I've adapted rigorous analytical techniques from academic work into practical research skills that inform design decisions.",
      items: [
        "User interviews and contextual inquiry",
        "Usability testing and evaluation",
        "Qualitative analysis and synthesis",
        "Competitive and heuristic evaluation"
      ]
    },
    {
      title: "UX Writing",
      description: "Words shape how users interpret information, make decisions, and experience a product as a whole. I use language not only to guide users through complex information, but to set tone, clarify intent, and reduce friction.",
      items: [
        "Using language to shape product direction and build user trust",
        "Interface copy that reduces cognitive load",
        "Clear system and error messaging that prevents confusion"
      ]
    },
    {
      title: "Expert Communication",
      description: "I apply UX and UI design principles to content-heavy environments, making complex research and expert knowledge accessible, structured, and compelling. With experience in both academic and product settings, I bridge rigorous content with clear, user-centered presentation.",
      items: [
        "Academic and research websites",
        "Grant proposals and research presentations",
        "Research posters and data visualization",
        "Structuring dense information for clarity and impact"
      ]
    }
  ];

  const projects = [
    {
      id: "squadra",
      number: "01",
      year: "2023–25",
      title: "Squadra",
      role: "Product Designer",
      company: "Squadra",
      description: "2+ years designing a workforce management platform across desktop, tablet and mobile",
      tags: ["Product Design", "UX", "UI", "UX Writing"]
    },
    {
      id: "squadra-checklists",
      number: "03",
      year: "2023–24",
      title: "Squadra — Checklists",
      role: "UX/UI Designer & UX Writer",
      company: "Squadra",
      description: "Shift task management — managers build templates, workers execute on mobile, managers review submissions",
      tags: ["Feature Design", "Mobile", "Web"]
    },
    {
      id: "squadra-swaps",
      number: "04",
      year: "2023–24",
      title: "Squadra — Shift Swaps",
      role: "UX/UI Designer & UX Writer",
      company: "Squadra",
      description: "Peer-to-peer shift exchange — employees request swaps, managers approve, schedule updates automatically",
      tags: ["Feature Design", "Flows", "Web"]
    },
    {
      id: "caveo",
      number: "05",
      year: "2023–24",
      title: "Caveo",
      role: "UX/UI Designer & UX Writer",
      company: "Ganz Digital",
      description: "Digital financial planning structured around life situations",
      tags: ["Product Design", "UX Writing", "Trust Building"]
    },
    {
      id: "nvoye",
      number: "06",
      year: "2022–23",
      title: "Nvoye",
      role: "Product Designer",
      company: "Nvoye",
      description: "Private digital platform and community for diplomats",
      tags: ["Community Design", "UX Strategy", "Trust & Discretion"]
    },
    {
      id: "foster",
      number: "07",
      year: "2023",
      title: "Foster the Family",
      role: "Web Designer",
      company: "Independent",
      description: "Website redesign for foster care organization",
      tags: ["Web Design", "Information Architecture"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-0">
        <div className="absolute top-1/2 right-0 w-[700px] h-[700px] bg-blue-100/25 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

        <div className="max-w-7xl w-full mx-auto relative z-10 px-6 md:px-16 lg:px-24">
          {/* Two-column: text left, illustration right */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center pb-16">

            {/* Left: text — fixed, does not grow */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Tag — same style and colour as "Selected Work" label */}
              <div className="flex items-center gap-4 mb-7">
                <div className="h-px w-6 bg-blue-800/40" />
                <span className="text-blue-800 text-xs tracking-[0.2em] uppercase">UX / Product Designer</span>
                <div className="h-px w-6 bg-blue-800/40" />
              </div>

              {/* Avatar + greeting */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-[#201E50]/20 flex-shrink-0 overflow-hidden shadow-sm">
                  <img src={lizPhoto} alt="Liz" className="w-full h-full object-cover object-top" />
                </div>
                <span className="text-[#201E50] text-sm font-medium">Hi, I'm Liz.</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] text-slate-900 leading-[1.1] tracking-tight mb-6">
                I design complex<br />
                products that feel<br />
                <span className="italic font-serif text-[#5C80BC]">simple.</span>
              </h1>

              {/* Body */}
              <p className="text-slate-600 leading-relaxed mb-4 max-w-sm">
                I help teams turn complexity into clear, intuitive experiences. From structure and flows to UI and words — everything users touch.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10 max-w-sm">
                Currently designing products across workforce management, finance and digital services.
              </p>

              {/* CTA */}
              <Link
                to="/#projects"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/20 text-sm tracking-wide uppercase"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Right: hero image */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <img
                src={heroImage}
                alt="Make it easy to do the right thing"
                className="w-full"
                style={{ maxWidth: 560 }}
              />
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            className="border-t border-slate-200 py-10 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            {[
              { value: "6+",         unit: "years",      sub: "experience" },
              { value: "20+",        unit: "products",   sub: "designed" },
              { value: "B2B",        unit: "SaaS focus", sub: "across industries" },
              { value: "User-first", unit: "mindset",    sub: "in everything" },
            ].map(({ value, unit, sub }) => (
              <div key={value}>
                <div className="text-2xl md:text-3xl font-bold leading-none mb-1 text-[#5C80BC]">{value}</div>
                <div className="text-slate-900 text-sm font-medium mb-0.5">{unit}</div>
                <div className="text-slate-400 text-xs">{sub}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-16 lg:px-24 py-32 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="h-px w-8 bg-blue-800/40" />
              <span className="text-blue-800 text-xs tracking-[0.2em] uppercase">Selected Work</span>
              <div className="h-px w-8 bg-blue-800/40" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight">Projects</h2>
          </motion.div>

          {/* Project Grid */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            style={{ gridAutoRows: "420px" }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="px-6 md:px-16 lg:px-24 py-32 bg-gradient-to-b from-slate-50 to-white relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent" />

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-8 mb-8">
              <div className="h-px w-8 bg-blue-800/40" />
              <span className="text-blue-800 text-xs tracking-[0.2em] uppercase">What I Do</span>
              <div className="h-px w-8 bg-blue-800/40" />
            </div>
          </motion.div>

          {/* Capabilities Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {capabilities.map((capability, index) => (
              <CapabilityAccordionItem
                key={index}
                title={capability.title}
                description={capability.description}
                items={capability.items}
                isOpen={openCapability === index}
                onClick={() => handleCapabilityClick(index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-16 lg:px-24 py-12 border-t border-blue-200 relative">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-8 items-center relative">
            <div className="relative">
              <button
                ref={footerEmailButtonRef}
                onMouseEnter={() => setShowFooterEmailPopover(true)}
                onMouseLeave={() => setShowFooterEmailPopover(false)}
                className="text-blue-800 hover:text-blue-900 text-sm transition-colors"
              >
                polettilaiza@gmail.com
              </button>

              {/* Email Popover */}
              <AnimatePresence>
                {showFooterEmailPopover && (
                  <motion.div
                    ref={footerPopoverRef}
                    onMouseEnter={() => setShowFooterEmailPopover(true)}
                    onMouseLeave={() => setShowFooterEmailPopover(false)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-full mb-3 right-0 w-64 bg-white/98 backdrop-blur-sm border border-blue-200 rounded-xl shadow-xl shadow-blue-800/15 overflow-hidden z-50"
                  >
                    <div className="p-4">
                      <div className="space-y-2">
                        <button
                          onClick={handleCopyFooterEmail}
                          className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-lg transition-all group"
                        >
                          <Copy className="w-4 h-4 text-blue-800 group-hover:text-blue-900" />
                          <span className="text-slate-700 text-sm">
                            {footerCopySuccess ? "Copied!" : "Copy Email"}
                          </span>
                        </button>

                        <button
                          onClick={handleOpenFooterEmail}
                          className="w-full flex items-center gap-3 px-4 py-3 bg-blue-50 hover:bg-blue-100 border border-blue-200 hover:border-blue-300 rounded-lg transition-all group"
                        >
                          <Mail className="w-4 h-4 text-blue-800 group-hover:text-blue-900" />
                          <span className="text-slate-700 text-sm">
                            Open Email Client
                          </span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <a href="https://www.linkedin.com/in/laiza-poletti" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            © 2026 — Available for freelance work
          </p>
        </div>
      </footer>
    </div>
  );
}