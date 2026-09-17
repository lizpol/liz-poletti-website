import type { StudyContent } from "../components/CaseStudyLayout";
import { projects } from "./projects";
import checklistHero from "../../imports/Tablet.png";
import checklistTemplate from "../../imports/Checklist-template.png";
import newShift from "../../imports/New-shift.png";
import mobileTasks from "../../imports/Mobile-tasks.png";
import checklistReview from "../../imports/Manager-review.png";
import swapHero from "../../imports/Swap-real.png";
import swapRules from "../../imports/Shift-swap-rules.png";
import swapReview from "../../imports/Manager-review-1.png";
import application from "../../imports/Application-eligibility.png";
import offer from "../../imports/Offer.png";
import oldCaveo from "../../imports/CaveoApp/46dbf3a4264d36b313c17a84d33d36ca0f922897.png";
import planStart from "../../imports/1.png";
import planProgress from "../../imports/3.png";
import planReady from "../../imports/5.png";
import appointment from "../../imports/6.png";
import planComplete from "../../imports/7.png";
import review from "../../imports/8.png";
import connectionsDesktop from "../../imports/Connections.png";
import connectionsMobile from "../../imports/Connections-mobile.png";
import groupsDesktop from "../../imports/Groups.png";
import groupMobile from "../../imports/Group-mobile.png";
import eventsDesktop from "../../imports/Events_explorer.png";
import eventMobile from "../../imports/event-mobile.png";
import messagesDesktop from "../../imports/Messages.png";
import messagesTablet from "../../imports/Messages-1.png";
import fosterHero from "../../imports/foster-preview-v2.png";

const squadraParent = { label: "Squadra", href: "/work/squadra" };
const squadraMeta = [
  { label: "Role", value: "UX/UI Designer & UX Writer" },
  { label: "Team", value: "Design lead · 1 PM · 3 engineers · 1 founder" },
  { label: "Project", value: "Add-on within Squadra" },
];
const related = {
  squadra: { title: "Squadra", description: "Two years of design across an evolving workforce platform.", href: "/work/squadra" },
  checklists: { title: "Daily Checklists", description: "Bringing everyday tasks into the shift.", href: "/work/squadra-checklists" },
  swaps: { title: "Shift Swaps", description: "Connecting employee flexibility with manager oversight.", href: "/work/squadra-swaps" },
  caveo: { title: "Caveo", description: "Making financial planning easier to navigate.", href: "/work/caveo" },
  nvoye: { title: "Nvoye", description: "A private professional community for diplomats.", href: "/work/nvoye" },
  foster: { title: "Foster the Family", description: "Clearer paths to support for families in foster care.", href: "/work/foster" },
};

