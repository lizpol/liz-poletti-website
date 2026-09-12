import { useParams, Link, Navigate } from "react-router";
import Navigation from "../components/Navigation";
import { projects } from "../data/projects";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import Breadcrumb from "../components/Breadcrumb";
import CaveoCaseStudy from "./CaveoCaseStudy";
import SquadraCaseStudy from "./SquadraCaseStudy";
import SquadraChecklistsCaseStudy from "./SquadraChecklistsCaseStudy";
import SquadraSwapsCaseStudy from "./SquadraSwapsCaseStudy";
import NvoyeCaseStudy from "./NvoyeCaseStudy";

import fosterPreview from "../../imports/foster-preview.jpg";

const projectOrder = ["squadra", "caveo", "nvoye", "foster"];

const projectImages: Record<string, string> = {
  foster: fosterPreview,
};

const knownIds = new Set([...projectOrder, "squadra-checklists", "squadra-swaps"]);

export default function CaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  if (!projectId || !knownIds.has(projectId)) {
    return <Navigate to="/" replace />;
  }

  if (projectId === "caveo") return <CaveoCaseStudy />;
  if (projectId === "squadra") return <SquadraCaseStudy />;
  if (projectId === "squadra-checklists") return <SquadraChecklistsCaseStudy />;
  if (projectId === "squadra-swaps") return <SquadraSwapsCaseStudy />;
  if (projectId === "nvoye") return <NvoyeCaseStudy />;

  const project = projects[projectId];
  const currentIndex = projectOrder.indexOf(projectId);
  const previousProjectId = currentIndex > 0 ? projectOrder[currentIndex - 1] : projectOrder[projectOrder.length - 1];
  const nextProjectId = currentIndex < projectOrder.length - 1 ? projectOrder[currentIndex + 1] : projectOrder[0];
  const heroImage = projectImages[projectId];

  const ctaDescriptions: Record<string, string> = {
    nvoye: "The complete PDF covers UX strategy for the diplomatic community, community feature design, trust and privacy patterns, and the full design system built for Nvoye.",
    foster: "The complete PDF covers the information architecture restructure, content strategy for multiple audiences, the visual system, and the responsive design decisions.",
  };

  const closingStatements: Record<string, string> = {
    nvoye: "By designing for discretion rather than engagement metrics, Nvoye became a platform that diplomats could trust — one where professionalism and privacy weren't afterthoughts, but the foundation.",
    foster: "By restructuring the site around the needs of families under stress, Foster the Family's digital presence became a resource people could actually use when they needed it most.",
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: "Works", href: "/#projects" },
            { label: project.title },
          ]} />

          {/* Hero Section */}
          <div className="mb-20 text-center">
            <div className="text-blue-800 text-xs tracking-widest mb-6">
              {project.category.toUpperCase()}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 leading-tight tracking-tight max-w-4xl mx-auto">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              {project.tagline}
            </p>
            {project.pdfUrl && (
              <a
                href={project.pdfUrl}
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/25 text-sm tracking-wide uppercase"
              >
                <Download className="w-4 h-4" />
                Download Full Case Study
              </a>
            )}
          </div>

          {/* Hero Image — full bleed */}
          {heroImage && (
            <div className="mb-24 -mx-6 md:-mx-12 lg:-mx-24">
              <div className="relative overflow-hidden h-[400px] md:h-[540px]">
                <img
                  src={heroImage}
                  alt={`${project.title} — project image`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#201E50]/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 lg:px-24 pb-10">
                  <p className="text-white/80 text-sm tracking-wide">{project.title} — {project.timeline}</p>
                </div>
              </div>
            </div>
          )}

          {/* Meta Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 pb-24 border-b border-blue-200">
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">ROLE</div>
              <p className="text-slate-700 leading-relaxed">{project.role}</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">TEAM</div>
              <p className="text-slate-700 leading-relaxed">{project.team}</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">TIMELINE</div>
              <p className="text-slate-700 leading-relaxed">{project.timeline}</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">PLATFORM</div>
              <p className="text-slate-700 leading-relaxed">Web & Mobile</p>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">OVERVIEW</div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  {project.description.split(".")[0]}.
                </h2>
              </div>
              <div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {project.summary}
                </p>
              </div>
            </div>
          </section>

          {/* Design Challenges */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">DESIGN CHALLENGES</div>
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
              Key problems that shaped the design
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.challenges.map((challenge, i) => (
                <div key={i} className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl">
                  <div className="text-blue-800/40 text-xs tracking-widest mb-3">{String(i + 1).padStart(2, "0")}</div>
                  <p className="text-slate-900 font-medium leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">PROCESS</div>
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
              How the work unfolded
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.process.map(({ phase, description }, i) => (
                <div key={i} className="bg-white border border-blue-200 p-8 rounded-xl hover:shadow-md transition-shadow">
                  <div className="text-blue-800/40 text-xs tracking-widest mb-4">{String(i + 1).padStart(2, "0")}</div>
                  <h4 className="text-lg font-medium text-slate-900 mb-3">{phase}</h4>
                  <p className="text-slate-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">OUTCOMES</div>
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
              What was delivered
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {project.outcomes.map((outcome, i) => (
                <div key={i} className="bg-white border border-blue-200 p-6 rounded-xl flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-blue-800 mt-2 flex-shrink-0" />
                  <p className="text-slate-700 leading-relaxed">{outcome}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Closing Statement */}
          {closingStatements[projectId] && (
            <section className="mb-24">
              <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-12 md:p-16">
                <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-center">
                  {closingStatements[projectId]}
                </p>
              </div>
            </section>
          )}

          {/* Final CTA */}
          <section className="mb-20">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-12 md:p-16 text-center">
              <h3 className="text-3xl text-slate-900 mb-4">Want the full case study?</h3>
              <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                {ctaDescriptions[projectId] ?? "The complete PDF includes detailed process, outcomes, design decisions and implementation details across this project."}
              </p>
              {project.pdfUrl ? (
                <a
                  href={project.pdfUrl}
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/25 text-sm tracking-wide uppercase"
                >
                  <Download className="w-4 h-4" />
                  Download Full Case Study
                </a>
              ) : (
                <div className="inline-flex flex-col items-center gap-4">
                  <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-100 text-slate-400 rounded-full text-sm tracking-wide uppercase cursor-not-allowed">
                    Case Study Coming Soon
                  </div>
                  <p className="text-slate-500 text-sm">
                    Reach out at{" "}
                    <a href="mailto:polettilaiza@gmail.com" className="text-blue-800 hover:underline">
                      polettilaiza@gmail.com
                    </a>{" "}
                    to request access.
                  </p>
                </div>
              )}
            </div>
          </section>

          {/* Project Navigation */}
          <div className="pt-12 border-t border-blue-200">
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                to={`/work/${previousProjectId}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-[#201E50] border-2 border-[#201E50] rounded-full hover:bg-[#5C80BC]/15 hover:border-[#5C80BC] transition-all duration-300 text-sm tracking-wide uppercase"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous Project
              </Link>
              <Link
                to={`/work/${nextProjectId}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent text-[#201E50] border-2 border-[#201E50] rounded-full hover:bg-[#5C80BC]/15 hover:border-[#5C80BC] transition-all duration-300 text-sm tracking-wide uppercase"
              >
                Next Project
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-blue-200">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="mailto:polettilaiza@gmail.com" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">
              Email
            </a>
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
