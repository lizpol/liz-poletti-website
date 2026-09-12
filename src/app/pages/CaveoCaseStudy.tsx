import { Link, Navigate, useParams } from "react-router";
import Navigation from "../components/Navigation";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { projects } from "../data/projects";

import oldApp from "../../imports/CaveoApp/46dbf3a4264d36b313c17a84d33d36ca0f922897.png";
import screen1 from "../../imports/1.png";
import screen2 from "../../imports/2.png";
import screen3 from "../../imports/3.png";
import screen4 from "../../imports/4.png";
import screen5 from "../../imports/5.png";
import screen6 from "../../imports/6.png";
import screen7 from "../../imports/7.png";
import screen8 from "../../imports/8.png";

const projectOrder = ["squadra", "caveo", "nvoye", "foster"];

export default function CaveoCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId !== "caveo") {
    return <Navigate to="/" replace />;
  }

  const project = projects.caveo;
  const currentIndex = projectOrder.indexOf("caveo");
  const previousProjectId = projectOrder[currentIndex - 1];
  const nextProjectId = projectOrder[currentIndex + 1];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={[
            { label: "Works", href: "/#projects" },
            { label: "Caveo" },
          ]} />

          {/* Hero Section */}
          <div className="mb-20 text-center">
            <div className="text-blue-800 text-xs tracking-widest mb-6">
              FINANCIAL PLANNING PLATFORM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 leading-tight tracking-tight max-w-4xl mx-auto">
              Redesigning Caveo: from insurance app to holistic financial planning product
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              Caveo is a Swiss financial planning platform combining insurance guidance, financial organisation and long-term planning. This redesign transformed the app from a static insurance utility into a more interactive financial planning experience.
            </p>
            <a
              href="/case-studies/caveo-case-study-sample.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/25 text-sm tracking-wide uppercase"
            >
              <Download className="w-4 h-4" />
              Download Full Case Study
            </a>
          </div>

          {/* Product Video - Hero */}
          <div className="mb-24 -mx-6 md:-mx-12 lg:-mx-24">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100" />
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/30 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-300/20 rounded-full blur-3xl" />
              <div className="relative py-12 md:py-20 px-6 flex items-center justify-center">
                <div className="relative w-full max-w-2xl lg:max-w-3xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 blur-3xl scale-110" />
                  <div className="relative h-[650px] md:h-[750px] lg:h-[850px] flex items-center justify-center">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="relative w-full h-full object-contain drop-shadow-2xl"
                    >
                      <source src="/videos/caveo-demo.mp4" type="video/mp4" />
                      <p className="text-slate-600 text-center">Your browser does not support the video tag.</p>
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Meta Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-24 pb-24 border-b border-blue-200">
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">ROLE</div>
              <p className="text-slate-700 leading-relaxed">UX / UI Designer</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">SCOPE</div>
              <p className="text-slate-700 leading-relaxed">UX Strategy, Product Thinking, UX Design, UI Design</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">PLATFORM</div>
              <p className="text-slate-700 leading-relaxed">Mobile App</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">TIMELINE</div>
              <p className="text-slate-700 leading-relaxed">4 Months</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">TEAM</div>
              <p className="text-slate-700 leading-relaxed">Worked closely with founders and developers</p>
            </div>
          </div>

          {/* Intro */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-blue-800 text-xs tracking-widest mb-6">THE OPPORTUNITY</div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">A product users come back to</h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Caveo already had strong financial expertise, but the app mainly functioned as an insurance and consultation utility. The opportunity was to create a product users would actively return to over time.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  The redesign focused on making the platform easier to understand, more interactive and more connected to users' real financial decisions.
                </p>
              </div>
              {/* Old app screenshot */}
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-slate-200/50 rounded-3xl blur-2xl scale-95" />
                  <img
                    src={oldApp}
                    alt="Caveo before — static insurance home screen"
                    className="relative w-full max-w-[260px] mx-auto drop-shadow-xl rounded-2xl"
                  />
                </div>
                <p className="text-slate-500 text-sm text-center">Before — static insurance utility</p>
              </div>
            </div>
          </section>

          {/* Design Challenge */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">DESIGN CHALLENGE</div>
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-8 leading-tight max-w-2xl">
              Three questions that shaped the redesign
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl">
                <p className="text-slate-900 font-medium leading-relaxed">
                  How could Caveo's broader offering become easier to understand?
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl">
                <p className="text-slate-900 font-medium leading-relaxed">
                  How could the product create ongoing engagement?
                </p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-800 p-6 rounded-r-xl">
                <p className="text-slate-900 font-medium leading-relaxed">
                  How could product engagement better connect to expert consultation?
                </p>
              </div>
            </div>
          </section>

          {/* Feature 1: Topic-based planning */}
          <section className="mb-32">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 01</div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  Topic-based financial planning
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  I redesigned the experience around the real financial topics people think about in life — taxes, pensions, assets and inheritance — rather than internal product categories.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  The hexagon grid became the core navigation metaphor: each cell is a self-contained topic with its own assessment, tasks and status.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  This structure made the app's scope immediately legible while leaving room for the plan to evolve as users progress.
                </p>
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-200/30 rounded-3xl blur-2xl scale-95" />
                  <img
                    src={screen1}
                    alt="Financial plan screen with hexagon topic navigation"
                    className="relative w-full max-w-[280px] mx-auto drop-shadow-xl"
                  />
                </div>
                <p className="text-slate-500 text-sm text-center">Plan home — topic grid, all still to do</p>
              </div>
            </div>
          </section>

          {/* Feature 2: Progress states — full-bleed image strip */}
          <section className="mb-32 -mx-6 md:-mx-12 lg:-mx-24">
            <div className="px-6 md:px-12 lg:px-24 mb-12">
              <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 02</div>
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                    Progress states and the planning journey
                  </h2>
                  <p className="text-slate-700 text-lg leading-relaxed mb-5">
                    Each topic cell carries a visible state — untouched, in preparation, or complete — giving users a constant sense of where they stand across their whole financial picture.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    As users work through topics one by one, the hexagon grid fills with colour. The visual rhythm of completion becomes its own motivation to continue.
                  </p>
                </div>
                <div>
                  <p className="text-slate-700 text-lg leading-relaxed mb-5">
                    The sequence below shows the plan progressing from a blank slate to fully in-preparation — each hexagon lighting up as the user advances.
                  </p>
                  <p className="text-slate-700 text-lg leading-relaxed">
                    The CTA updates dynamically too: "Start financial check" becomes "Check next topic" as momentum builds.
                  </p>
                </div>
              </div>
            </div>

            {/* Scrollable phone strip */}
            <div className="relative bg-gradient-to-r from-blue-50 via-slate-50 to-blue-50 py-12 overflow-x-auto">
              <div className="flex gap-6 px-6 md:px-12 lg:px-24 w-max">
                {[screen1, screen2, screen3, screen4, screen5].map((src, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-200/20 rounded-2xl blur-xl scale-95" />
                      <img
                        src={src}
                        alt={`Progress state ${i + 1}`}
                        className="relative w-[200px] drop-shadow-lg"
                      />
                    </div>
                    <span className="text-slate-400 text-xs">Step {i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature 3: Expert connection & completion */}
          <section className="mb-32">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 03</div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  Integrated expert guidance and yearly reviews
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Completing the plan isn't an end state — it's a recurring loop. Once all topics are reviewed, the app surfaces the next appointment and flags areas that need attention.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  This keeps users connected to Caveo's consultants naturally, turning what used to require a cold outreach into a warm, product-initiated touchpoint.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 items-end">
                {[
                  { src: screen6, label: "Appointment surfaced" },
                  { src: screen7, label: "Plan created" },
                  { src: screen8, label: "Review flagged" },
                ].map(({ src, label }) => (
                  <div key={label} className="flex flex-col items-center gap-3">
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-200/20 rounded-2xl blur-xl scale-95" />
                      <img
                        src={src}
                        alt={label}
                        className="relative w-full drop-shadow-lg"
                      />
                    </div>
                    <span className="text-slate-500 text-xs text-center">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Feature 4: Lightweight self-assessments + actionable tasks */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 04</div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-blue-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-slate-900 mb-1">Self-assessments</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Quick evaluations per topic</p>
                  </div>
                  <div className="bg-white border border-blue-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-slate-900 mb-1">Actionable tasks</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Clear next steps per area</p>
                  </div>
                  <div className="bg-white border border-blue-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-slate-900 mb-1">Yearly reviews</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Ongoing re-engagement loop</p>
                  </div>
                  <div className="bg-white border border-blue-200 p-5 rounded-xl hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 bg-blue-800 rounded-lg flex items-center justify-center mb-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-slate-900 mb-1">Hexagon design system</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Scalable visual language</p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  A system built for return visits
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Each topic contains a lightweight self-assessment and a short list of financial tasks. Users don't need a full session — they can complete one topic in a few minutes and come back for the next.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  The hexagon design system scales with the product: new topics can be added without breaking the structure, and the visual language remains consistent across assessment states, task lists and expert-facing views.
                </p>
              </div>
            </div>
          </section>

          {/* Closing Statement */}
          <section className="mb-24">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-12 md:p-16">
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-center">
                By reframing the app around life decisions instead of internal services, Caveo became easier to understand, more engaging to return to and better aligned with the company's broader ambitions.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-20">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-12 md:p-16 text-center">
              <h3 className="text-3xl text-slate-900 mb-4">Want the full case study?</h3>
              <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                The complete PDF includes product strategy, UX hypotheses, user journeys, design systems and detailed interface decisions across the Caveo redesign.
              </p>
              <a
                href="/case-studies/caveo-case-study-sample.pdf"
                download
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/25 text-sm tracking-wide uppercase"
              >
                <Download className="w-4 h-4" />
                Download Full Case Study
              </a>
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