export const checklistStudy: StudyContent = {
  name: "Daily Checklists",
  category: "Squadra feature design",
  title: "A clear plan for every shift.",
  lead: "Bringing instructions, daily tasks and completion records into the tools teams already use.",
  parent: squadraParent,
  hero: { src: checklistHero, alt: "Squadra checklists on a shared workplace tablet" },
  meta: [...squadraMeta, { label: "Platforms", value: "Desktop, tablet & mobile" }],
  context: {
    title: "Connecting the schedule to the work",
    paragraphs: [
      "Squadra helps restaurants, clinics and hospitality businesses manage their workforce. Teams could see when they were working, but instructions still lived in messages, paper notes and verbal handovers.",
      "I owned Checklists from research and framing through UX, UI and handoff. Conversations with managers pointed to a simple need: attach tasks to the shift itself, give workers the right context and make completion visible without constant check-ins.",
    ],
  },
  sections: [
    {
      id: "templates", label: "01 · Build", title: "Write the routine once",
      challenge: "How could daily routines stay consistent when instructions were scattered across messages, notes and handovers?",
      paragraphs: [
        "I designed reusable templates so managers could set up an opening routine once and use it across shifts. Each task can include instructions, photos and files, keeping the detail close to the action.",
        "Reusing a shared template gives teams a consistent starting point, whoever happens to be working that day.",
      ],
      images: [{ src: checklistTemplate, alt: "Checklist template editor with task descriptions and attachments" }],
    },
    {
      id: "assignment", label: "02 · Assign", title: "Make tasks part of planning",
      challenge: "How could assigning tasks fit into a manager’s existing planning routine?",
      paragraphs: [
        "I placed checklist assignment inside shift creation. Managers can add several templates together, so opening tasks, closing routines and maintenance are organised before the shift begins.",
        "This keeps scheduling and task setup in one flow, with no separate assignment step to remember later.",
      ],
      layout: "compact",
      images: [{ src: newShift, alt: "Shift creation form with the option to add checklists" }],
    },
    {
      id: "completion", label: "03 · Complete", title: "Keep guidance close at hand",
      challenge: "How could workers follow instructions and record completion without slowing down their shift?",
      paragraphs: [
        "Workers see their tasks, instructions and progress on the devices they use during a shift. I kept the path from reading a task to marking it complete short and direct.",
        "Notes and photos add context to a completed task, leaving a useful record of what happened instead of just a tick.",
      ],
      layout: "compact",
      images: [{ src: mobileTasks, alt: "Mobile task list and task details with completion controls" }],
    },
    {
      id: "review", label: "04 · Review", title: "Oversight without interruption",
      challenge: "How could managers see what happened without checking every task in person?",
      paragraphs: [
        "I designed the review view around the questions managers need answered: what was completed, by whom and when? Notes and photos sit beside the relevant task, with incomplete work clearly flagged.",
        "Managers can leave a comment in context and review submissions after the shift, giving teams a shared record without interrupting the work.",
      ],
      images: [{ src: checklistReview, alt: "Manager review showing task completion, notes and attached evidence" }],
    },
  ],
  outcome: "An end-to-end checklist flow, from reusable templates and shift assignment to completion and review. The design connects manager oversight with practical guidance for workers across desktop, tablet and mobile.",
  related: [related.swaps, related.squadra],
};

export const swapsStudy: StudyContent = {
  name: "Shift Swaps",
  category: "Squadra feature design",
  title: "A simpler way to find cover.",
  lead: "Helping employees arrange shift replacements while giving managers the context to approve them.",
  parent: squadraParent,
  hero: { src: swapHero, alt: "Squadra shift swap management view with a request open for review" },
  meta: [...squadraMeta, { label: "Platforms", value: "Desktop & mobile" }],
  context: {
    title: "Bringing swaps into Squadra",
    paragraphs: [
      "Squadra already managed schedules, but shift swaps often happened in WhatsApp. Managers had to check replacements manually, keep track of agreements and update the schedule afterwards.",
      "I owned the feature from research and framing through UX, UI and handoff. The design needed to let workers find cover independently while giving managers control over eligibility and the final assignment.",
    ],
  },
  sections: [
    {
      id: "rules", label: "01 · Configure", title: "Set the rules upfront",
      challenge: "How could managers keep control of eligibility without repeating the same checks for every request?",
      paragraphs: [
        "I moved recurring eligibility decisions into a single setup flow. Managers choose which job titles or skills qualify, how much notice is needed and when unresolved requests should be declined.",
        "These rules guide subsequent requests, reducing the need to repeat the same checks for every swap.",
      ],
      images: [{ src: swapRules, alt: "Shift swap settings for eligibility, notice periods and deadlines" }],
    },
    {
      id: "offer", label: "02 · Offer", title: "Start with the shift",
      challenge: "How could workers find cover independently and know where their request stood?",
      paragraphs: [
        "On mobile, workers select the shift they need covered and add a message. The offer appears in the shift marketplace for eligible colleagues.",
        "I made request status visible in the offer list, so workers can follow a swap through review, approval or rejection without chasing a reply.",
      ],
      layout: "compact",
      images: [{ src: offer, alt: "Mobile screens for creating a swap offer and following its status" }],
    },
    {
      id: "apply", label: "03 · Apply", title: "Show relevant opportunities",
      challenge: "How could workers tell which shifts suited them before applying?",
      paragraphs: [
        "The marketplace filters offers using the manager’s rules, helping workers find shifts that match their role and skills. Qualification badges explain the requirements alongside each offer.",
        "I focused the application flow on making it clear what someone is volunteering for before they apply.",
      ],
      layout: "compact",
      images: [{ src: application, alt: "Shift marketplace showing eligibility details and an application flow" }],
    },
    {
      id: "assignment", label: "04 · Assign", title: "Give managers the full picture",
      challenge: "How could approval account for workload and eligibility while keeping the schedule accurate?",
      paragraphs: [
        "The review screen brings the current assignee and applicants together, with workload, target hours and rest days available for comparison. Any eligibility mismatch is flagged so managers can understand it in context.",
        "Assigning a replacement updates the schedule as part of the same action, closing the gap between agreeing a swap and recording it.",
      ],
      images: [{ src: swapReview, alt: "Manager comparison of swap applicants, workload and eligibility flags" }],
    },
  ],
  outcome: "A connected swap flow covering rules, offers, applications and assignment. Employees can initiate requests, managers can review them with context, and the approved replacement carries through to the schedule.",
  related: [related.checklists, related.squadra],
};

