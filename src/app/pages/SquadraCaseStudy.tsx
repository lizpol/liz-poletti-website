import { Link, Navigate, useParams } from "react-router";
import { ArrowRight } from "lucide-react";
import Navigation from "../components/Navigation";
import Breadcrumb from "../components/Breadcrumb";

import heroImg from "../../imports/Squadra-Hero-image-EN.png";
import desktopImg from "../../imports/squadra-desktop.png";
import tabletImg from "../../imports/squadra-tablet.png";
import mobileImg from "../../imports/squadra-mobile.png";
import checklistsImg from "../../imports/squadra-checklists-preview-v2.png";
import swapsImg from "../../imports/squadra-swaps-preview-v2.png";

const caseStudies = [
  {
    title: "Daily Checklists",
    description: "From setting up recurring tasks to completing them on shift.",
    image: checklistsImg,
    href: "/work/squadra-checklists",
  },
  {
    title: "Shift Swaps",
    description: "More flexibility for employees, with clear rules and manager oversight.",
    image: swapsImg,
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

            <div className="rounded-3xl bg-[#f3f2f8] px-4 pt-6 md:px-12 md:pt-10 overflow-hidden mb-10">
              <img src={heroImg} alt="Squadra workforce management across desktop, tablet and mobile" className="w-full h-auto" fetchPriority="high" />
            </div>

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-b border-slate-200 pb-8">
              {[
                { label: "Role", value: "Product Designer · UX/UI & UX Writing" },
                { label: "Team", value: "Founders, product & engineering" },
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
                Squadra is a workforce management platform for restaurants, clinics and hospitality businesses. It brings scheduling, time tracking and team operations together across desktop, shared tablets and an employee app.
              </p>
              <p>
                I joined as a product designer when the platform was already part of teams’ daily routines. Working closely with founders, product and engineering, I spent more than two years improving existing workflows and shaping new features as the business grew.
              </p>
              <p>
                My work spanned discovery, user flows, UI, UX writing and implementation support — from rethinking scheduling to introducing checklists and shift swaps. Customer feedback guided the larger projects and the small, everyday refinements alike.
              </p>
            </div>
          </section>

          <section aria-labelledby="desktop-title" className="pb-20 md:pb-28">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 mb-10">
              <div>
                <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">Desktop</p>
                <h2 id="desktop-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">The bigger picture</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed md:pt-8">
                I redesigned planning, shift editing and publishing, and worked across time tracking, employee management and reporting. The focus was on helping managers make sense of busy schedules and handle everyday decisions more easily.
              </p>
            </div>
            <div className="rounded-3xl bg-[#f5f5f7] p-5 md:p-12">
              <img src={desktopImg} alt="Squadra desktop dashboard showing today's shifts, manager approvals and upcoming schedules" width={2400} height={1897} loading="lazy" className="w-full h-auto" />
            </div>
          </section>

          <section aria-labelledby="tablet-title" className="pb-20 md:pb-28">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-6 md:gap-16 mb-10">
              <div>
                <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">Tablet</p>
                <h2 id="tablet-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">Right where work happens</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed md:pt-8">
                On shared workplace tablets, I designed flows for time tracking and daily tasks. From checking who’s on shift to completing a checklist, the experience needed to be clear and quick to use in the middle of a working day.
              </p>
            </div>
            <div className="rounded-3xl bg-[#f3f2f8] p-5 md:p-12">
              <img src={tabletImg} alt="Squadra shared tablet showing team members and their time tracking sessions" width={2000} height={1540} loading="lazy" className="w-full h-auto" />
            </div>
          </section>

          <section aria-labelledby="app-title" className="grid md:grid-cols-2 gap-10 md:gap-20 items-center pb-20 md:pb-28">
            <div>
              <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">Mobile app</p>
              <h2 id="app-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight mb-6">A working day, in your pocket</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                I shaped the employee experience around schedules, availability, messages and shift management. From finding the next shift to requesting a swap, I worked to make everyday actions easy to find and follow through.
              </p>
            </div>
            <div className="rounded-3xl bg-[#f5f5f7] p-6 md:p-10 flex justify-center">
              <img src={mobileImg} alt="Squadra mobile app home screen with an upcoming shift, tasks and open shifts" width={780} height={1400} loading="lazy" className="w-full max-w-[300px] h-auto" />
            </div>
          </section>
        </div>

        <section aria-labelledby="case-studies-title" className="bg-slate-50 py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs tracking-widest uppercase text-slate-500 mb-4">A closer look</p>
            <h2 id="case-studies-title" className="text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">Two features, from the inside</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-10">Explore the thinking and design decisions behind two additions to the Squadra ecosystem.</p>
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map(({ title, description, image, href }) => (
                <Link key={href} to={href} className="group rounded-2xl overflow-hidden bg-white border border-slate-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#201E50]">
                  <img src={image} alt={`${title} product preview`} loading="lazy" className="w-full aspect-[16/10] object-cover" />
                  <div className="p-6 md:p-8">
                    <h3 className="text-xl text-slate-900 mb-3">{title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#201E50] group-hover:underline underline-offset-4">
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
            <a href="mailto:polettilaiza@gmail.com" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">Email</a>
            <a href="https://www.linkedin.com/in/laiza-poletti" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900 text-sm transition-colors">LinkedIn</a>
          </div>
          <p className="text-slate-600 text-sm">© 2026 — Available for freelance work</p>
        </div>
      </footer>
    </div>
  );
}
