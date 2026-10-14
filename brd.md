# Business Requirements Document (BRD)
## Personal Portfolio Website — Ajith M

**Document version:** 1.0  
**Status:** Draft — review before implementation  
**Date:** 14 October 2026  
**Business owner:** Ajith M  
**Primary audience:** Recruiters, hiring managers, technical peers, and potential professional contacts  
**Delivery approach:** Free-first portfolio website implemented with GitHub Copilot

---

## 1. Executive Summary

The website will present Ajith M as a Full Stack Engineer with 3+ years of experience building and maintaining web applications. It will communicate his technical capabilities, career progression, professional project contributions, education, and recognition in a concise, credible, accessible format.

The initial release will use free/open-source tools and eligible free-tier hosting. It will not require a database, authentication, paid API, paid template, or proprietary project source code. Professional client projects will use confidentiality-safe defaults.

## 2. Business Context and Objectives

A resume provides a compact summary but limited room to explain project context, technical breadth, and career progression. A portfolio gives visitors a shareable online destination to review this information and contact Ajith.

### 2.1 Business objectives

- Establish a professional online presence with a stable public URL.
- Make full-stack capabilities and career progression easy to understand.
- Showcase approved high-level client project summaries without disclosing confidential material.
- Provide direct email, LinkedIn, and GitHub links.
- Keep launch and maintenance costs at zero where feasible.
- Make content easy to update as experience and projects change.

### 2.2 Success measures

| Measure | Success condition |
|---|---|
| Content completeness | All agreed portfolio sections are present and populated with resume-supported facts. |
| Navigation | All navigation and calls to action lead to valid destinations or page sections. |
| Responsive usability | Content and navigation remain usable on mobile, tablet, and desktop viewports. |
| Build quality | Lint/type checks and production build pass, or any environment blocker is documented. |
| Confidentiality | No private source code, internal URLs, client logos, sensitive data, or unapproved identifiers are published. |
| Cost | No paid service is required for the initial release; optional costs are explicitly identified. |

## 3. Stakeholders and Users

| Stakeholder | Need / responsibility |
|---|---|
| Ajith M — owner | Owns content, approves disclosures, updates details, and decides when to publish. |
| Recruiters / hiring managers | Review skills, experience, projects, education, and contact information. |
| Technical peers | Understand technologies and engineering work represented. |
| Professional contacts | Reach Ajith through approved channels. |
| GitHub Copilot | Implements requirements, runs available checks, fixes errors, and reports actual results. |

## 4. Scope

### 4.1 In scope

- Responsive portfolio with Hero, About, Skills, Experience, Professional Projects, Awards, Education, Contact, and Footer.
- Resume-derived content stored in centralized typed data files or Markdown/MDX.
- Two generalized professional project case studies.
- Accessible navigation, semantic structure, visible focus states, and reduced-motion support.
- SEO metadata, social preview metadata, favicon, and suitable sitemap/robots configuration.
- GitHub source control, README, local validation, and free-tier deployment instructions.
- Optional accessible theme toggle and subtle animation if they do not delay core requirements.

### 4.2 Out of scope

- Database, user accounts, authentication, or an admin CMS.
- Proprietary source code, private repositories, internal URLs, client screenshots, or architecture diagrams.
- Client logos or identifying details without approval.
- Paid domain, paid hosting, paid APIs, paid templates, or required paid component libraries.
- Custom contact-message backend; email link is sufficient for version 1.
- Analytics/tracking by default and invented metrics, testimonials, certifications, or claims.

## 5. Proposed Technology