export const caveoStudy: StudyContent = {
  name: "Caveo",
  category: "Financial planning",
  title: "Financial planning, one step at a time.",
  lead: "Evolving an insurance app into a guided financial planning experience built around real life decisions.",
  hero: { src: planStart, alt: "Caveo financial plan with topic-based navigation" },
  meta: [
    { label: "Role", value: "UX/UI Designer · Strategy & product design" },
    { label: "Team", value: "Founders & developers" },
    { label: "Timeline", value: "4 months" },
    { label: "Platform", value: "Mobile app" },
  ],
  context: {
    title: "Beyond an insurance utility",
    paragraphs: [
      "Caveo is a Swiss financial planning platform combining insurance guidance, financial organisation and expert consultation. Its app mainly served as an insurance utility, leaving much of the broader offering difficult to discover.",
      "I worked with the founders and developers on the product structure, user journeys and interface. The goal was to make financial planning approachable in small steps and connect those steps naturally to expert guidance.",
    ],
  },
  sections: [
    {
      id: "structure", label: "01 · Structure", title: "Start with life’s financial topics",
      challenge: "How could an insurance-led app make its broader financial planning offer understandable?",
      paragraphs: [
        "I organised the plan around topics such as taxes, pensions, assets and inheritance. Each hexagon represents an area with its own assessment, tasks and status, making the breadth of the product visible from the start.",
        "This replaced an insurance-led starting point with a structure people could use to explore their wider financial situation.",
      ],
      images: [
        { src: oldCaveo, alt: "Original Caveo insurance home screen", caption: "Before · Insurance home", },
        { src: planStart, alt: "Redesigned financial plan with hexagonal topic navigation", caption: "After · Topic-based financial plan" },
      ],
      layout: "compact",
    },
    {
      id: "progress", label: "02 · Progress", title: "Make the next step visible",
      challenge: "How could a complex plan feel manageable while making progress and next steps clear?",
      paragraphs: [
        "I gave each topic a visible state so users could distinguish what was untouched, in preparation or complete. The plan gradually fills with colour as they work through it.",
        "The main action also changes from starting the financial check to checking the next topic, keeping the next step clear without asking users to finish everything at once.",
      ],
      layout: "phones",
      images: [
        { src: planStart, alt: "Financial plan before assessments begin", caption: "Start the financial check" },
        { src: planProgress, alt: "Financial plan with several topics in preparation", caption: "Work through the topics" },
        { src: planReady, alt: "Financial plan with topics prepared", caption: "See the plan take shape" },
      ],
    },
    {
      id: "guidance", label: "03 · Guidance", title: "Connect planning to a conversation",
      challenge: "How could the digital plan connect naturally to expert advice and ongoing reviews?",
      paragraphs: [
        "I brought appointments and review prompts into the plan itself. Once topics have been assessed, users can see the next consultation and the areas that still need attention.",
        "Yearly reviews give the plan a reason to evolve as circumstances change, connecting the digital experience to Caveo’s expert support.",
      ],
      layout: "phones",
      images: [
        { src: appointment, alt: "Caveo plan with the next expert appointment", caption: "Next appointment" },
        { src: planComplete, alt: "Completed financial plan", caption: "Plan created" },
        { src: review, alt: "Financial topic flagged for review", caption: "Time to review" },
      ],
    },
    {
      id: "system", label: "04 · Design system", title: "Leave room for the plan to grow",
      challenge: "How could the product accommodate new topics while keeping the experience familiar?",
      paragraphs: [
        "Each topic combines a short self-assessment with practical tasks, so users can work on one area and return to another later. I carried the same visual language across topic states, task lists and planning views.",
        "The reusable hexagon system also leaves room for new financial topics without changing the underlying navigation.",
      ],
    },
  ],
  outcome: "A redesigned mobile experience covering topic-based planning, assessments, progress states and expert guidance, supported by a reusable visual system. The work reframed Caveo’s broader offering as a financial plan people could build and revisit over time.",
  pdf: { href: "/case-studies/caveo-case-study-sample.pdf", label: "Download the case study PDF" },
  related: [related.squadra, related.nvoye],
};

