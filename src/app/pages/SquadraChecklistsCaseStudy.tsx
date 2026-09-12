import { Link, Navigate, useParams } from "react-router";
import Navigation from "../components/Navigation";
import BrowserFrame from "../components/BrowserFrame";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

const projectOrder = ["squadra-checklists", "squadra-swaps", "caveo", "nvoye", "foster"];

import tabletView from "../../imports/Tablet.png";
import checklistTemplate from "../../imports/Checklist-template.png";
import newShift from "../../imports/New-shift.png";
import mobileTasks from "../../imports/Mobile-tasks.png";
import managerReview from "../../imports/Manager-review.png";

export default function SquadraChecklistsCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId !== "squadra-checklists") {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projectOrder.indexOf("squadra-checklists");
  const previousProjectId = projectOrder[projectOrder.length - 1]; // wraps to foster
  const nextProjectId = projectOrder[currentIndex + 1];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">

          <Breadcrumb items={[
            { label: "Works", href: "/#projects" },
            { label: "Squadra", href: "/work/squadra" },
            { label: "Checklists" },
          ]} />

          {/* Hero */}
          <div className="mb-16">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE CASE STUDY · ADD-ON</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight tracking-tight max-w-4xl">
              Checklists on Squadra
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
              Bringing structured, trackable task management directly into the shift — so nothing is left to memory, WhatsApp, or hope.
            </p>
            <a
              href="/case-studies/squadra-checklists.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/25 text-sm tracking-wide uppercase"
            >
              <Download className="w-4 h-4" />
              Download Full Case Study
            </a>
          </div>

          {/* Meta strip */}
          <div className="flex flex-wrap gap-x-12 gap-y-4 py-8 mb-20 border-y border-blue-200">
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-1">ROLE</div>
              <p className="text-slate-700 text-sm">UX/UI Designer & UX Writer</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-1">PLATFORM</div>
              <p className="text-slate-700 text-sm">Web & Mobile</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-1">TYPE</div>
              <p className="text-slate-700 text-sm">Add-on feature, Squadra</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-1">TEAM</div>
              <p className="text-slate-700 text-sm">Design lead · 1 PM · 3 Engineers · 1 Founder</p>
            </div>
          </div>

          {/* ── CONTEXT ── */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">CONTEXT</div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-5 leading-tight">
                  Squadra manages shifts.<br />But not what happens inside them.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Squadra is a workforce management platform for restaurants, clinics and hospitality businesses. It handles scheduling, open shifts, staffing forecasts and invoicing — but at the time, had no way to define or track what workers were supposed to do during a shift.
                </p>
              </div>
              <div className="pt-2">
                <p className="text-slate-600 text-lg leading-relaxed mb-5">
                  Checklists was designed as an add-on feature to close that gap: a lightweight task layer that sits inside the shift, giving managers structure and workers clarity.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  I owned the feature end-to-end — from research and framing through UX, UI and handoff.
                </p>
              </div>
            </div>
          </section>

          {/* Opening product shot */}
          <div className="mb-24">
            <BrowserFrame
              src={tabletView}
              alt="Squadra daily tasks view — opening and closing shift task progress"
              url="app.squadra.io/tasks"
            />
            <p className="text-slate-500 text-sm text-center mt-4">
              Daily tasks view — managers see shift task completion across all employees at a glance
            </p>
          </div>

          {/* ── PROBLEM ── */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">THE PROBLEM</div>
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
              Shift tasks were invisible to the platform
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  n: "01",
                  heading: "No shared record",
                  body: "Instructions lived in WhatsApp threads, verbal handovers, or paper notes. Nothing was attached to the shift itself."
                },
                {
                  n: "02",
                  heading: "No accountability",
                  body: "Managers had no way to know whether tasks had been completed, skipped, or done incorrectly without physically checking."
                },
                {
                  n: "03",
                  heading: "No consistency",
                  body: "Every manager communicated differently. Opening routines varied by person, day, and who happened to be working."
                }
              ].map(({ n, heading, body }) => (
                <div key={n} className="bg-white border border-blue-200 rounded-xl p-6">
                  <div className="text-blue-800/40 text-xs tracking-widest mb-3">{n}</div>
                  <h4 className="text-slate-900 font-medium mb-2">{heading}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-800 px-6 py-5 rounded-r-xl max-w-3xl">
              <p className="text-slate-700 leading-relaxed">
                <span className="font-medium">The core tension:</span> managers needed oversight without micromanagement, and workers needed guidance without friction. The feature had to serve both — without adding complexity to either side.
              </p>
            </div>
          </section>

          {/* ── EXPLORATION ── */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">EXPLORATION</div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-5 leading-tight">
                  What the right solution had to do
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-5">
                  Early conversations with managers surfaced a consistent pattern: the problem wasn't that they lacked tools — it was that every tool they tried lived outside the shift context. Workers would check Squadra for their schedule, then look elsewhere for what to do. The gap was structural.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  The solution had to live inside the shift — not alongside it.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Reusable templates — write once, assign to any shift",
                  "Tasks accessible on the same device workers already use for scheduling",
                  "Evidence of completion — not just a tick, but a record",
                  "Manager review without interrupting the shift itself",
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-4 bg-white border border-blue-200 rounded-xl px-5 py-4">
                    <div className="w-5 h-5 rounded-full bg-[#201E50] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── SOLUTION ── */}
          <section className="mb-6">
            <div className="text-blue-800 text-xs tracking-widest mb-6">THE SOLUTION</div>
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-4 leading-tight max-w-2xl">
              A four-step loop: build, assign, execute, review
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mb-16">
              The feature was designed as a closed loop — each step handing off naturally to the next, with no orphaned information.
            </p>
          </section>

          {/* Step 1 */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 01 — BUILD</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Managers build reusable templates
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Each template is a named list of tasks. Any task can carry a description, photos, file attachments — giving workers all the context they need, directly in the task.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Templates are saved once and reused across any number of shifts — an opening routine built once works every day, automatically.
                </p>
              </div>
              <BrowserFrame
                src={checklistTemplate}
                alt="Checklist template editor — tasks with descriptions and attachments"
                url="app.squadra.io/checklists/new"
              />
            </div>
          </section>

          {/* Step 2 */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#201E50]/5 rounded-3xl blur-3xl scale-110" />
                  <img
                    src={newShift}
                    alt="New shift creation — Add checklists section"
                    className="relative w-full max-w-xs drop-shadow-2xl"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 02 — ASSIGN</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Templates attach when the shift is created
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  When a manager creates a shift, they pick which checklists apply. Multiple templates can be added in one step — opening tasks, closing tasks, weekly maintenance — all assigned before the shift starts.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Assigning checklists is part of the shift creation flow, not a separate action. The structure is in place before the worker even arrives.
                </p>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 03 — EXECUTE</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Workers complete tasks on mobile, with evidence
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  During their shift, workers see a task list with a live progress counter. Each task shows the description and any attachments set by the manager — no need to look elsewhere.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Workers can add a note or photo when marking a task done. This becomes the evidence layer — a record of what was done, by whom, and how.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={mobileTasks}
                  alt="Mobile task list — progress counter and task detail with mark as complete"
                  className="w-full max-w-md drop-shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <BrowserFrame
                src={managerReview}
                alt="Manager checklist review — task completion, who did what, notes and media"
                url="app.squadra.io/checklists/review"
              />
              <div>
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 04 — REVIEW</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Managers review after the shift — not during it
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  After the shift closes, managers see the full submission: who completed each task, at what time, with any notes or photos attached. Incomplete tasks are flagged clearly.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Managers can add their own comment, visible in context next to the relevant task. Oversight happens asynchronously — without interrupting the shift or the worker.
                </p>
              </div>
            </div>
          </section>

          {/* ── OUTCOME ── */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#201E50] to-[#2d2a6e] text-white rounded-2xl p-12 md:p-16">
              <div className="text-white/50 text-xs tracking-widest mb-6 text-center">OUTCOME</div>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-center mb-10">
                Checklists gave Squadra a missing layer: the shift itself now has a defined structure, a live record, and a review trail — without adding complexity for either managers or workers.
              </p>
              <div className="flex justify-center">
                <a
                  href="/case-studies/squadra-checklists.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#201E50] rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg text-sm tracking-wide uppercase font-medium"
                >
                  <Download className="w-4 h-4" />
                  Download Full Case Study
                </a>
              </div>
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
            <a href="mailto:polettilaiza@gmail.com" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/laiza-poletti" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">LinkedIn</a>
          </div>
          <p className="text-slate-600 text-sm">© 2026 — Available for freelance work</p>
        </div>
      </footer>
    </div>
  );
}