| Area | Proposed choice | Rationale / constraint |
|---|---|---|
| Framework | Next.js App Router | React framework with routing, metadata, and optional server functionality. |
| Language | TypeScript, strict mode | Maintainability and type checking. |
| Styling | Tailwind CSS | Responsive styling without paid dependencies. |
| UI components | Native components; shadcn/ui selectively | Avoid unnecessary dependency growth. |
| Icons | Lucide or existing equivalent | Consistent, lightweight iconography. |
| Content | Typed local data / Markdown / MDX | No database required for static content. |
| Source control | GitHub | Version history and repository management. |
| Hosting | Vercel Hobby, subject to current terms | Deployment with a provided subdomain. |
| Contact | `mailto:` link | No external service or secret required. |

A custom domain may cost money and is not required for launch. Verify current hosting plan terms and limits before deployment.

## 6. Functional Requirements

| ID | Feature | Requirement | Priority |
|---|---|---|---|
| FR-01 | Navigation | Provide section navigation; mobile navigation must work with keyboard and assistive technology. | Must |
| FR-02 | Hero | Show Ajith M, Full Stack Engineer headline, resume-derived summary, and project/contact calls to action. | Must |
| FR-03 | Profile links | Provide valid email, LinkedIn, and GitHub links using supplied URLs. | Must |
| FR-04 | About | Summarize end-to-end delivery, API development, cloud integrations, databases, and enterprise work using supported facts. | Must |
| FR-05 | Skills | Group listed skills; do not invent proficiency ratings. | Must |
| FR-06 | Experience | Show KANINI Software Solutions Inc. and the three supplied roles/dates, with career progression. | Must |
| FR-07 | Projects | Show generalized Secure Healthcare Messaging Platform and Enterprise Workflow Applications case studies. | Must |
| FR-08 | Confidentiality | Hide client names, logos, and internal acronyms by default or use generic labels. | Must |
| FR-09 | Project cards | Show abstract, contribution, and supported technologies; no dead demo/source buttons. | Must |
| FR-10 | Awards | Include the stated awards and hackathon recognition without invented dates/details. | Must |
| FR-11 | Education | Show B.Tech IT, institution, 2019–2023, CGPA 9.08/10. | Must |
| FR-12 | Contact | Show email, LinkedIn, GitHub; phone number hidden by default and configurable. | Must |
| FR-13 | Footer | Show current year and relevant profile links. | Must |
| FR-14 | SEO | Provide title, description, social metadata, and canonical URL configuration. | Must |
| FR-15 | Maintainability | Keep profile and project content in centralized files, not scattered across UI components. | Must |
| FR-16 | Theme/motion | Optional theme toggle and restrained animation; respect reduced-motion preferences. | Should |
| FR-17 | Résumé download | Show only if an approved résumé file is intentionally added. | Should |

## 7. Content Requirements

### 7.1 Profile and skills

- **Name:** Ajith M
- **Headline:** Full Stack Engineer | .NET Core | React.js | Angular | AWS
- **Location:** Dharmapuri, Tamil Nadu, India
- **Email:** meajithmurugesan@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/ajithmurugesan
- **GitHub:** https://github.com/ajith-murugesan
- **Summary:** 3+ years with React.js, Angular, Node.js, .NET Core, REST APIs, AWS/Azure integrations, SQL/NoSQL databases, query optimization, Agile delivery, and end-to-end feature delivery.

**Technical skills**
- Languages: C#, JavaScript, HTML, CSS.
- Frontend: React.js, Angular, Ionic, Capacitor.
- Backend/APIs: .NET Core, Node.js, Express.js, REST APIs, Entity Framework, Dapper.
- Databases: Microsoft SQL Server, PostgreSQL, MongoDB.
- Cloud/DevOps: AWS Lambda, Amazon S3, Amazon SQS, Azure Functions, Docker, Terraform.
- Tools/integrations: Twilio, Git, GitHub, Agile/Scrum, GitHub Copilot, Windsurf.

### 7.2 Work experience