export const nvoyeStudy: StudyContent = {
  name: "Nvoye",
  category: "Professional community",
  title: "A community built on trust.",
  lead: "Designing a private space for diplomats to connect, meet and stay in touch.",
  hero: { src: messagesTablet, alt: "Nvoye messaging experience on a tablet" },
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Team", value: "Me + 3 designers · 2 founders · 5 developers" },
    { label: "Timeline", value: projects.nvoye.timeline },
    { label: "Platforms", value: "Desktop, tablet & mobile" },
  ],
  context: {
    title: "A professional space for diplomats",
    paragraphs: [
      "Nvoye is a private platform for the diplomatic community. Members need to find relevant people and opportunities while understanding who can see their activity and the spaces they join.",
      "As a Product Designer, I worked with three other designers, two founders and five developers. Together, we shaped profiles, connections, events, groups and messaging around professional context and clear privacy cues. I also helped shape the UX writing, making the language clear and appropriate for the diplomatic community.",
    ],
  },
  sections: [
    {
      id: "connections", label: "01 · Connections", title: "Put professional context first",
      challenge: "How could members judge a connection’s relevance while keeping professional context at the centre?",
      paragraphs: [
        "We anchored profiles in a person’s role, embassy and posting, with mutual connections providing useful context. The network is organised into existing connections, requests and exploration.",
        "This gives members a clear way to manage their professional circle. On mobile, network activity keeps them informed about the people they have chosen to connect with.",
      ],
      layout: "devices",
      images: [
        { src: connectionsDesktop, alt: "Nvoye desktop connections view with professional profiles" },
        { src: connectionsMobile, alt: "Nvoye mobile network activity view" },
      ],
    },
    {
      id: "events", label: "02 · Events", title: "Make discovery purposeful",
      challenge: "How could members find relevant events and understand their visibility before taking part?",
      paragraphs: [
        "We organised events around themes such as diplomacy, culture and languages. Visibility and format are shown upfront, helping members understand whether an event is public or private, online or in person.",
        "Event details bring the occasion and practical information together, from formal ceremonies to smaller community exchanges.",
      ],
      layout: "devices",
      images: [
        { src: eventsDesktop, alt: "Nvoye event explorer organised by theme" },
        { src: eventMobile, alt: "Nvoye mobile event details" },
      ],
    },
    {
      id: "groups", label: "03 · Groups", title: "Explain the space before joining",
      challenge: "How could members understand a group’s purpose, rules and privacy before joining?",
      paragraphs: [
        "Group pages lead with their purpose, then introduce conversations and events. We made rules, visibility and the people running the group easy to find so members can understand the space before participating.",
        "The same priorities carry through to mobile, keeping a group’s identity and expectations close to its everyday activity.",
      ],
      layout: "devices",
      images: [
        { src: groupsDesktop, alt: "Nvoye desktop group page with purpose, privacy and administrator information" },
        { src: groupMobile, alt: "Nvoye mobile community group" },
      ],
    },
    {
      id: "messages", label: "04 · Messages", title: "Keep conversations easy to navigate",
      challenge: "How could conversations stay easy to recognise and navigate in a professional community?",
      paragraphs: [
        "We designed messaging around recognisable people and professional relationships. Names and titles give conversations context, while a clear overview, search and filters help members find the thread they need.",
        "The experience extends across desktop and tablet, supporting both individual messages and group conversations within the same visual language.",
      ],
      images: [{ src: messagesDesktop, alt: "Nvoye desktop messaging overview with contacts and conversations" }],
    },
  ],
  outcomeTitle: "What we delivered",
  outcome: "Together, we designed a cohesive community experience spanning professional profiles, connections, events, groups and messaging. Clear identity and privacy cues carry through the product, supported by consistent design patterns across devices.",
  related: [related.caveo, related.foster],
};

