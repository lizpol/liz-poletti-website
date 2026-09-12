import { Link, Navigate, useParams } from "react-router";
import Navigation from "../components/Navigation";
import { ArrowLeft, ArrowRight, Download } from "lucide-react";
import { projects } from "../data/projects";

import BrowserFrame from "../components/BrowserFrame";
import Breadcrumb from "../components/Breadcrumb";
import connectionsDesktop from "../../imports/Connections.png";
import connectionsMobile from "../../imports/Connections-mobile.png";
import groupsDesktop from "../../imports/Groups.png";
import groupMobile from "../../imports/Group-mobile.png";
import eventsDesktop from "../../imports/Events_explorer.png";
import eventMobile from "../../imports/event-mobile.png";
import messagesDesktop from "../../imports/Messages.png";
import messagesTablet from "../../imports/Messages-1.png";

const projectOrder = ["squadra", "caveo", "nvoye", "foster"];

function DesktopMobileComposition({
  desktopSrc,
  desktopAlt,
  mobileSrc,
  mobileAlt,
  url,
  mobilePosition = "bottom-right",
}: {
  desktopSrc: string;
  desktopAlt: string;
  mobileSrc: string;
  mobileAlt: string;
  url?: string;
  mobilePosition?: "bottom-right" | "bottom-left";
}) {
  const posClass = mobilePosition === "bottom-left"
    ? "-bottom-10 -left-6"
    : "-bottom-10 -right-6";

  return (
    <div className={`relative ${mobilePosition === "bottom-right" ? "pb-14 pr-8" : "pb-14 pl-8"}`}>
      <BrowserFrame src={desktopSrc} alt={desktopAlt} url={url} />
      <div className={`absolute ${posClass} w-[130px] drop-shadow-2xl`}>
        <img src={mobileSrc} alt={mobileAlt} className="w-full" />
      </div>
    </div>
  );
}

