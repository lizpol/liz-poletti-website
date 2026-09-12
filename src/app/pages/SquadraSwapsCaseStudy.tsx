import { Link, Navigate, useParams } from "react-router";
import Navigation from "../components/Navigation";
import BrowserFrame from "../components/BrowserFrame";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";

import swapRules from "../../imports/Shift-swap-rules.png";
import managerReview from "../../imports/Manager-review-1.png";
import swapReal from "../../imports/Swap-real.png";
import applicationEligibility from "../../imports/Application-eligibility.png";
import offer from "../../imports/Offer.png";

const projectOrder = ["squadra-checklists", "squadra-swaps", "caveo", "nvoye", "foster"];

export default function SquadraSwapsCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId !== "squadra-swaps") {
    return <Navigate to="/" replace />;
  }

  const currentIndex = projectOrder.indexOf("squadra-swaps");
  const previousProjectId = projectOrder[currentIndex - 1];
  const nextProjectId = projectOrder[currentIndex + 1];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">

          <Breadcrumb items={[
            { label: "Works", href: "/#projects" },
            { label: "Squadra", href: "/work/squadra" },
            { label: "Shift Swaps" },
          ]} />

          {/* Hero */}
          <div className="mb-16">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE CASE STUDY · ADD-ON</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 leading-tight tracking-tight max-w-4xl">
              Shift Swaps on Squadra
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
              Replacing informal WhatsApp swap requests with a structured, rule-based system — so the right person always covers the shift.
            </p>
            <a
              href="/case-studies/squadra-swaps.pdf"
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
                  Squadra schedules shifts.<br />But swaps happened outside it.
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Squadra already handled who worked when — but when a worker couldn't make their shift, the whole process fell out of the platform. Requests went to WhatsApp, managers scrambled to find cover, and the schedule got updated manually after the fact.
                </p>
              </div>
              <div className="pt-2">
                <p className="text-slate-600 text-lg leading-relaxed mb-5">
                  Shift Swaps was designed as an add-on to bring that entire loop back inside Squadra — with configurable rules, eligibility filtering, and a manager approval layer that keeps the schedule accurate automatically.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  I owned the feature from research and framing through UX, UI and handoff.
                </p>
              </div>
            </div>
          </section>

          {/* Opening product shot — full desktop view */}
          <div className="mb-24">
            <img
              src={swapReal}
              alt="Squadra Shift Swaps — desktop management view with swap request modal"
              className="w-full drop-shadow-xl"
            />
            <p className="text-slate-500 text-sm text-center mt-4">
              Swap management view — managers see all pending requests and review applicants in a single modal
            </p>
          </div>

          {/* ── PROBLEM ── */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">THE PROBLEM</div>
            <h2 className="text-3xl md:text-4xl text-slate-900 mb-10 leading-tight max-w-2xl">
              Informal swaps created three compounding problems
            </h2>
            <div className="grid md:grid-cols-3 gap-5 mb-10">
              {[
                {
                  n: "01",
                  heading: "No eligibility check",
                  body: "When a manager got a swap request, they had to manually verify whether the replacement had the right skills, job title, and availability — from memory or by checking separate systems."
                },
                {
                  n: "02",
                  heading: "No audit trail",
                  body: "Swap requests happened over text. There was no record of who asked, who agreed, and when — making disputes and payroll corrections difficult to resolve."
                },
                {
                  n: "03",
                  heading: "Manual schedule updates",
                  body: "Once a swap was agreed, the manager had to manually update the schedule. If they forgot, the original assignment stayed — creating ghost shifts and coverage gaps."
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
                <span className="font-medium">The core tension:</span> managers needed control over who covered a shift, but workers needed autonomy to arrange swaps without waiting on a reply. The design had to give both sides what they needed — without creating more admin for the manager.
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
                  Early exploration made clear that the problem had two layers. For workers, the friction was in finding and reaching potential replacements. For managers, the friction was in verifying that a replacement was actually suitable before approving.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  A solution that only handled one side would create new problems on the other. The design had to close the full loop.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Rules set once by the manager, not re-checked every time",
                  "Workers can initiate swaps without manager involvement until approval",
                  "Applicant eligibility surfaced automatically — skills, job title, workload",
                  "Manager approves with full context, schedule updates without extra steps",
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
              A four-step loop: configure, offer, apply, assign
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl mb-16">
              The system was designed so that managers do the thinking upfront — and then the platform handles eligibility filtering automatically every time a swap is requested.
            </p>
          </section>

          {/* Step 1 — Configure rules */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 01 — CONFIGURE</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Managers set the rules once
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Before any swap can happen, managers configure three things: who is eligible to apply (all available employees, only matching job titles, or only matching skills), the minimum notice period, and the auto-deny deadline.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  This shifts the eligibility work from the moment of each request — where it's reactive and manual — to a one-time setup. Every subsequent swap request filters against these rules automatically.
                </p>
              </div>
              <BrowserFrame
                src={swapRules}
                alt="Shift swap rules — eligibility, notice period, auto-deny deadline"
                url="app.squadra.io/settings/swap-rules"
              />
            </div>
          </section>

          {/* Step 2 — Offer */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center order-2 md:order-1">
                <img
                  src={offer}
                  alt="Create shift swap offer and your swap offers list — mobile"
                  className="w-full max-w-sm drop-shadow-xl"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 02 — OFFER</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Workers post a swap offer from mobile
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  A worker who needs cover selects the shift they want to swap and writes a short message. That's it — the offer is posted to the shift marketplace and becomes visible to eligible colleagues.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  The swap list shows the status of all their active offers — Under review, Approved, Denied — so workers always know where things stand without chasing the manager.
                </p>
              </div>
            </div>
          </section>

          {/* Step 3 — Apply */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 03 — APPLY</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Eligible colleagues apply through the shift marketplace
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The shift marketplace surfaces swap offers that are relevant to each worker — filtered by their skills, job title, and the manager's rules. Workers see only opportunities they're actually eligible for.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Skill and qualification badges are shown alongside each offer, so workers understand immediately why they're seeing it and what they'd be taking on.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src={applicationEligibility}
                  alt="Shift marketplace — eligible workers apply with skill badges shown"
                  className="w-full max-w-sm drop-shadow-xl"
                />
              </div>
            </div>
          </section>

          {/* Step 4 — Review & assign */}
          <section className="mb-24">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <BrowserFrame
                src={managerReview}
                alt="Swap request review — current assignee vs applicants with workload and skill flags"
                url="app.squadra.io/swaps/review"
              />
              <div>
                <div className="inline-block text-blue-800 text-xs tracking-widest border border-blue-200 rounded-full px-3 py-1 mb-5">STEP 04 — REVIEW & ASSIGN</div>
                <h3 className="text-2xl md:text-3xl text-slate-900 mb-4 leading-tight">
                  Managers assign with full context
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  The manager review screen shows the current assignee alongside all applicants. Each applicant card surfaces workload percentage, hours above or below target, and rest days taken — so the decision is informed, not instinctive.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Applicants who don't meet the rules — wrong job title, missing skills — are shown with a clear flag rather than hidden, so managers understand the full picture. Assigning a replacement updates the schedule automatically.
                </p>
              </div>
            </div>
          </section>

          {/* ── OUTCOME ── */}
          <section className="mb-20">
            <div className="bg-gradient-to-br from-[#201E50] to-[#2d2a6e] text-white rounded-2xl p-12 md:p-16">
              <div className="text-white/50 text-xs tracking-widest mb-6 text-center">OUTCOME</div>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-center mb-10">
                Shift Swaps brought the entire replacement loop inside Squadra — workers post offers autonomously, eligibility is enforced automatically, and managers approve with confidence. The schedule stays accurate without anyone doing it manually.
              </p>
              <div className="flex justify-center">
                <a
                  href="/case-studies/squadra-swaps.pdf"
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
