import type { StudyContent } from "../components/CaseStudyLayout";
import { projects } from "./projects";
import checklistHero from "../../imports/Checklist-EN.png";
import checklistTemplate from "../../imports/Checklist-template.png";
import newShift from "../../imports/New-shift.png";
import mobileTasks from "../../imports/Mobile-tasks.png";
import checklistReview from "../../imports/Manager-review.png";
import checklistTablet from "../../imports/checklists-tablet.png";
import swapsDecisionTree from "../../imports/swaps-decision-tree.png";
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
import nvoyeResearchThemes from "../../imports/nvoye-research-themes.svg";
import nvoyeResearchDirection from "../../imports/nvoye-research-direction.svg";
import nvoyeResearchTesting from "../../imports/nvoye-research-testing.svg";
import connectionsDesktop from "../../imports/Connections.png";
import connectionsMobile from "../../imports/Connections-mobile.png";
import groupsDesktop from "../../imports/Groups.png";
import groupMobile from "../../imports/Group-mobile.png";
import eventsDesktop from "../../imports/Events_explorer.png";
import eventMobile from "../../imports/event-mobile.png";
import messagesDesktop from "../../imports/Messages.png";
import messagesTablet from "../../imports/Messages-1.png";
import fosterHero from "../../imports/foster/home-hero.jpg";
import fosterHomeSupport from "../../imports/foster/home-support.jpg";
import fosterBefore from "../../imports/foster/get-help-before.png";
import fosterHelp from "../../imports/foster/get-help.jpg";
import fosterNav from "../../imports/foster/get-help-nav.jpg";
import fosterDonate from "../../imports/foster/donate.jpg";
import fosterGiving from "../../imports/foster/donate-giving.jpg";

const squadraParent = { label: "Squadra", href: "/work/squadra" };
const squadraMeta = [
  { label: "Role", value: "UX/UI Designer & UX Writer" },
  { label: "Team", value: "2 founders, 1 designer, 5 developers" },
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
  hero: { src: checklistHero, alt: "Squadra checklist for a gardening shift, showing task progress and completion" },
  meta: [...squadraMeta, { label: "Platforms", value: "Desktop, tablet & mobile" }],
  context: {
    title: "Connecting the schedule to the work",
    paragraphs: [
      "Squadra connects managers and employees in businesses that work in shifts. Teams could see when they were working, but instructions still lived in messages, paper notes and verbal handovers.",
      "I owned Checklists from research and framing through UX, UI and handoff. Conversations with managers pointed to a need for clear task guidance and visible completion without constant check-ins. Our initial direction tied tasks closely to individual shifts; research later challenged that assumption.",
    ],
  },
  sections: [
    {
      id: "templates", label: "01 · Build", title: "Write the routine once",
      paragraphs: ["Instructions were scattered across messages and handovers. I brought them into reusable checklist templates, with descriptions, photos and files attached to each task, so managers could define a routine once and give every shift the same starting point."],
      images: [{ src: checklistTemplate, alt: "Checklist template editor with task descriptions and attachments" }],
    },
    {
      id: "assignment", label: "02 · Assign", title: "Make tasks part of planning",
      paragraphs: ["A separate task tool would add another step to a busy planning routine. I placed checklist selection inside shift creation, letting managers assign opening, closing and maintenance routines while they schedule the work."],
      layout: "compact",
      images: [{ src: newShift, alt: "Shift creation form with the option to add checklists" }],
    },
    {
      id: "completion", label: "03 · Complete", title: "Keep guidance close at hand",
      paragraphs: ["Workers needed guidance they could use mid-shift. I kept instructions, progress and completion together on their existing devices, with optional notes and photos to record what happened without turning every task into an admin exercise."],
      layout: "compact",
      images: [{ src: mobileTasks, alt: "Mobile task list and task details with completion controls" }],
    },
    {
      id: "review", label: "04 · Review", title: "Oversight without interruption",
      paragraphs: ["Managers needed visibility without constant check-ins. I organised review around what was done, by whom and when, with incomplete tasks flagged and notes beside the relevant task. Comments keep follow-up in context after the shift."],
      images: [{ src: checklistReview, alt: "Manager review showing task completion, notes and attached evidence" }],
    },
    {
      id: "tablet-research", label: "05 · Iterate", title: "Research reshaped the shared tablet experience",
      paragraphs: [
        "Our initial approach connected tasks closely to individual shifts. Research showed that teams often organised this work collectively: many tasks belonged to the day or the team, rather than to one employee’s shift. That finding challenged the way we had structured the feature.",
        "We revisited the product model and designed shared daily checklists around that behaviour. On the workplace tablet, employees could see the day’s checklists and completion progress together. The iteration made the team’s way of working the starting point for the design.",
        "Because employees used the tablet briefly while working, I prioritised quick access to tasks, clear completion states and instructions alongside each action. The shared overview made progress visible without asking people to navigate through individual shifts to understand the day’s work.",
      ],
      images: [{ src: checklistTablet, alt: "Shared tablet showing daily opening and closing checklists, task instructions and completion progress", caption: "The iterated tablet experience · Shared daily checklists and visible team progress" }],
    },
  ],
  outcomeTitle: "Connecting research, product logic and everyday use",
  outcome: "I designed Checklists as a connected workflow, from reusable instructions and planning to completion and review, balancing managers’ need for visibility with employees’ need to get on with the work. My contribution went beyond the screens: I used research to challenge our initial assumptions, helped reshape the product model around shared responsibility, and translated that logic into clear interactions across desktop, tablet and mobile. Reusing existing workflows, keeping guidance close to each task and making progress visible gave the feature a coherent place within Squadra.",
   related: [related.swaps, related.squadra],
};

