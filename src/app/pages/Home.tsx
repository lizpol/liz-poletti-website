import { Link } from "react-router";
import Navigation from "../components/Navigation";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronDown, CheckCircle2, Mail, Copy } from "lucide-react";

import { useState, useRef, useEffect } from "react";
import HomeHero from "../components/HomeHero";
import "../../styles/portfolio.css";
import squadraImage from "../../imports/squadra-three-devices.png";
import ChecklistCover from "../components/ChecklistCover";
import SwapsCover from "../components/SwapsCover";
import caveoImage from "../../imports/3.png";
import NvoyeCover from "../components/NvoyeCover";
import FosterCover from "../components/FosterCover";

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
    img: "",
    bg: "bg-[#ede9fe]",
    fit: "object-contain",
    parent: "Squadra",
  },
  "squadra-swaps": {
    img: "",
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
    img: "",
    bg: "bg-[#dcecfb]",
    fit: "object-contain",
  },
  foster: {
    img: "",
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
      <Link to={`/work/${id}`} className="project-link group block h-full">
        <div className="project-card h-full flex flex-col">

          {/* Image area — fixed height */}
          <div className={`project-image flex-shrink-0 overflow-hidden ${config.bg}`}>
            {id === "squadra-checklists" ? <ChecklistCover /> : id === "squadra-swaps" ? <SwapsCover /> : id === "nvoye" ? <NvoyeCover /> : id === "foster" ? <FosterCover /> : config.img ? (
              <img
                src={config.img}
                alt={title}
                loading="lazy"
                className={`w-full h-full ${config.fit} group-hover:scale-[1.03] transition-transform duration-500`}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200" />
            )}
          </div>

          {/* Text — fills remaining space */}
          <div className="project-caption flex-1 flex flex-col justify-between">
            <div>
              {config.parent && (
                <div className="text-slate-400 text-xs tracking-widest mb-1.5 uppercase">{config.parent} →</div>
              )}
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="project-title">{title}</h3>
                <span className="text-slate-400 text-xs pt-0.5 flex-shrink-0">{year}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
            </div>
            <div className="flex gap-2 flex-wrap mt-4">
              {tags.map(tag => (
                <span key={tag} className="project-tag">{tag}</span>
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
    <div className="capability-item">
      <button
        onClick={onClick}
        aria-expanded={isOpen}
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
      year: "2024–26",
      title: "Squadra",
      role: "UX/UI Designer & UX Writer",
      company: "Ganz Digital",
      description: "In-house design for a workforce management platform across desktop, tablet and mobile.",
      tags: ["Product Design", "UX", "UI", "UX Writing"]
    },
    {
      id: "caveo",
      number: "05",
      year: "2024–26",
      title: "Caveo",
      role: "UX/UI Designer & UX Writer",
      company: "Ganz Digital",
      description: "Digital financial planning app structured around life situations.",
      tags: ["Product Design",  "UX", "UI", "Trust Building"]
    },
    {
      id: "nvoye",
      number: "06",
      year: "2024–26",
      title: "Nvoye",
      role: "Product Designer",
      company: "Nvoye",
      description: "Private digital platform and community for diplomats.",
      tags: ["Product Design", "UX Strategy", "UX / UI"]
    },
    {
      id: "foster",
      number: "07",
      year: "2023",
      title: "Foster the Family",
      role: "UX/UI Designer & UX Writer",
      company: "Independent",
      description: "Website redesign for foster care organization.",
      tags: ["Web Design", "Information Architecture", "UX Writing"]
    },
    {
      id: "squadra-checklists",
      number: "03",
      year: "2024",
      title: "Feature deep dive: Shift Checklists",
      role: "UX/UI Designer & UX Writer",
      company: "Squadra",
      description: "Shift task management built for the Squadra environment.",
      tags: ["Feature Design", "User flows", "UX / UI"]
    },
    {
      id: "squadra-swaps",
      number: "04",
      year: "2025",
      title: "Feature deep dive: Shift Swaps",
      role: "UX/UI Designer & UX Writer",
      company: "Squadra",
      description: "Peer-to-peer shift exchange built for the Squadra environment.",
      tags: ["Feature Design", "User flows", "UX / UI"]
    }
  ];

  return (
    <div className="portfolio-page min-h-screen bg-slate-50">
      <Navigation />
      
      <HomeHero />

      {/* Projects Section */}
      <section id="projects" className="portfolio-section">

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="portfolio-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="portfolio-eyebrow">Selected work</span>
            <h2>Clarity in <em>practice.</em></h2>
            <p>A selection of products, and the thinking behind them.</p>
          </motion.div>

          {/* Project Grid */}
          <div
            className="project-grid"
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="portfolio-section capabilities-section">

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="portfolio-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="portfolio-eyebrow">What I do</span>
            <h2>Considered from <em>every angle.</em></h2>
            <p>Structure, interfaces, and words — designed to work together.</p>
          </motion.div>

          {/* Capabilities Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="capability-list"
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
      <footer className="portfolio-footer relative">
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
            © 2026 Laiza Poletti
          </p>
        </div>
      </footer>
    </div>
  );
}
