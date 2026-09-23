export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  role: string;
  team: string;
  timeline: string;
  summary: string;
  pdfUrl?: string;
  challenges: string[];
  process: {
    phase: string;
    description: string;
  }[];
  outcomes: string[];
  images: string[];
}

export const projects: Record<string, Project> = {
  squadra: {
    id: "squadra",
    title: "Squadra",
    tagline: "Workforce management platform for shift-based businesses",
    category: "Workforce Management",
    description: "A workforce management ecosystem for any business that works in shifts, connecting manager and employee experiences across desktop, shared tablets and mobile. The UX challenge is to make complex rules, connected workflows and large amounts of operational data clear and actionable.",
    role: "UX/UI Designer & UX Writer",
    team: "Design lead working with 1 Product Manager, 3 Engineers, and 1 Founder",
    timeline: "2023–2024 (Ongoing)",
    summary: "I joined an established product and worked across its manager and employee experiences for more than two years. Customer feedback informed improvements to existing flows, alongside new features designed from scratch. My work spanned user flows, UI, UX writing and implementation support, including add-ons such as Checklists and Shift Swaps: small products within the wider ecosystem.",
    challenges: [
      "Design for managers under pressure who need to react quickly to changes",
      "Surface staffing problems early without creating information overload",
      "Enable decision-making across multiple time horizons (7-day vs monthly views)",
      "Create flows that work for both routine and exception cases"
    ],
    process: [
      {
        phase: "Research & Structure",
        description: "Mapped manager workflows, identified key decision points, and understood constraints of shift-based operations"
      },
      {
        phase: "Information Architecture",
        description: "Designed dashboard views that balance overview with actionable detail, structured around operational timeframes"
      },
      {
        phase: "Core Flows",
        description: "Built multi-step flows for Open Shifts (posting, applications, assignments) and messaging features"
      },
      {
        phase: "System Design",
        description: "Created alert systems for under/overstaffing, automated invoice generation, and billable item tracking"
      }
    ],
    outcomes: [
      "Manager dashboards supporting 7-day and monthly operational views",
      "Staffing forecast system with actionable alerts",
      "Complete Open Shifts feature from posting to assignment",
      "Internal messaging system between managers and employees",
      "Automated invoice generation with billable items"
    ],
    images: []
  },
  caveo: {
    id: "caveo",
    title: "Caveo",
    tagline: "Digital financial planning structured around life situations",
    category: "Financial Planning",
    description: "A platform that makes complex financial planning accessible by structuring information around life situations rather than financial products. The work focused on creating trust through clarity and structure.",
    role: "UX/UI Designer & UX Writer",
    team: "Design lead working with 1 Product Manager, 2 Engineers, and 1 Founder",
    timeline: "2023–2024 (Ongoing)",
    summary: "Caveo is a digital financial planning platform that structures complex financial topics around life situations rather than products. I led the UX and UI design, focusing on multi-step flows that reduce cognitive load, clear language that builds trust without jargon, and information architecture that makes financial planning feel manageable. The work spanned product features, marketing pages, and content strategy.",
    challenges: [
      "Explain complex financial topics without overwhelming users",
      "Build trust through structure and language rather than persuasion",
      "Design multi-step flows that feel manageable despite complexity",
      "Balance product features with marketing communication needs"
    ],
    process: [
      {
        phase: "Content Structure",
        description: "Organized financial topics around life situations (insurance, assets, real estate, taxes, inheritance)"
      },
      {
        phase: "User Flows",
        description: "Designed multi-step survey and planning flows that reduce cognitive load at each step"
      },
      {
        phase: "Product & Marketing",
        description: "Created product pages, landing pages, and pricing comparisons that maintain clarity"
      },
      {
        phase: "Language Design",
        description: "Collaborated on UX writing to ensure every screen communicates clearly without jargon"
      }
    ],
    outcomes: [
      "Multi-step \"Your Financial Plan\" flow with situational surveys",
      "Product and landing pages that explain without overwhelming",
      "Pricing and package comparison interface",
      "Survey screens for complex topics (insurance, inheritance, taxes)"
    ],
    images: []
  },
  nvoye: {
    id: "nvoye",
    title: "Nvoye",
    tagline: "Private digital platform and community for diplomats",
    category: "Professional Community",
    description: "A discrete professional platform designed for diplomats, emphasizing trust, professionalism, and meaningful interaction over social media dynamics.",
    role: "Product Designer",
    team: "Product Designer working with 3 other designers, 2 founders, and 5 developers",
    timeline: "2024–2026",
    summary: "Nvoye is a private professional platform designed for the diplomatic community, emphasizing discretion, trust, and meaningful interaction. As a Product Designer, I collaborated with three other designers, two founders and five developers on community features, member profiles, messaging and product storytelling. I also helped shape the UX writing. The work required designing for professionalism and security while avoiding social media patterns that would undermine trust.",
    challenges: [
      "Design for discretion and professionalism in a sensitive context",
      "Avoid social media patterns while maintaining engagement",
      "Create community features that feel trustworthy and purposeful",
      "Balance openness with privacy and security concerns"
    ],
    process: [
      {
        phase: "Community Design",
        description: "Designed member profiles and browsing that emphasize professional context over social metrics"
      },
      {
        phase: "Messaging System",
        description: "Built private messaging and group chat features with appropriate levels of discretion"
      },
      {
        phase: "Product Story",
        description: "Developed product storytelling and communication for community features"
      },
      {
        phase: "Trust Patterns",
        description: "Established design patterns that signal professionalism and security throughout the experience"
      }
    ],
    outcomes: [
      "Member profiles designed for professional context",
      "Community browsing interface that avoids social media patterns",
      "Private messaging and group chat system",
      "Product storytelling framework for community features"
    ],
    images: []
  },
  foster: {
    id: "foster",
    title: "Foster the Family",
    tagline: "Website redesign for family services organization",
    category: "Web Design",
    description: "A focused redesign of key pages, combining UX/UI design, UX writing and clearer navigation to help families find support and others get involved.",
    role: "UX/UI Designer & UX Writer",
    team: "Independent project in collaboration with organization stakeholders",
    timeline: "Short-term engagement",
    summary: "Foster the Family is a nonprofit supporting families in the foster care system. I was hired for a quick redesign of the homepage, Get Help and Donate pages. Alongside UI/UX design, I worked extensively on the language, navigation and information architecture to make support easier to find and participation easier to understand. My involvement focused on these key pages rather than the full website.",
    challenges: [
      "Make critical information easy to find for families under stress",
      "Balance emotional appeal with practical information",
      "Design for diverse audiences (families, donors, partners)",
      "Create a system that can scale with organizational growth"
    ],
    process: [
      {
        phase: "Information Architecture",
        description: "Restructured content around user needs and different audience types"
      },
      {
        phase: "Content Strategy",
        description: "Prioritized key information and designed clear pathways to action"
      },
      {
        phase: "Visual System",
        description: "Designed key page layouts that balance approachability with clarity"
      },
      {
        phase: "Responsive Design",
        description: "Ensured all key information is accessible on mobile devices"
      }
    ],
    outcomes: [
      "Restructured information architecture serving multiple audiences",
      "Clear pathways to key actions (getting help, donating, volunteering)",
      "Redesigned homepage, Get Help and Donate pages",
      "Clearer UX writing across navigation, support information and giving options"
    ],
    images: []
  }
};
