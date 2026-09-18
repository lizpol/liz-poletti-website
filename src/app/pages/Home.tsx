import { Link } from "react-router";
import Navigation from "../components/Navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, CheckCircle2, Mail, Copy } from "lucide-react";

import { useState, useRef, useEffect } from "react";
import lizPhoto from "../../imports/Dreamwave-Photo__7_.png";
import "../../styles/home-hero.css";
import squadraImage from "../../imports/squadra-three-devices.png";
import checklistsImage from "../../imports/Checklist-EN.png";
import swapsImage from "../../imports/squadra-swaps-preview-v2.png";
import caveoImage from "../../imports/3.png";
import nvoyeImage from "../../imports/nvoye-preview-v2.png";
import fosterImage from "../../imports/foster-preview-v2.png";

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
    bg: "bg-[radial-gradient(ellipse_at_top,#f5f2ff_0%,#ede9fe_60%,#e3dcfa_100%)]",
    fit: "object-contain p-6",
  },
  "squadra-checklists": {
    img: checklistsImage,
    bg: "bg-[#ede9fe]",
    fit: "object-contain",
    parent: "Squadra",
  },
  "squadra-swaps": {
    img: swapsImage,
    bg: "bg-[#ede9fe]",
    fit: "object-contain",
    parent: "Squadra",
  },
  caveo: {
    img: caveoImage,
    bg: "bg-[radial-gradient(ellipse_at_top,#edf6ff_0%,#dcecfb_60%,#cbdff3_100%)]",
    fit: "object-contain py-4",
  },
  nvoye: {
    img: nvoyeImage,
    bg: "bg-[#dcecfb]",
    fit: "object-contain",
  },
  foster: {
    img: fosterImage,
    bg: "bg-[#f3e9dd]",
    fit: "object-contain",
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
      role: "UX/UI Designer & UX Writer",
      company: "Independent",
      description: "Website redesign for foster care organization",
      tags: ["Web Design", "Information Architecture"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="home-hero" aria-labelledby="hero-heading">
        <div className="hero-shell">
          <div className="hero-eyebrow">
            <span>UX / Product Designer</span>
            <span className="hero-edition">Thoughtful by design.</span>
          </div>

          <div className="hero-composition">
            <div className="hero-copy">
              <div className="hero-intro">
                <img src={lizPhoto} alt="Liz" width="44" height="44" />
                <span>Hi, I’m Liz.</span>
              </div>
              <h1 id="hero-heading">
                Complex<br />products.<br />
                <span className="hero-serif">Simple</span> experiences.
              </h1>
              <p className="hero-description">
                I turn complexity into clear, intuitive experiences.
                From structure and flows to UI and words — everything users touch.
              </p>
              <div className="hero-actions">
                <a href="#projects" className="hero-work-link">
                  Explore my work <span><ArrowRight size={19} aria-hidden="true" /></span>
                </a>
                <Link to="/about" className="hero-about-link">A little about me <ArrowRight size={15} aria-hidden="true" /></Link>
              </div>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-caption"><span>01 — A little less friction</span><span>↗</span></div>
              <svg className="hero-thread" viewBox="0 0 460 480" fill="none">
                <path className="hero-thread-loose" d="M42 88 C178 3 328 45 304 143 C275 264 38 166 98 95 C149 35 358 185 270 241 C184 296 71 165 145 143 C231 117 380 289 267 316 C175 338 121 230 179 224 C264 214 265 341 289 360" />
                <path className="hero-thread-clear" d="M289 360 C304 384 342 371 342 402 L342 445" />
                <path className="hero-thread-clear" d="M334 437 L342 446 L350 437" />
              </svg>
              <span className="hero-art-note">There’s a simpler way.</span>
              <div className="hero-solution">
                <div className="hero-solution-top"><span className="hero-solution-icon"><CheckCircle2 size={22} /></span><span>Made to make sense</span><span>↗</span></div>
                <div className="hero-solution-title">Clarity, by design.</div>
                <div className="hero-solution-bottom"><span>Less effort. More flow.</span><span className="hero-solution-line" /></div>
              </div>
              <span className="hero-art-footnote">From the complicated to the intuitive.</span>
              <svg className="hero-asterisk" viewBox="0 0 80 80"><path d="M40 0v80M0 40h80M12 12l56 56M12 68l56-56" stroke="currentColor" strokeWidth="9" /></svg>
            </div>
          </div>

          <div className="hero-footer">
            <div className="hero-stat"><strong>6+</strong><span>years of experience</span></div>
            <div className="hero-stat"><strong>20+</strong><span>products designed</span></div>
            <p>Workforce management <span> / </span> Finance <span> / </span> Digital services</p>
          </div>
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
