export const profile = {
  name: "Ajith M",
  headline: "Full Stack Engineer | .NET Core | React.js | Angular | AWS",
  location: "Dharmapuri, Tamil Nadu, India",
  email: "meajithmurugesan@gmail.com",
  github: "https://github.com/ajith-murugesan",
  linkedin: "https://www.linkedin.com/in/ajithmurugesan",
  showPhone: false,
  showClientNames: false,
  showProjectAcronyms: false,
  summary:
    "Full Stack Engineer with 3+ years of experience building and maintaining web applications using React.js, Angular, Node.js, and .NET Core. Experienced in REST APIs, AWS and Azure integrations, SQL and NoSQL databases, query optimization, Agile delivery, and end-to-end feature development.",
} as const;

export const skillGroups = [
  ["Languages", ["C#", "JavaScript", "HTML", "CSS","Python"]],
  ["Frontend", ["React.js", "Angular", "Ionic", "Capacitor"]],
  ["Backend & APIs", [".NET Core", "Node.js", "Express.js", "REST APIs", "Entity Framework", "Dapper"]],
  ["Databases", ["Microsoft SQL Server", "PostgreSQL", "MongoDB"]],
  ["Cloud & DevOps", ["AWS Lambda", "Amazon S3", "Amazon SQS", "Azure Functions", "Docker", "Terraform"]],
  ["Tools & Integrations", ["Twilio", "Git & GitHub", "Agile/Scrum", "GitHub Copilot", "Windsurf"]],
] as const;

export const experience = [
  { role: "Junior Associate", period: "January 2025–Present", summary: "Deliver end-to-end features across React.js/Angular and .NET Core/Node.js. Develop REST APIs, cloud integrations with AWS Lambda and Azure Functions, and optimized SQL queries while collaborating in Agile teams." },
  { role: "Trainee Associate", period: "January 2024–January 2025", summary: "Developed full-stack features, integrated AWS S3 and SQS, and improved applications through debugging, query optimization, and refactoring. Participated in sprint planning, reviews, and release preparation." },
  { role: "Intern Trainee", period: "February 2023–January 2024", summary: "Developed and tested web features with .NET Core, Entity Framework, and Dapper; contributed to REST APIs, MSSQL operations, and internal enterprise tools." },
] as const;

export const projects = [
  {
    client: "Confidential Healthcare Client",
    title: "Secure Healthcare Messaging Platform",
    abstract: "A secure healthcare messaging application supporting real-time communication among care teams and patients, secure document/image sharing, and notifications.",
    contribution: "Developed cross-platform web, Android, iOS, and iPad experiences with Angular and Ionic/Capacitor; contributed to .NET Core REST APIs, PostgreSQL integration, and Twilio-powered messaging and notifications.",
    details: ["Real-time messaging and secure document/image sharing.", "Push notifications with biometric and PIN-based access.", "Cross-platform experiences for web, Android, iOS, and iPad."],
    technologies: ["Angular", "Ionic", "Capacitor", ".NET Core", "PostgreSQL", "Twilio", "GCP"],
  },
  {
    client: "Healthcare Workflow Platform",
    title: "SmartHandoff — Intelligent Patient Handoff Platform",
    abstract: "An AI-assisted healthcare workflow platform designed to improve patient transitions across hospital admissions, transfers, and discharges.",
    contribution: "Contributed to the platform design for real-time transition workflows, clinical coordination, secure access, and AI-assisted patient handoff capabilities.",
    details: ["Real-time patient transitions and bed management.", "Medication reconciliation and drug interaction alerts.", "AI-assisted discharge summaries and patient instructions.", "Automated follow-up reminders and appointment coordination.", "Role-based access, audit logging, and a secure patient portal."],
    technologies: ["Angular", "Python FastAPI", "WebSockets", "Twilio", "Gemini (Vertex AI)", "LangChain", "Scikit-learn", "PostgreSQL", "Redis", "Google Cloud Platform"],
  },
] as const;