export const swapsStudy: StudyContent = {
  name: "Shift Swaps",
  category: "Squadra feature design",
  title: "A better way to change plans.",
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
      paragraphs: ["Manually checking every replacement repeated the same work. I moved eligibility, notice periods and deadlines into an upfront setup, so each request could follow the manager’s rules without starting the checks again."],
      layout: "balanced",
      images: [{ src: swapRules, alt: "Shift swap settings for eligibility, notice periods and deadlines" }],
    },
    {
      id: "offer", label: "02 · Offer", title: "Start with the shift",
      paragraphs: ["Workers needed to find cover without chasing messages. I started the offer flow from their shift, added a short message and made its review status visible, keeping both the request and its progress in one place."],
      layout: "balanced",
      images: [{ src: offer, alt: "Mobile screens for creating a swap offer and following its status" }],
    },
    {
      id: "apply", label: "03 · Apply", title: "Only relevant opportunities",
      paragraphs: ["A marketplace is only useful if the offers are relevant. I designed the marketplace to show employees only the shift swaps they were eligible for, based on the shift requirements and swap rules set by their manager. This kept all the available shift offers relevant. After applying, employees could follow the status of their applications in the same place."],
      layout: "balanced",
      images: [{ src: application, alt: "Shift marketplace showing eligibility details and an application flow" }],
    },
    {
      id: "assignment", label: "04 · Assign", title: "Give managers the full picture",
      paragraphs: ["Approval needed more than a name. I brought applicants and their respective work data into one review view, so that managers could make informed decisions. Then, I connected assignment to the schedule update so agreeing to a swap and recording it became one action."],
      layout: "balanced",
      images: [{ src: swapReview, alt: "Manager comparison of swap applicants, workload and eligibility flags" }],
    },
    {
      id: "change-logic", label: "05 · Changes", title: "The decisions behind a simple experience",
      paragraphs: [
        "A swap could change after it had been offered or applied for. Updates to a shift, an employee’s contract or their availability could affect who was still eligible. I mapped those dependencies to define how the product should respond, rather than leave employees and managers to reconcile the changes themselves.",
        "This decision tree shows one part of that work: when to recalculate eligibility, remove an offer, cancel an application or update the swap details. It also distinguishes between changes that can happen quietly and those that need a notification or a record in the activity timeline, depending on whether someone has already applied or created the offer.",
        "Working through these branches connected system behaviour with communication. Each change needed an appropriate response, with enough context for the people affected to understand what had happened.",
      ],
      layout: "stacked",
      images: [{ src: swapsDecisionTree, alt: "Decision tree mapping eligibility recalculation after a change, including swap cancellation, offer removal, application status updates, notifications and timeline activity", caption: "An example of the change logic: defining the system response and communication for each affected person." }],
    },
  ],
  outcomeTitle: "Clarity, even when circumstances change",
  outcome: "I designed Shift Swaps around the decisions people needed to make, supported by rules that kept the process coherent as circumstances changed. That meant connecting eligibility, applications, approval and scheduling, while defining when to update the interface, explain a change or ask someone to act. The result was a considered balance between employee autonomy and manager oversight: relevant opportunities for workers, informed decisions for managers, and clear communication between them. The simplicity of the experience came from resolving the complexity behind it.",
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
      paragraphs: ["An insurance-led starting point hid Caveo’s wider offering. I organised the plan around familiar topics such as taxes, pensions and inheritance, giving each its own assessment, tasks and status within a reusable hexagon grid."],
      images: [
        { src: oldCaveo, alt: "Original Caveo insurance home screen", caption: "Before · Insurance home", },
        { src: planStart, alt: "Redesigned financial plan with hexagonal topic navigation", caption: "After · Topic-based financial plan" },
      ],
      layout: "compact",
    },
    {
      id: "progress", label: "02 · Progress", title: "Make the next step visible",
      paragraphs: ["A whole financial plan could feel like too much at once. I made topic states visible and changed the main action as users progressed, helping them see what was done and focus on the next manageable step."],
      layout: "phones",
      images: [
        { src: planStart, alt: "Financial plan before assessments begin", caption: "Start the financial check" },
        { src: planProgress, alt: "Financial plan with several topics in preparation", caption: "Work through the topics" },
        { src: planReady, alt: "Financial plan with topics prepared", caption: "See the plan take shape" },
      ],
    },
    {
      id: "guidance", label: "03 · Guidance", title: "Connect planning to a conversation",
      paragraphs: ["The plan needed to lead somewhere beyond completing a questionnaire. I brought appointments and review prompts into the experience, connecting digital progress to expert conversations and giving the plan a reason to evolve over time."],
      layout: "phones",
      images: [
        { src: appointment, alt: "Caveo plan with the next expert appointment", caption: "Next appointment" },
        { src: planComplete, alt: "Completed financial plan", caption: "Plan created" },
        { src: review, alt: "Financial topic flagged for review", caption: "Time to review" },
      ],
    },
    {
      id: "system", label: "04 · Design system", title: "Leave room for the plan to grow",
      paragraphs: ["New topics needed to fit without making the app harder to learn. I carried the same visual language across assessments, tasks and progress states, so the product could grow around a familiar structure."],
    },
  ],
  outcome: "A redesigned mobile experience covering topic-based planning, assessments, progress states and expert guidance, supported by a reusable visual system. The work reframed Caveo’s broader offering as a financial plan people could build and revisit over time.",
  pdf: { href: `${import.meta.env.BASE_URL}case-studies/caveo-case-study-sample.pdf`, label: "Download the case study PDF" },
  related: [related.squadra, related.nvoye],
};

