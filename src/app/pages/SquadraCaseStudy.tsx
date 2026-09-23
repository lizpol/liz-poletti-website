import { Link, Navigate, useParams } from "react-router";
import { ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Breadcrumb from "../components/Breadcrumb";
import "../../styles/squadra-story.css";

import heroImg from "../../imports/squadra-three-devices.png";
import desktopImg from "../../imports/squadra-desktop.png";
import tabletImg from "../../imports/squadra-tablet.png";
import mobileImg from "../../imports/squadra-mobile.png";
import ChecklistCover from "../components/ChecklistCover";
import SwapsCover from "../components/SwapsCover";

const sectionCopyClass = "squadra-story-copy";

const caseStudies = [
  {
    title: "Shift Checklists",
    description: "From setting up recurring tasks to completing them on shift.",
    Cover: ChecklistCover,
    href: "/work/squadra-checklists",
  },
  {
    title: "Shift Swaps",
    description: "More flexibility for employees, with clear rules and manager oversight.",
    Cover: SwapsCover,
    href: "/work/squadra-swaps",
  },
];

export default function SquadraCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId !== "squadra") {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-32">
          <Breadcrumb items={[
            { label: "Works", href: "/#projects" },
            { label: "Squadra" },
          ]} />

          <header className="pt-6 pb-16 md:pb-24">
            <p className="text-[#201E50] text-xs tracking-widest uppercase mb-5">Squadra · Product design</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.08] tracking-tight max-w-4xl mb-6">
              One product.<br />Many ways to work.
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mb-10">
              Designing the everyday tools that help businesses plan shifts, manage their teams and keep work moving.
            </p>

            <div className="mb-10">
              <img src={heroImg} alt="Squadra workforce management across desktop, tablet and mobile" className="w-full h-auto" loading="eager" />
            </div>

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-b border-slate-200 pb-8">
              {[
                { label: "Role", value: "UX/UI Designer & UX Writer" },
                { label: "Team", value: "2 Founders, 1 designer, 5 developers, 1 customer service representative" },
                { label: "Timeline", value: "2+ years of continuous collaboration" },
                { label: "Scope", value: "Desktop, tablet & mobile app" },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt className="text-xs tracking-widest uppercase text-slate-500 mb-2">{label}</dt>
                  <dd className="text-sm text-slate-800 leading-relaxed">{value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <section aria-labelledby="evolving-title" className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 pb-20 md:pb-28">
            <h2 id="evolving-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Growing with the product
            </h2>
            <div className="text-lg text-slate-600 leading-relaxed space-y-5">
              <p>
                Squadra is a workforce management ecosystem for any business that works in shifts. It connects the tools managers use to plan, oversee and manage operations with the tools employees use to organise their working lives, across desktop, shared tablets and mobile.
              </p>
              <p>
                I joined an established product and spent more than two years working across both sides of it. Customer feedback helped us identify where flows needed improvement. My work was to make complex rules, connected workflows and large amounts of data easier to understand and act on.
              </p>
              <p>
                Alongside those improvements, I designed new features from scratch, from early flows through UI, UX writing and implementation support. Some extended existing capabilities; others became add-ons, essentially small products within the product. Checklists and Shift Swaps are two of these, explored in{" "}
                <a href="#dedicated-case-studies" className="text-[#5275aa] font-bold no-underline hover:text-blue-800 focus-visible:outline-2 focus-visible:outline-offset-4">the dedicated case studies</a>.
              </p>
            </div>
          </section>

          <section aria-labelledby="desktop-title" className="squadra-device-section">
            <header className="squadra-device-heading">
                <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">Desktop</p>
                <h2 id="desktop-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">The bigger picture</h2>
              <p className="squadra-device-summary">A new dashboard and connected workflows for planning, people and payroll.</p>
            </header>
            <div className="squadra-device-grid">
              <figure className="squadra-device-visual">
                <img src={desktopImg} alt="Squadra desktop dashboard showing today's shifts, manager approvals and upcoming schedules" width={2400} height={1897} loading="lazy" className="w-full h-auto" />
                <figcaption>Desktop dashboard · Daily operations at a glance</figcaption>
              </figure>
              <div className={sectionCopyClass}>
                <h3>Designing an interconnected system</h3>
                  <p>I worked across most of Squadra’s desktop product, designing and evolving features for planning, staffing, employee management, contracts, time tracking, payroll, reporting and business administration. Some were entirely new features; others extended existing workflows as the product and its underlying rules grew more complex.</p>
                  <p>For example, I designed <strong>a whole new dashboard</strong>, bringing together a live overview of the shifts of the day, an at-a-glance view of the upcoming week, and a shifts coverability estimate for future months. Alongside a list of pending tasks, this gave managers a comprehensive grasp of their operations, allowing them to spot potential issues early.</p>
                  <p>Overall, I worked <strong>across the Squadra system</strong> rather than within one isolated area. New features often touched existing rules and workflows. For example, contracts determined when employees could work. Planned shifts connected to time tracking. Tracked hours fed into salaries. Staffing decisions depended on availability, qualifications and working time rules.</p>
                  <p>A large part of my work involved <strong>understanding these dependencies</strong> before designing the interface. I mapped flows, worked through states and edge cases, and found ways to add new functionality without making an already capable product harder to use.</p>

                  <h3>Making complex decisions easier</h3>
                  <p>Many of the workflows I designed required managers to understand a situation and <strong>make a decision</strong>.</p>
                  <p>For example, for salary exports, I designed a flow that surfaced <strong>missing data and salary conflicts</strong> before export. In another example, bulk contract creation, I worked through overlapping dates and existing contracts to define when Squadra should create, replace, or split a contract.</p>
                  <p>The interface came after defining what could happen, <strong>what needed attention</strong> and what the user needed to do next.</p>

                  <h3>Evolving a live product</h3>
                  <p>Most of my work happened inside a product that people already used every day. Rather than redesigning Squadra from scratch, I worked with existing patterns, technical constraints and established behaviour while <strong>keeping the system coherent</strong> as it grew.</p>
                  <p>I worked closely with the development team from early requirements and rough flows through <strong>detailed UI, handoff and QA</strong>.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="app-title" className="squadra-device-section">
            <header className="squadra-device-heading">
              <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">Mobile app</p>
              <h2 id="app-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">A working day, in your pocket</h2>
              <p className="squadra-device-summary">A full mobile redesign, clearer navigation and key actions within reach.</p>
            </header>
            <div className="squadra-device-grid">
              <figure className="squadra-device-visual">
                <img src={mobileImg} alt="Squadra mobile app home screen with an upcoming shift, tasks and open shifts" width={780} height={1400} loading="lazy" className="w-full max-w-[280px] h-auto mx-auto" />
                <figcaption>Mobile app · The employee’s working day</figcaption>
              </figure>
              <div className={sectionCopyClass}>
                <h3>Redesigning the employee experience</h3>
                  <p>Alongside individual features, I worked on a <strong>full mobile app redesign</strong>. I reworked the <strong>information architecture</strong> around what employees needed to find and do throughout their working day.</p>
                  <p>I introduced a <strong>floating button for key actions</strong> and brought the information employees needed to the foreground, making frequent tasks easier to find and start.</p>
                  <p>Here I focused on <strong>the employee experience</strong> around schedules, availability, open shifts, messages and changes to planned work.</p>
                  <p>Many seemingly simple employee actions depended on more complex rules set elsewhere in Squadra. I decided which information employees actually needed and translated the underlying logic into <strong>focused flows</strong> with clear actions, statuses and feedback.</p>
                  <p>The goal was not to expose how the system worked. It was to give employees <strong>the right information</strong> at the moment they needed it.</p>

                  <h3>Keeping people informed when plans change</h3>
                  <p>Keeping the experience simple also meant helping employees navigate changes to their working day. For example, with <Link to="/work/squadra-swaps" className="text-[#5275aa] font-bold no-underline hover:text-blue-900 focus-visible:outline-2 focus-visible:outline-offset-4">Shift swaps</Link>, a seemingly straightforward request could involve several applicants, <strong>eligibility rules and manager review</strong>, changing circumstances and notifications across several people.</p>
                  <p>I worked through <strong>each stage of the process</strong>, including what happened when eligibility changed after someone had applied, when users needed to reconfirm, and how employees and managers stayed informed throughout.</p>
                  <p>The resulting experience kept much of that complexity behind <strong>a relatively simple employee flow</strong>.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="tablet-title" className="squadra-device-section">
            <header className="squadra-device-heading">
              <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">Tablet</p>
              <h2 id="tablet-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">Right where work happens</h2>
              <p className="squadra-device-summary">Shared workplace tools for tracking time and coordinating daily work.</p>
            </header>
            <div className="squadra-device-grid">
              <figure className="squadra-device-visual">
                <img src={tabletImg} alt="Squadra shared tablet showing team members and their time tracking sessions" width={2000} height={1540} loading="lazy" className="w-full h-auto" />
                <figcaption>Shared tablet · Time tracking on site</figcaption>
              </figure>
              <div className={sectionCopyClass}>
                <h3>Designing for a shared workplace</h3>
                <p>Squadra’s tablet app was a way for employees to clock in and out, track time and complete tasks on a shared device at the workplace. I worked across the experience, designing and evolving features for <strong>time tracking, daily tasks and other interactions employees needed during their shifts</strong>.</p>
                <p>The context shaped the design. People often interacted with the tablet briefly, while actively working, so I focused on making frequent actions quick to reach, states easy to understand and flows simple to complete on a shared touchscreen.</p>

                <h3>Adding depth without adding friction</h3>
                <p>As Squadra grew, even frequent actions like time tracking needed to accommodate more operational detail. <strong>One example was work type tracking</strong>, which I designed to let employees record not only when they worked and what shift they were on, but what they worked on more specifically throughout the shift.</p>
                <p>I designed how employees could start and switch work types during an active session, how the current activity was communicated, and incorporated this additional layer without adding friction to everyday time tracking.</p>

                <h3>Letting research challenge the solution</h3>
                <p>One of the features I designed was the Checklists add-on, a way for managers to define tasks which employees could work through during a shift. <strong>Checklists was one example where research significantly changed our initial direction.</strong></p>
                <p>We initially explored connecting tasks more closely to individual shifts. Research showed that teams often approached this work collectively, with responsibility sitting across the day rather than with one employee. We adjusted the product model accordingly and designed shared daily checklists around that behaviour.</p>
              </div>
            </div>
          </section>
        </div>

        <section id="dedicated-case-studies" aria-labelledby="case-studies-title" className="scroll-mt-24 bg-slate-50 py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">A closer look</p>
            <h2 id="case-studies-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">Two features, from the inside</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">Explore the thinking and design decisions behind two additions to the Squadra ecosystem.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map(({ title, description, Cover, href }) => (
                <Link key={href} to={href} className="project-link group rounded-2xl overflow-hidden bg-white border border-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#201E50]">
                  <div className="w-full h-[clamp(240px,25vw,320px)] overflow-hidden bg-[#ede9fe]">
                    <Cover />
                  </div>
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl text-slate-900 mb-3">{title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-bold text-[#5275aa]">
                      Read the case study <ArrowRight aria-hidden="true" className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 md:px-12 py-12 border-t border-blue-200 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="mailto:polettilaiza@gmail.com" className="text-[#5275aa] font-bold no-underline hover:text-blue-900 text-sm transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/laiza-poletti" target="_blank" rel="noopener noreferrer" className="text-[#5275aa] font-bold no-underline hover:text-blue-900 text-sm transition-colors">LinkedIn</a>
          </div>
          <p className="text-slate-600 text-sm">© 2026 Laiza Poletti</p>
        </div>
      </footer>
    </div>
  );
}
