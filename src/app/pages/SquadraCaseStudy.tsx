import { Link, Navigate, useParams } from "react-router";
import Navigation from "../components/Navigation";
import Breadcrumb from "../components/Breadcrumb";
import { ArrowRight, Calendar, RefreshCw, Users, Monitor, Tablet, Smartphone, FileText, BarChart2, PenTool, Layers, Zap, Clock, UserCheck, MessageSquare } from "lucide-react";

import heroImg from "../../imports/Squadra-Hero-image-EN.png";
import tabletImg from "../../imports/Tablet.png";
import mobileImg from "../../imports/Mobile-tasks.png";
import swapRealImg from "../../imports/Swap-real.png";
import checklistTemplateImg from "../../imports/Checklist-template.png";
import newShiftImg from "../../imports/New-shift.png";
import managerReviewImg from "../../imports/Manager-review-1.png";
import checklistReviewImg from "../../imports/Manager-review.png";
import swapRulesImg from "../../imports/Shift-swap-rules.png";

export default function SquadraCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId !== "squadra") {
    return <Navigate to="/" replace />;
  }

  const timeline = [
    { year: "2023", label: "Joined Squadra", sub: "Onboarded into a live product used daily by businesses" },
    { label: "Improved existing workflows", sub: "Reducing friction across scheduling, time tracking and HR flows" },
    { label: "Scheduling redesign", sub: "Rebuilt planning, shift editing, assignment and publishing" },
    { label: "Time tracking improvements", sub: "Presence checks, breaks, supplements and payroll flows" },
    { label: "Employee management", sub: "Contracts, onboarding, absences and permissions" },
    { label: "Reports & Insights", sub: "Dashboards and workforce monitoring tools" },
    { label: "New Add-ons", sub: "Checklists, Shift Swaps and Files — products within the product", highlight: true },
    { label: "Ongoing iteration", sub: "Continuous UX improvements across all platforms" },
  ];

  // 3-col grid — rows auto-size to content, col-spans vary for puzzle feel
  // Row 1: Scheduling (2) + Mobile (1)
  // Row 2: Tablet (1) + Time Tracking (1) + Employees (1)
  // Row 3: UX Writing (1) + Design System (2)
  // Row 4: Reports (2) + Platform (1)
  const featureCards = [
    { icon: Calendar,   name: "Scheduling",           desc: "Redesigned planning workflows, shift editing, assignment tools, publishing and planner interactions.", img: newShiftImg,         imgFit: "object-cover object-top",    col: "col-span-1 md:col-span-2", imgH: "h-52" },
    { icon: Smartphone, name: "Mobile Experience",     desc: "Built employee-facing experiences for schedules, availability, messaging, notifications and shift management.", img: mobileImg, imgFit: "object-contain",             col: "col-span-1 md:col-span-1", imgH: "h-52" },
    { icon: Tablet,     name: "Tablet Experience",     desc: "Designed operational workflows for shared workplace devices used directly on site.",                  img: tabletImg,           imgFit: "object-cover object-top",    col: "col-span-1 md:col-span-1", imgH: "h-44" },
    { icon: Clock,      name: "Time Tracking",         desc: "Improved presence checks, tracked sessions, breaks, supplements and payroll-related workflows.",      img: swapRulesImg,        imgFit: "object-cover object-top",    col: "col-span-1 md:col-span-1", imgH: "h-44" },
    { icon: UserCheck,  name: "Employees",             desc: "Designed experiences for contracts, onboarding, absences, permissions and employee management.",      img: managerReviewImg,    imgFit: "object-cover object-top",    col: "col-span-1 md:col-span-1", imgH: "h-44" },
    { icon: PenTool,    name: "UX Writing",            desc: "Improved hundreds of labels, confirmations, empty states and interface messages to make the product easier to understand.", img: swapRealImg, imgFit: "object-cover object-top", col: "col-span-1 md:col-span-1", imgH: "h-44" },
    { icon: Layers,     name: "Design System",         desc: "Expanded reusable components, interaction patterns and visual consistency across the platform.",      img: checklistTemplateImg,imgFit: "object-cover object-top",    col: "col-span-1 md:col-span-2", imgH: "h-44" },
    { icon: BarChart2,  name: "Reports & Insights",    desc: "Created dashboards and reporting tools that help managers monitor workforce activity.",               img: checklistReviewImg,  imgFit: "object-cover object-top",    col: "col-span-1 md:col-span-2", imgH: "h-44" },
    { icon: Zap,        name: "Platform Improvements", desc: "Countless smaller usability improvements shipped continuously across the product — every release informed the next.", img: heroImg, imgFit: "object-cover object-center", col: "col-span-1 md:col-span-1", imgH: "h-44" },
  ];

  const stats = [
    { value: "2+", label: "Years shaping the product" },
    { value: "3", label: "Platforms designed" },
    { value: "50+", label: "Features delivered" },
    { value: "100s", label: "UX improvements" },
    { value: "1000s", label: "People using the product" },
  ];

  const process = ["Discover", "Understand", "Design", "Prototype", "Collaborate", "Build", "QA", "Iterate"];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Breadcrumb — sits above dark hero */}
      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-0 max-w-7xl mx-auto">
        <Breadcrumb items={[
          { label: "Works", href: "/#projects" },
          { label: "Squadra" },
        ]} />
      </div>

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#1a1840] to-[#201E50] pt-8 pb-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-[#5C80BC]/15 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white/70 text-xs tracking-widest mb-8">
            PRODUCT DESIGN · UX · UI · UX WRITING
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-[1.05] tracking-tight mb-8 max-w-4xl">
            Designing a workforce platform that evolved every week.
          </h1>

          {/* Lead */}
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-6">
            Squadra is a workforce management platform that helps businesses schedule employees, track time, manage operations and keep teams connected.
          </p>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            Over more than two years, I worked as the product designer across the entire ecosystem, partnering closely with founders and developers to continuously improve the experience across desktop, mobile and tablet.
          </p>

          {/* Info chips */}
          <div className="flex flex-wrap gap-4 mb-16">
            {[
              { label: "Role", value: "Product Designer" },
              { label: "Platforms", value: "Desktop · Mobile · Tablet" },
              { label: "Duration", value: "2+ years" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/8 border border-white/15 rounded-2xl px-6 py-4">
                <div className="text-white/40 text-xs tracking-widest mb-1">{label.toUpperCase()}</div>
                <div className="text-white text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image — bleeds out of section */}
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none z-10 translate-y-1/2" />
          <img
            src={heroImg}
            alt="Squadra across desktop, tablet and mobile"
            className="w-full drop-shadow-2xl relative"
          />
        </div>
      </section>

      {/* ── MY ROLE ── */}
      <section className="bg-slate-50 pt-24 pb-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#201E50] text-xs tracking-widest mb-10">MY ROLE</div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Monitor, title: "End-to-end Product Design", desc: "From discovery and user flows to polished UI, prototypes and implementation support." },
              { icon: RefreshCw, title: "Continuous Product Development", desc: "Improving an established product through hundreds of iterations, experiments and feature releases." },
              { icon: Users, title: "Cross-functional Collaboration", desc: "Working closely with founders, developers and customer feedback to shape the product over time." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#201E50]/8 flex items-center justify-center mb-6">
                  <Icon className="w-5 h-5 text-[#201E50]" />
                </div>
                <h3 className="text-slate-900 text-lg font-semibold mb-3 leading-snug">{title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHERE I JOINED ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#201E50] text-xs tracking-widest mb-6">WHERE I JOINED</div>
              <h2 className="text-3xl md:text-5xl text-slate-900 leading-tight mb-8 tracking-tight">
                Joining an evolving product
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                Rather than joining a greenfield startup, I joined a mature product already used by businesses every day.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed mb-5">
                My role wasn't to redesign everything from scratch. Instead, I worked continuously alongside stakeholders to identify friction, improve existing workflows and introduce entirely new capabilities as the platform evolved.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Over time, I became involved across nearly every part of the product — from scheduling and time tracking to contracts, reports, mobile experiences and entirely new add-ons.
              </p>
            </div>

            {/* Floating screenshots composition */}
            <div className="relative h-[480px] hidden md:block">
              <div className="absolute top-0 left-8 w-[62%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 rotate-[-2deg]">
                <img src={swapRealImg} alt="Squadra shift swaps" className="w-full" />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 rotate-[1.5deg]">
                <img src={checklistTemplateImg} alt="Squadra checklist template" className="w-full" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 rotate-[0deg] z-10">
                <img src={newShiftImg} alt="New shift creation" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCT EVOLUTION ── */}
      <section className="py-24 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
          <div className="text-white/40 text-xs tracking-widest mb-6">PRODUCT EVOLUTION</div>
          <h2 className="text-3xl md:text-5xl text-white leading-tight tracking-tight">
            Two years of continuous progress
          </h2>
        </div>

        {/* Horizontal scrolling timeline */}
        <div className="overflow-x-auto pb-8">
          <div className="flex items-start gap-0 px-6 md:px-12 lg:px-24 min-w-max">
            {timeline.map((item, i) => (
              <div key={i} className="flex items-start">
                <div className="flex flex-col items-center">
                  {/* Dot */}
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 mt-6 ${item.highlight ? "bg-[#5C80BC] ring-4 ring-[#5C80BC]/30" : "bg-white/30"}`} />
                  {/* Card */}
                  <div className={`mt-4 w-48 rounded-2xl p-5 flex-shrink-0 ${item.highlight ? "bg-[#201E50] border border-[#5C80BC]/40" : "bg-white/5 border border-white/10"}`}>
                    {item.year && (
                      <div className="text-[#5C80BC] text-xs tracking-widest mb-2">{item.year}</div>
                    )}
                    <div className={`text-sm font-semibold mb-2 leading-snug ${item.highlight ? "text-white" : "text-white/80"}`}>{item.label}</div>
                    <div className="text-white/40 text-xs leading-relaxed">{item.sub}</div>
                  </div>
                </div>
                {/* Connecting line */}
                {i < timeline.length - 1 && (
                  <div className="w-8 h-px bg-white/15 mt-[1.375rem] flex-shrink-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT I WORKED ON ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#201E50] text-xs tracking-widest mb-6">WHAT I WORKED ON</div>
          <h2 className="text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-4">
            Improving every corner of the product
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mb-14">
            Large projects were only one part of the work. Much of my time was spent refining existing experiences — making complex workflows faster, clearer and easier to use.
          </p>

          {/* Puzzle grid — 3 cols, auto row heights, varied col-spans */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featureCards.map(({ icon: Icon, name, desc, img, imgFit, col, imgH }) => (
              <div
                key={name}
                className={`${col} rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm flex flex-col`}
              >
                {/* Screenshot — fixed height so it's always visible */}
                <div className={`${imgH} flex-shrink-0 overflow-hidden`}>
                  <img
                    src={img}
                    alt={name}
                    className={`w-full h-full ${imgFit}`}
                  />
                </div>
                {/* Text — full, no clipping */}
                <div className="p-5 border-t border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-[#201E50]/8 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-[#201E50]" />
                    </div>
                    <h3 className="text-slate-900 text-sm font-semibold leading-snug">{name}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS WITHIN THE PRODUCT ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#201E50] text-xs tracking-widest mb-6">PRODUCTS WITHIN THE PRODUCT</div>
          <h2 className="text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-4">
            Some features grew into products
          </h2>
          <p className="text-slate-500 text-lg leading-relaxed max-w-2xl mb-14">
            Some initiatives grew beyond individual features into complete products within the Squadra ecosystem — with product strategy, multi-platform workflows and full interaction design.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Files — no screenshot */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
              <div className="h-52 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-white/70 flex items-center justify-center shadow-md">
                  <FileText className="w-8 h-8 text-slate-400" />
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  {["Desktop", "Mobile"].map(p => (
                    <span key={p} className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1">{p}</span>
                  ))}
                </div>
                <h3 className="text-slate-900 text-xl font-semibold mb-2">Files</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Secure document sharing between managers and employees.
                </p>
                <span className="text-slate-300 text-sm">Case study coming soon</span>
              </div>
            </div>

            {/* Shift Swaps */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group">
              <div className="h-52 overflow-hidden bg-gradient-to-br from-[#201E50]/5 to-[#5C80BC]/10">
                <img src={swapRealImg} alt="Shift Swaps" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  {["Desktop", "Mobile"].map(p => (
                    <span key={p} className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1">{p}</span>
                  ))}
                </div>
                <h3 className="text-slate-900 text-xl font-semibold mb-2">Shift Swaps</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Giving employees more flexibility while keeping managers in control.
                </p>
                <Link
                  to="/work/squadra-swaps"
                  className="inline-flex items-center gap-2 text-[#201E50] text-sm font-medium hover:gap-3 transition-all"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Daily Checklists */}
            <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm flex flex-col group">
              <div className="h-52 overflow-hidden bg-gradient-to-br from-[#201E50]/5 to-[#5C80BC]/10">
                <img src={tabletImg} alt="Daily Checklists" className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="flex gap-2 mb-4">
                  {["Desktop", "Tablet", "Mobile"].map(p => (
                    <span key={p} className="text-xs text-slate-500 bg-slate-100 rounded-full px-3 py-1">{p}</span>
                  ))}
                </div>
                <h3 className="text-slate-900 text-xl font-semibold mb-2">Daily Checklists</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                  Operational checklists designed for teams working directly on the floor.
                </p>
                <Link
                  to="/work/squadra-checklists"
                  className="inline-flex items-center gap-2 text-[#201E50] text-sm font-medium hover:gap-3 transition-all"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BY THE NUMBERS ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#201E50]">
        <div className="max-w-7xl mx-auto">
          <div className="text-white/40 text-xs tracking-widest mb-14">BY THE NUMBERS</div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {stats.map(({ value, label }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">{value}</div>
                <div className="text-white/50 text-sm leading-snug">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW I WORK ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#201E50] text-xs tracking-widest mb-6">HOW I WORK</div>
          <h2 className="text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-14">
            My process
          </h2>

          {/* Process steps */}
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center gap-0 min-w-max mb-10">
              {process.map((step, i) => (
                <div key={step} className="flex items-center">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white border-2 border-[#201E50]/20 flex items-center justify-center shadow-sm">
                      <span className="text-[#201E50] text-xs font-semibold">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <span className="text-slate-700 text-sm font-medium whitespace-nowrap">{step}</span>
                  </div>
                  {i < process.length - 1 && (
                    <div className="w-12 h-px bg-[#201E50]/20 mb-6 flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Working on a continuously evolving SaaS product meant that every release informed the next one. Features rarely ended at launch — they continued to improve through customer feedback, stakeholder collaboration and real-world usage.
          </p>
        </div>
      </section>

      {/* ── ONE PRODUCT. THREE PLATFORMS. ── */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-[#201E50] text-xs tracking-widest mb-6">ONE PRODUCT. THREE PLATFORMS.</div>
          <h2 className="text-3xl md:text-5xl text-slate-900 leading-tight tracking-tight mb-14">
            Designed for every context
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Monitor,
                platform: "Desktop",
                desc: "The operational hub for managers — scheduling, oversight, approvals and reporting.",
                img: swapRealImg,
                bg: "from-slate-100 to-blue-50",
              },
              {
                icon: Tablet,
                platform: "Tablet",
                desc: "Shared workplace tools designed for on-site operations and team task management.",
                img: tabletImg,
                bg: "from-blue-50 to-slate-100",
              },
              {
                icon: Smartphone,
                platform: "Mobile",
                desc: "An employee companion for schedules, availability, communication and time tracking.",
                img: mobileImg,
                bg: "from-slate-100 to-indigo-50",
              },
            ].map(({ icon: Icon, platform, desc, img, bg }) => (
              <div key={platform} className="rounded-3xl overflow-hidden border border-slate-100 shadow-sm">
                <div className={`h-56 bg-gradient-to-br ${bg} flex items-end justify-center pt-6 overflow-hidden`}>
                  <img src={img} alt={platform} className="w-full h-full object-cover object-top" />
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-[#201E50]" />
                    <span className="text-slate-900 font-semibold">{platform}</span>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section className="relative overflow-hidden bg-slate-950 py-32 px-6 md:px-12 lg:px-24">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="text-white/40 text-xs tracking-widest mb-8">CLOSING</div>
          <h2 className="text-4xl md:text-6xl text-white leading-tight tracking-tight mb-8">
            Designing for continuous evolution
          </h2>
          <p className="text-white/60 text-lg leading-relaxed mb-5">
            Squadra wasn't a project with a finish line.
          </p>
          <p className="text-white/60 text-lg leading-relaxed mb-14">
            Over more than two years I helped shape a product that continuously evolved alongside its users and business goals. From refining everyday interactions to designing entirely new capabilities, my work focused on making complex operational software feel clearer, faster and easier to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/work/squadra-checklists"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#201E50] rounded-full hover:bg-blue-50 transition-all text-sm tracking-wide uppercase font-medium"
            >
              Checklists Case Study <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/work/squadra-swaps"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full hover:bg-white/15 transition-all text-sm tracking-wide uppercase"
            >
              Shift Swaps Case Study <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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