export const nvoyeStudy: StudyContent = {
  name: "Nvoye",
  category: "Professional community",
  title: "A community built on trust.",
  lead: "Shaping a private diplomatic community from the ground up, through research, interviews and close collaboration with its founders.",
  hero: { src: messagesTablet, alt: "Nvoye messaging experience on a tablet" },
  meta: [
    { label: "Role", value: "Product Designer" },
    { label: "Team", value: "4 designers, 2 founders, 5 developers, 3 marketing experts" },
    { label: "Timeline", value: projects.nvoye.timeline },
    { label: "Platforms", value: "Desktop, tablet & mobile" },
  ],
  context: {
    title: "Building Nvoye from the ground up",
    paragraphs: [
      "A new posting means rebuilding everyday life as well as a professional network. Diplomats arrive in unfamiliar places, often with limited time to find local support, meet people and help their families settle in. Nvoye began as a dedicated space for that shared experience: a way to build useful professional connections and find community beyond work.",
      "I worked closely with the founders and design team from the ground up, contributing to research, interface design and UX writing. Over two years, the project grew to include a larger development and marketing team, alongside diplomatic advisors.",
    ],
  },
  sections: [
    {
      id: "research", label: "01 · Research", title: "Understanding life beyond the posting",
      paragraphs: [
        "Interviews helped us understand the difference between a professional network and a sense of belonging. Diplomats could have established work contacts and still find it difficult to build friendships outside work, particularly when arriving in a new country with unpredictable schedules or language barriers.",
        "The interviews brought practical and social needs together: adjusting to a different culture, navigating local services, finding activities and supporting family members. Shared interests could offer a route into local life, while unpredictable schedules made it harder to build those connections.",
        "We also heard contrasting expectations. One participant preferred to keep diplomatic relationships professional and build friendships elsewhere. Others valued a community where personal and official life overlapped. Alongside differing security restrictions, this made choice and clear boundaries essential; a shared profession did not mean a shared appetite for openness.",
      ],
      images: [{ src: nvoyeResearchThemes, alt: "Interview themes: belonging beyond work, different family circumstances and trust as a condition for participation" }],
    },
    {
      id: "research-synthesis", label: "02 · Synthesis", title: "Turning conversations into a product direction",
      paragraphs: [
        "We translated interview material into problem statements, distinguishing the experiences of diplomats arriving alone, moving with families and looking for connections through language or shared interests. This made the discussion more specific than a general ambition to build a network.",
        "The opportunity was more specific than a broad social feed or a professional directory. Members needed ways to find people through shared interests and language, discover activities around a posting and understand the boundaries of a space before participating. We mapped these needs to discovery, filters, groups and onboarding, treating them as directions to explore rather than validated answers.",
      ],
      images: [{ src: nvoyeResearchDirection, alt: "Research needs mapped to opportunities for discovery, relevant events and guided onboarding" }],
    },
    {
      id: "connections", label: "03 · Connections", title: "Put professional context first",
      paragraphs: ["A shared diplomatic background could make an introduction relevant, but members still needed to decide what kind of relationship they wanted to build. We centred profiles on role, embassy, posting and mutual connections, giving members context before they reached out. Separating existing contacts, requests and discovery supported different intentions: maintaining a relationship, responding to an introduction or finding someone new."],
      layout: "devices",
      images: [
        { src: connectionsDesktop, frame: "laptop", alt: "Nvoye desktop connections view with professional profiles" },
        { src: connectionsMobile, alt: "Nvoye mobile network activity view" },
      ],
    },
    {
      id: "events", label: "04 · Events", title: "Make discovery purposeful",
      paragraphs: ["Events offered a bridge into life at a posting: cultural activities, shared interests and opportunities to meet beyond official duties. Research also surfaced the difficulty of keeping track of invitations in busy chat threads. We designed discovery around the decision to attend: what the occasion was about, how it would take place and how visible participation would be. Themes, format and visibility information helped members assess an opportunity before committing to it."],
      layout: "devices",
      images: [
        { src: eventsDesktop, frame: "laptop", alt: "Nvoye event explorer organised by theme" },
        { src: eventMobile, alt: "Nvoye mobile event details" },
      ],
    },
    {
      id: "groups", label: "05 · Groups", title: "Explain the space before joining",
      paragraphs: ["For diplomats, joining a group could raise questions about professional visibility as well as personal interest. Participants wanted to know who was already involved and what the group did; restrictions on participation could differ between countries. We brought each group’s purpose, rules, visibility and administrators into the experience, so members could assess the space before joining. Clear language and consistent cues across devices supported informed participation."],
      layout: "devices",
      images: [
        { src: groupsDesktop, frame: "laptop", alt: "Nvoye desktop group page with purpose, privacy and administrator information" },
        { src: groupMobile, alt: "Nvoye mobile community group" },
      ],
    },
    {
      id: "messages", label: "06 · Messages", title: "Keep conversations easy to navigate",
      paragraphs: ["Conversations could span professional introductions and personal interests. Messaging needed to preserve enough identity and context for members to recognise a contact, without assuming that every connection was already a close relationship. Names and titles helped members recognise who they were speaking with, while an overview, search and filters helped them return to the right conversation across desktop and tablet."],
      images: [{ src: messagesDesktop, frame: "laptop", alt: "Nvoye desktop messaging overview with contacts and conversations" }],
    },
    {
      id: "usability-learning", label: "07 · Testing", title: "Testing what felt clear, and what did not",
      paragraphs: [
        "Usability sessions helped us examine how people understood the proposed experience. Participants asked for clearer direction at the start and an explanation of the onboarding questions. Some wanted more information about group members and activities before joining; others expected to invite people while creating an event.",
        "We grouped observations by onboarding, groups, events and the overall experience. This separated specific interaction problems from broader questions about the community’s purpose, family participation and privacy. It gave the team concrete areas to revisit, rather than treating positive overall feedback as proof that every part of the experience worked.",
        "I translated these findings into clearer guidance at key decision points: explaining the purpose of onboarding questions, making group expectations explicit and helping members understand their next step. Bringing interface design and UX writing together allowed me to address uncertainty through both the structure of the experience and the language within it.",
      ],
      images: [{ src: nvoyeResearchTesting, alt: "Usability observations and design implications for onboarding guidance, group information and event invitations" }],
    },
  ],
  outcomeTitle: "Giving the community vision a research-led foundation",
  outcome: "Research helped us define a community around the realities of diplomatic life: repeated moves, limited time, family needs and relationships that could be both personal and professional. As part of the design team, I helped translate those tensions into product structure, interface decisions and language. The resulting experience brought relevant people, groups and events together, with clear context to help members decide where and how to participate. We created a product for diplomats to build professional relationships, find people with shared interests and establish a support network as they settled into life in a new country.",
  related: [related.caveo, related.foster],
};