export const enterpriseApplications = [
  {
    title: "Account Planning Platform",
    category: "Financial Planning | Workflow Automation",
    description:
      "Developed an enterprise financial planning platform to replace manual Excel-based planning with an automated and scalable solution. The platform uses historical data and predefined formulas to generate annual financial plans, improving planning consistency and operational efficiency.",
    contributions: [
      "Developed financial planning features, automated calculations, and a two-level submission workflow covering initial submission and review/final approval.",
      "Built backend APIs using ASP.NET Core, Entity Framework, and Web API to support business logic and data processing.",
      "Implemented responsive dashboards and submission interfaces using Angular and Angular Material.",
      "Integrated AWS S3 for cloud storage and AWS SQS for messaging and workflow processing.",
    ],
    impact: [
      "Reduced dependence on manual Excel-driven financial planning.",
      "Improved visibility into financial planning activities through dashboard tracking.",
      "Supported better efficiency and accountability across sector and industry leads.",
    ],
    technologies: ["ASP.NET Core", "ADO.NET", "Entity Framework", "Web API", "Angular", "Angular Material", "PostgreSQL", "AWS S3", "AWS SQS", "AWS Lambda"],
  },
  {
    title: "Architecture Review Platform",
    category: "Architecture Governance | Document Approval",
    description:
      "Developed a centralized enterprise platform to standardize architecture document reviews and approvals across project teams. The application supports multi-level validation by architects before documents are finalized.",
    contributions: [
      "Implemented multi-level approval workflows for architecture documents.",
      "Developed document export functionality and automated email notifications following approvals.",
      "Built responsive user interfaces using Angular and Angular Material.",
      "Contributed to backend APIs using ASP.NET Core, ADO.NET, and related data-access technologies for approval workflows and document management.",
    ],
    impact: [
      "Streamlined document review and approval processes.",
      "Improved consistency and traceability in architecture validation.",
      "Centralized documentation, approval workflows, and stakeholder notifications.",
    ],
    technologies: ["ASP.NET Core", "ADO.NET", "Entity Framework", "Web API", "Angular", "Angular Material", "PostgreSQL", "AWS S3", "AWS SQS", "AWS Lambda"],
  },
  {
    title: "Physical Access Management Portal",
    category: "Access Management | Security | Compliance",
    description:
      "Developed an enterprise access management platform for handling room and resource access requests across multiple regions. The application manages approvals, provisioning, periodic reviews, and audit activities.",
    contributions: [
      "Built multi-level approval workflows for access requests before provisioning.",
      "Implemented review cycles to support access extensions and revocations based on business requirements.",
      "Developed automated email notifications for submission, approval, provisioning, and expiry stages.",
      "Contributed audit features that enabled auditors to monitor access activities across regions.",
    ],
    impact: [
      "Strengthened access governance through structured approvals and auditing.",
      "Reduced manual coordination through automated notifications and review cycles.",
      "Improved centralized visibility into regional access management activities.",
    ],
    technologies: ["ASP.NET Core", "ADO.NET", "Entity Framework", "Web API", "Angular", "Angular Material", "PostgreSQL", "AWS S3", "AWS SQS", "AWS Lambda"],
  },
  {
    title: "Enterprise Resource and Document Repository",
    category: "Document Management | Knowledge Sharing | Access Governance",
    description:
      "Developed a centralized enterprise resource-sharing platform for organizing, searching, and securely accessing organizational documents. The platform supports controlled document access, role-based permissions, and approval-driven governance.",
    contributions: [
      "Developed document upload, search, and retrieval functionality.",
      "Implemented role-based access control for public, private, and restricted document access.",
      "Built multi-level approval workflows for requests to access restricted documents.",
      "Collaborated with cross-functional teams to deliver secure and user-friendly functionality.",
    ],
    impact: [
      "Centralized organizational document discovery and knowledge sharing.",
      "Improved access governance through role-based permissions and approvals.",
      "Streamlined document retrieval, sharing, and access request processes.",
    ],
    technologies: ["ASP.NET Core", "ADO.NET", "Entity Framework", "Web API", "Angular", "Angular Material", "PostgreSQL", "AWS S3", "AWS SQS", "AWS Lambda"],
  },
  {
    title: "Event Scheduling and Management Platform",
    category: "Event Management | Scheduling | QR Check-in",
    description:
      "Developed an event scheduling and management platform that enables users to organize events across organizational locations, allocate meeting rooms or spaces, manage participants, and coordinate attendance.",
    contributions: [
      "Developed event creation, participant management, and room allocation functionality.",
      "Implemented automated email notifications for event participants.",
      "Built QR code generation and distribution functionality to support event check-in.",
      "Developed participant data import and export functionality to improve administrative efficiency.",
    ],
    impact: [
      "Streamlined event scheduling and participant communication.",
      "Supported more efficient attendance tracking through QR-based check-in.",
      "Reduced manual administrative effort through participant data import and export.",
    ],
    technologies: ["ASP.NET Core", "ADO.NET", "Entity Framework", "Web API", "Angular", "Angular Material", "PostgreSQL", "AWS S3", "AWS SQS", "AWS Lambda"],
  },
] as const;

export const enterpriseStack = {
  Backend: ["C#", "ASP.NET Core", "Web API", "ADO.NET", "Entity Framework"],
  Frontend: ["Angular", "HTML", "SCSS", "Angular Material"],
  Database: ["PostgreSQL"],
  "Cloud & Messaging": ["AWS S3", "AWS SQS", "AWS Lambda"],
} as const;

export type PortfolioProject = {
  group: "Healthcare Applications" | "Enterprise Applications";
  category: string;
  title: string;
  description: string;
  contribution: string;
  details: readonly string[];
  impact: readonly string[];
  technologies: readonly string[];
};

export const portfolioProjects: readonly PortfolioProject[] = [
  ...projects.map((project) => ({
    group: "Healthcare Applications" as const,
    category: project.client,
    title: project.title,
    description: project.abstract,
    contribution: project.contribution,
    details: project.details,
    impact: [],
    technologies: project.technologies,
  })),
  ...enterpriseApplications.map((project) => ({
    group: "Enterprise Applications" as const,
    category: project.category,
    title: project.title,
    description: project.description,
    contribution: project.contributions[0],
    details: project.contributions,
    impact: project.impact,
    technologies: project.technologies,
  })),
];

export const awards = [
  ["Client's Champion & Learning Champion", "Received through the quarterly Rewards & Recognition program."],
  ["Best Team Player", "Recognized for teamwork, collaboration, and contributions to project success."],
  ["Hackathon recognition", "Participated in two organization-level hackathons, securing 3rd place in one and receiving a Certificate of Appreciation."],
] as const;
