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
  
  { client: "Confidential Healthcare Client", title: "Secure Healthcare Messaging Platform", abstract: "A secure healthcare messaging application supporting real-time communication among care teams and patients, secure document/image sharing, and notifications.", contribution: "Developed cross-platform web, Android, iOS, and iPad experiences with Angular and Ionic/Capacitor; contributed to .NET Core REST APIs, PostgreSQL integration, and Twilio-powered messaging and notifications.", technologies: ["Angular", "Ionic", "Capacitor", ".NET Core", "PostgreSQL", "Twilio", "GCP"] },
  { client: "Enterprise Client Projects", title: "Enterprise Workflow Applications", abstract: "Team-delivered enterprise applications for workflow approvals, dashboard tracking, audit trails, role-based access control, automated notifications, and document management.", contribution: "Developed and enhanced application features using frontend, API, data-access, database, and cloud-queue technologies.", technologies: [".NET Core", "Entity Framework", "Dapper", "Angular", "React", "PostgreSQL", "MSSQL", "AWS Lambda", "Amazon SQS"] },
] as const;

export const awards = [
  ["Client's Champion & Learning Champion", "Received through the quarterly Rewards & Recognition program."],
  ["Best Team Player", "Recognized for teamwork, collaboration, and contributions to project success."],
  ["Hackathon recognition", "Participated in two organization-level hackathons, securing 3rd place in one and receiving a Certificate of Appreciation."],
] as const;