export default function NvoyeCaseStudy() {
  const { projectId } = useParams<{ projectId: string }>();

  if (projectId !== "nvoye") {
    return <Navigate to="/" replace />;
  }

  const project = projects.nvoye;
  const currentIndex = projectOrder.indexOf("nvoye");
  const previousProjectId = projectOrder[currentIndex - 1];
  const nextProjectId = projectOrder[currentIndex + 1];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />

      <div className="px-6 md:px-12 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">

          <Breadcrumb items={[
            { label: "Works", href: "/#projects" },
            { label: "Nvoye" },
          ]} />

          {/* Hero */}
          <div className="mb-20 text-center">
            <div className="text-blue-800 text-xs tracking-widest mb-6">
              PROFESSIONAL COMMUNITY PLATFORM
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-8 leading-tight tracking-tight max-w-4xl mx-auto">
              Nvoye: designing a private community for the diplomatic world
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto mb-10">
              A discrete professional platform for diplomats — combining connections, events, groups and messaging in a product where trust and privacy are the foundation, not an afterthought.
            </p>
            <a
              href="/case-studies/nvoye-case-study.pdf"
              download
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#201E50] text-white rounded-full hover:bg-[#5C80BC] transition-all duration-300 shadow-lg shadow-[#201E50]/25 text-sm tracking-wide uppercase"
            >
              <Download className="w-4 h-4" />
              Download Full Case Study
            </a>
          </div>

          {/* Opening hero shot — tablet Messages (already device-framed) */}
          <div className="mb-24 -mx-6 md:-mx-12 lg:-mx-24">
            <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#201E50] to-slate-800">
              <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#5C80BC]/10 rounded-full blur-3xl" />
              <div className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 flex items-center justify-center">
                <div className="w-full max-w-4xl">
                  <img
                    src={messagesTablet}
                    alt="Nvoye Messages — tablet view"
                    className="w-full drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Meta */}
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-24 pb-24 border-b border-blue-200">
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">ROLE</div>
              <p className="text-slate-700 leading-relaxed">{project.role}</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">SCOPE</div>
              <p className="text-slate-700 leading-relaxed">UX Strategy, Community Design, UI Design, Product Storytelling</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">PLATFORM</div>
              <p className="text-slate-700 leading-relaxed">Web & Mobile</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">TIMELINE</div>
              <p className="text-slate-700 leading-relaxed">{project.timeline}</p>
            </div>
            <div>
              <div className="text-blue-800 text-xs tracking-widest mb-3">TEAM</div>
              <p className="text-slate-700 leading-relaxed">{project.team}</p>
            </div>
          </div>

          {/* Overview */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-6">OVERVIEW</div>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  Professional networking without the social media playbook
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Nvoye is a private platform for the diplomatic community. The brief was clear: build something diplomats can trust — where discretion, professional context and meaningful interaction come first.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  That meant actively avoiding the patterns that define consumer social media. No engagement metrics. No algorithmic feeds. No follower counts. Every design decision was measured against one question: does this make the platform feel safer or noisier?
                </p>
              </div>
              <div>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  I was the sole designer — responsible for the full product across community features, member profiles, messaging, events and groups, as well as the product storytelling that explained the platform to new members.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  The challenge wasn't building features. It was knowing which patterns to use and which to deliberately leave out.
                </p>
              </div>
            </div>
          </section>

          {/* Feature 01: Connections */}
          <section className="mb-32">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 01</div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  Connections built on professional context
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Member profiles are anchored in professional role and embassy — not follower counts or engagement history. When you view a connection, you see who you know in common, what they do, and where they're posted.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  The Connections screen organises contacts across three tabs — Your connections, Requests, and Explore — giving members control over their network without the pressure of public visibility metrics.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  On mobile, the network activity feed keeps members informed of what their connections are doing — without surfacing content they didn't choose to see.
                </p>
              </div>
              <div>
                <DesktopMobileComposition
                  desktopSrc={connectionsDesktop}
                  desktopAlt="Nvoye Connections — desktop view"
                  mobileSrc={connectionsMobile}
                  mobileAlt="Nvoye People — mobile activity feed"
                  mobilePosition="bottom-right"
                />
              </div>
            </div>
          </section>

          {/* Feature 02: Events */}
          <section className="mb-32">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 02</div>
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  Events for a community that values discretion
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Diplomatic life runs on events — receptions, cultural exchanges, ceremonial gatherings. The Events explorer surfaces these without turning them into a public social feed.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  Every event carries a private/public flag and an in-person/online indicator upfront. The hero carousel surfaces today's top picks with editorial weight — no algorithmic ranking, no engagement-driven promotion.
                </p>
              </div>
              <div>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Events are grouped by theme below — languages, diplomacy, culture — making discovery purposeful rather than scroll-driven.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  On mobile, event detail pages are designed to communicate the formality of the occasion. The Peace Palace Commemoration Ceremony looks and feels different from a casual language exchange.
                </p>
              </div>
            </div>
            {/* Full-width composed shot */}
            <DesktopMobileComposition
              desktopSrc={eventsDesktop}
              desktopAlt="Nvoye Events explorer — desktop"
              mobileSrc={eventMobile}
              mobileAlt="Nvoye Event detail — mobile"
              mobilePosition="bottom-right"
            />
          </section>

          {/* Feature 03: Groups */}
          <section className="mb-32">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 03</div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <DesktopMobileComposition
                  desktopSrc={groupsDesktop}
                  desktopAlt="Nvoye Group detail — Intercultural crash course"
                  mobileSrc={groupMobile}
                  mobileAlt="Nvoye Group — mobile"
                  mobilePosition="bottom-left"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  Groups as purposeful spaces, not feeds
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Group pages lead with "About us" — what this group is for — before surfacing Chat or Events. The member count and rules are visible from the start.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  Privacy is explicit: the status badge and visibility rule appear in the right panel, not buried in settings. Group owners and admins are named — accountability is part of the design.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  On mobile, the group header image and name anchor the screen. "Life in the Netherlands" for diplomats posted in The Hague feels grounded and purposeful — not like a social channel competing for attention.
                </p>
              </div>
            </div>
          </section>

          {/* Feature 04: Messages */}
          <section className="mb-24">
            <div className="text-blue-800 text-xs tracking-widest mb-4">FEATURE 04</div>
            <div className="grid md:grid-cols-2 gap-16 items-start mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-tight">
                  Messaging designed around relationship, not volume
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed mb-5">
                  The inbox is built for a community where every conversation carries professional weight. Contacts appear with their full name and title — Amb. Sevil Haslak Hawthorne, not just a username.
                </p>
                <p className="text-slate-700 text-lg leading-relaxed">
                  The grid layout presents all conversations at equal prominence. No pinning, no priority inbox, no read-receipt pressure. The "Start a new chat" prompt sits at the bottom — an invitation, not a push to generate activity.
                </p>
              </div>
              <div>
                <p className="text-slate-700 text-lg leading-relaxed">
                  The tablet view was designed to signal that Nvoye belongs in professional environments — conference tables, government offices — not just on a phone during a commute. Search and filter controls are available but not pushed.
                </p>
              </div>
            </div>

            {/* Desktop browser frame + tablet side by side */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="flex flex-col gap-3">
                <BrowserFrame
                  src={messagesDesktop}
                  alt="Nvoye Messages — desktop"
                />
                <p className="text-slate-500 text-sm text-center">Messages — desktop</p>
              </div>
              <div className="flex flex-col gap-3">
                <img
                  src={messagesTablet}
                  alt="Nvoye Messages — tablet"
                  className="w-full drop-shadow-xl"
                />
                <p className="text-slate-500 text-sm text-center">Messages — tablet</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className="mb-24">
            <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white rounded-2xl p-12 md:p-16">
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto text-center">
                By designing for discretion rather than engagement metrics, Nvoye became a platform that diplomats could trust — one where professionalism and privacy weren't afterthoughts, but the foundation every feature was built on.
              </p>
            </div>
          </section>

          {/* Final CTA */}
          <section className="mb-20">
            <div className="bg-white border-2 border-blue-200 rounded-2xl p-12 md:p-16 text-center">
              <h3 className="text-3xl text-slate-900 mb-4">Want the full case study?</h3>
              <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                The complete PDF covers UX strategy for the diplomatic community, community feature design, trust and privacy patterns, and the full design system built for Nvoye.
              </p>
              <a
                href="/case-studies/nvoye-case-study.pdf"
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