export const fosterStudy: StudyContent = {
  name: "Foster the Family",
  category: "Website design",
  title: "A clearer path to support.",
  lead: "Helping families find what they need, while making it easier for others to contribute.",
  hero: { src: fosterHero, alt: "Foster the Family website project" },
  meta: [
    { label: "Role", value: projects.foster.role },
    { label: "Team", value: "Independent designer with organisation stakeholders" },
    { label: "Timeline", value: projects.foster.timeline },
    { label: "Platform", value: "Responsive website" },
  ],
  context: {
    title: "One organisation, different needs",
    paragraphs: [
      "Foster the Family is a nonprofit supporting families in the foster care system. Its website needs to help families seeking support while also serving donors, volunteers and partners.",
      "I worked independently with the organisation’s stakeholders to redesign the site’s structure, content and visual system. The priority was to make essential information easy to find, especially for families already under stress.",
    ],
  },
  sections: [
    {
      id: "structure", label: "01 · Structure", title: "Organise around the visitor’s needs",
      challenge: "How could one website serve families seeking help, donors and volunteers without overwhelming them?",
      paragraphs: [
        "I restructured the information architecture around the different reasons people arrive at the site. Families seeking help, potential volunteers and donors each needed a clear starting point.",
        "The new structure gives those audiences distinct paths while keeping them connected to the organisation’s wider work.",
      ],
    },
    {
      id: "content", label: "02 · Content", title: "Make the next action clear",
      challenge: "How could the site communicate its mission while making practical next steps easy to find?",
      paragraphs: [
        "I prioritised practical information and clear routes to getting help, donating and volunteering. The content needed to communicate the organisation’s mission while helping visitors understand what to do next.",
        "This balance shaped the page hierarchy: a welcoming introduction, the information relevant to that audience and a visible way to act.",
      ],
    },
    {
      id: "visual-system", label: "03 · Visual system", title: "Keep the experience approachable",
      challenge: "How could the experience feel welcoming and credible, and stay consistent as the site grew?",
      paragraphs: [
        "I developed a visual system that balances warmth with credibility and carries consistently across the site. Reusable patterns provide a foundation for the organisation’s content to grow.",
        "Responsive layouts keep key information and actions accessible on smaller screens, so visitors can follow the same paths on their phones.",
      ],
    },
  ],
  outcome: "A restructured website with clear routes to support, donations and volunteering, backed by a responsive visual system. The design brings the organisation’s different audiences together while giving each a more focused path through the content.",
  related: [related.nvoye, related.squadra],
};