export const fosterStudy: StudyContent = {
  name: "Foster the Family",
  category: "UX/UI design & UX writing",
  title: "A clearer path to support.",
  lead: "A focused redesign of key pages, using language, navigation and design to help families find support and others get involved.",
  hero: { src: fosterHero, alt: "Foster the Family live homepage with clear Get Help and Donate actions" },
  meta: [
    { label: "Role", value: "UX/UI Designer & UX Writer" },
    { label: "Team", value: "Independent designer with organisation stakeholders" },
    { label: "Engagement", value: "Short-term, focused redesign" },
    { label: "Scope", value: "Homepage, Get Help & Donate" },
  ],
  context: {
    title: "A small brief with room to do more",
    paragraphs: [
      "Foster the Family supports foster, adoptive and kinship families. I was hired for a quick redesign of a few key pages, but much of the opportunity was in the language and how information was organised.",
      "Alongside the UI, I worked extensively on UX writing, navigation and page structure: making the support easier to understand and the invitation to help easier to act on.",
    ],
  },
  sections: [
    {
      id: "navigation", label: "01 · Navigation", title: "Start with what people came to do",
      paragraphs: ["The original navigation asked visitors to explore the organisation through About Us and Where We Serve. I helped make the main routes more direct: Get Help for families and Get Involved for supporters, with local offices still easy to find."],
      layout: "stacked",
      images: [
        { src: fosterBefore, alt: "Original navigation: About Us, Where We Serve, Blog, Contact Us and Give Now", caption: "Before · Navigation organised around the organisation", preview: "navigation" },
        { src: fosterNav, alt: "Current navigation with Get Help and Get Involved alongside local offices", caption: "After · Clear routes for families and supporters" },
      ],
    },
    {
      id: "get-help", label: "02 · Get Help", title: "Make the support easier to understand",
      paragraphs: ["The original page combined a location search with a dense description of services. I worked on clearer language and a more readable hierarchy, distinguishing local offices from support groups and giving the different kinds of help their own space."],
      layout: "comparison",
      images: [
        { src: fosterBefore, alt: "Original I Need Help page with location map and a compact list of support services", caption: "Before · Original page supplied from the project" },
        { src: fosterHelp, alt: "Redesigned Get Help page with separate routes to local offices and support groups, followed by service descriptions", caption: "After · Current live page, opening sections" },
      ],
      link: { href: "https://www.fosterthefamily.org/get-help", label: "View the live Get Help page" },
    },
    {
      id: "homepage", label: "03 · Homepage", title: "Connect the mission to the next step",
      paragraphs: ["The homepage needed to welcome both families and people ready to help. I worked on the writing, hierarchy and layout to connect the mission with practical support, keeping Get Help and Donate prominent and making the programmes easier to explore."],
      images: [{ src: fosterHomeSupport, alt: "Live homepage section explaining how Foster the Family helps, with programme tabs and descriptions", caption: "Homepage · Making the organisation’s support more tangible" }],
      link: { href: "https://www.fosterthefamily.org/", label: "View the live homepage" },
    },
    {
      id: "donate", label: "04 · Donate", title: "Give the invitation to help meaning",
      paragraphs: ["I redesigned the donation page and helped shape its language around the families a gift supports. The page connects that invitation to practical giving options, explaining ongoing support through the monthly programme alongside one-time donations."],
      images: [
        { src: fosterDonate, alt: "Live donation page opening, connecting giving to support for children and families", caption: "An invitation grounded in the mission" },
        { src: fosterGiving, alt: "Donation page explaining monthly giving levels and the support each contributes towards", caption: "Making ongoing support concrete" },
      ],
      link: { href: "https://www.fosterthefamily.org/donate", label: "View the live Donate page" },
    },
  ],
  outcomeTitle: "A short engagement. A clearer direction.",
  outcome: "I joined with a brief to redesign a few key pages and brought language, information architecture and visual design into the same conversation. I clarified the routes for families and supporters, gave services a more understandable hierarchy, and shaped copy around what visitors needed to know and do. Each design decision had a purpose: helping people find support, understand the mission or choose how to contribute. Within a short engagement and a defined scope, I gave the Homepage, Get Help and Donate pages a more coherent structure and a clearer rationale — connecting the organisation’s message to practical next steps.",
  related: [related.nvoye, related.squadra],
};