| Organization / role | Dates | Resume-supported content |
|---|---|---|
| KANINI Software Solutions Inc. — Junior Associate | Jan 2025–Present | End-to-end features using React/Angular and .NET Core/Node.js; REST APIs; AWS Lambda/Azure Functions; SQL optimization; Agile collaboration. |
| KANINI Software Solutions Inc. — Trainee Associate | Jan 2024–Jan 2025 | Full-stack features; AWS S3/SQS; debugging, query optimization, refactoring; sprint planning, code reviews, release preparation. |
| KANINI Software Solutions Inc. — Intern Trainee | Feb 2023–Jan 2024 | Web features using .NET Core, Entity Framework, Dapper; REST APIs, MSSQL, internal enterprise tools. |

### 7.3 Professional projects and disclosure

| Project | Safe default public title / label | Content basis |
|---|---|---|
| Healthcare messaging | **Secure Healthcare Messaging Platform** / **Confidential Healthcare Client** | High-level messaging, document/image sharing, notifications, biometric/PIN access, cross-platform app, Angular, Ionic/Capacitor, .NET Core, PostgreSQL, Twilio, GCP. |
| Enterprise applications | **Enterprise Workflow Applications** / **Enterprise Client Projects** | Generalized approvals, dashboards, audit trails, role-based access, notifications, document management, .NET Core, Entity Framework, Dapper, Angular, React, PostgreSQL, MSSQL, AWS Lambda, SQS. |

The resume names DaVita and Deloitte and includes internal project acronyms. These identifiers must not be published automatically. Ajith must verify employment terms, NDA, and client/employer policy before enabling names, acronyms, or logos. Even a project title or abstract may be restricted.

### 7.4 Awards and education

- Client’s Champion Award and Learning Champion Award through quarterly Rewards & Recognition.
- Best Team Player Award.
- Participated in two organization-level hackathons, placed 3rd in one, and received a Certificate of Appreciation for an end-to-end technical hackathon project.
- B.Tech in Information Technology, Coimbatore Institute of Engineering and Technology, 2019–2023, CGPA 9.08/10.

## 8. Non-Functional Requirements

| ID | Category | Requirement |
|---|---|---|
| NFR-01 | Responsive | Usable on mobile, tablet, laptop, and wide desktop. |
| NFR-02 | Accessibility | Semantic landmarks, logical headings, keyboard access, visible focus, accessible names, adequate contrast. |
| NFR-03 | Motion | Respect `prefers-reduced-motion`; content must not depend on animation. |
| NFR-04 | Performance | Prefer static/server-rendered content, optimized assets, limited client JavaScript, and no heavy visual effects. |
| NFR-05 | Privacy/security | No secrets, private URLs, client data, patient data, or proprietary code in public source/assets. |
| NFR-06 | SEO | Descriptive metadata, social preview metadata, and correct public URL configuration. |
| NFR-07 | Maintainability | Centralized typed content and documented development commands. |
| NFR-08 | Cost | No paid API, database, template, or hosting dependency for initial release. |
| NFR-09 | Reliability | All displayed links and controls work; no fake buttons or placeholder destinations. |
| NFR-10 | Compatibility | Use a stable toolchain compatible with the environment; document checks that cannot run. |

## 9. Assumptions, Dependencies, and Open Decisions

### 9.1 Assumptions

- The supplied resume is the source of truth for profile facts.
- The initial site is informational and does not require dynamic user data.
- Ajith reviews all content and public disclosures before deployment.
- GitHub and Vercel are used under their current free-plan terms.
- A custom domain is not required for launch.

### 9.2 Open decisions

| Item | Default |
|---|---|
| Client names | Hidden / generic label until permission is confirmed. |
| Project acronyms and logos | Hidden until permission is confirmed. |
| Phone number | Hidden by default. |
| Résumé download | Disabled until an approved file is added. |
| Contact form | Not required; use email link. |
| Custom domain | Optional future expense. |

## 10. Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Unauthorized client disclosure | Confidentiality or employment-policy issue. | Generic labels and hidden identifiers by default; owner verifies permissions. |
| Overengineering | Delayed launch and higher maintenance. | No database/authentication in v1; prioritize required content. |
| Free-tier changes | Deployment limitations. | Check current terms; avoid promising unlimited free hosting. |
| Unsupported claims | Reduced credibility. | Use resume-supported facts only; omit unknown metrics. |
| Broken controls | Poor user experience. | Test links and remove unimplemented actions. |
| Privacy exposure | Unwanted personal or project disclosure. | Hide phone by default; review public assets, metadata, and repository before launch. |

## 11. Acceptance Criteria

- [ ] The app starts locally using README instructions.
- [ ] Production build succeeds, or environment blockers are accurately documented.
- [ ] All required sections are populated with accurate resume-derived facts.
- [ ] Navigation and calls to action work on desktop and mobile.
- [ ] Client names, logos, and internal acronyms are hidden by default.
- [ ] No private source code, confidential screenshots, internal URLs, secrets, or sensitive data are exposed.
- [ ] Phone number is hidden by default.
- [ ] No paid service is required to run or deploy the initial version.
- [ ] Contact behavior is real and documented; no fake contact form is shown.
- [ ] SEO metadata, accessibility basics, responsive behavior, and reduced-motion support are implemented.
- [ ] Centralized files support straightforward content updates.
- [ ] README covers setup, validation, editing content, privacy settings, and deployment.
- [ ] Handover reports actual checks run, their results, and any remaining manual steps.

## 12. Delivery Plan

| Phase | Activities | Deliverable |
|---|---|---|
| 1. Inspect | Inspect repository, package manager, and conventions. | Assessment and implementation plan. |
| 2. Foundation | Set up/adapt Next.js, TypeScript, Tailwind, styles, and navigation. | Working responsive app shell. |
| 3. Content | Add typed resume-derived content and all required sections. | Complete portfolio content. |
| 4. Polish | Add accessibility, metadata, restrained interactions, and privacy defaults. | Polished user experience. |
| 5. Validate | Run lint, type checks, build, link review, and browser checks if available. | Validation results and fixes. |
| 6. Handover | Write README and deployment instructions. | Ready-to-run repository and handover. |

## 13. Deployment and Operations

- Store source in GitHub and keep secrets out of committed files.
- Deploy through Vercel after reviewing public content and current plan terms.
- Use the assigned `vercel.app` subdomain for initial launch.
- Verify the deployed page, mobile navigation, links, metadata, and confidentiality settings.
- For updates, edit centralized content, run checks, commit changes, and deploy.
- Do not claim deployment has occurred until it has actually been completed and verified.

## 14. Handover Requirements

At completion, the implementation assistant shall:
- List files created or changed.
- Provide exact local setup and run commands.
- Report lint, type-check, and build commands with actual outcomes.
- List checks that could not be run and why.
- Explain how to edit profile, skills, experience, awards, and projects.
- Explain how to control client-name, acronym, and phone visibility.
- Provide Vercel deployment and public-site verification steps.
- Remind the owner to review client disclosure permissions before publishing.

## Appendix A — Resume-derived technology inventory

C#, JavaScript, HTML, CSS; React.js, Angular, Ionic, Capacitor; .NET Core, Node.js, Express.js, REST APIs, Entity Framework, Dapper; Microsoft SQL Server, PostgreSQL, MongoDB; AWS Lambda, Amazon S3, Amazon SQS, Azure Functions, Docker, Terraform; Twilio; Git, GitHub; Agile/Scrum; GitHub Copilot and Windsurf.

## Appendix B — Implementation assistant instructions

- Implement requirements; do not return only a plan or sample code.
- Inspect existing files before modifying the repository and preserve useful work.
- Do not invent facts to fill gaps; omit unsupported content or mark TODOs.
- Prefer simple, robust implementations and avoid unnecessary dependencies.
- Do not claim a test passed unless it was actually executed and passed.
