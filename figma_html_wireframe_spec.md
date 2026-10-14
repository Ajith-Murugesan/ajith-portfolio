# Figma-to-HTML Wireframe Specification

## Purpose

Create a high-fidelity, responsive **HTML/CSS wireframe** for Ajith M's developer portfolio *before* application implementation. The wireframe is the visual and interaction reference for the production build: reproduce the approved Figma composition as closely as possible while using only safe, resume-supported portfolio content.

This deliverable is not the final Next.js application. It must be a static, clickable prototype that validates layout, hierarchy, responsiveness, accessibility, and content disclosure before production code is written.

## Source-of-truth order

Apply requirements in this order when there is a conflict:

1. Approved Figma file, page, and frame annotations.
2. This wireframe specification.
3. `brd.md`.
4. `copilot_portfolio_implementation_prompt.md`.

Do not guess details that are absent from the Figma design. Record a concise open item for an unprovided asset, interaction, breakpoint behavior, or token rather than inventing it.

## Figma replication rules

### Required inputs

Before building the wireframe, collect:

- Figma file/page/frame URL and the specific desktop, tablet, and mobile frames to replicate.
- Design-system details: color styles, typography styles, spacing/grid, border radii, shadows, icon assets, and component variants.
- Prototype links or notes that describe navigation, hover, open/close, scroll, and theme behavior.
- Exportable assets only when their use is approved for public display.

### Fidelity requirements

- Match the approved Figma frame's information hierarchy, section order, alignment, whitespace, card geometry, type scale, colors, borders, and responsive behavior.
- Use CSS variables for every reusable Figma token. Name them by purpose, for example `--color-surface`, `--color-text-primary`, and `--space-section`.
- Match visible desktop and mobile states, not just a single large-screen screenshot.
- Use actual text from this specification instead of lorem ipsum.
- Use CSS layout primitives (Grid and Flexbox), semantic HTML, and a small amount of vanilla JavaScript only for interactive prototype controls.
- Do not use a canvas, a screenshot of the Figma page, absolute-position every content element, or a generic template that only loosely resembles the Figma design.
- Do not substitute stock portraits, client logos, client screenshots, dashboard screenshots, or made-up product imagery. Use plain surfaces, approved icons, CSS decoration, or clearly marked neutral placeholders where the Figma requires a visual asset.
- If a Figma visual conflicts with accessibility, preserve the visual intent with an accessible equivalent; do not ship inaccessible text contrast, keyboard traps, or content that exists only on hover.

### Measurement workflow

1. Inspect each target Figma frame at 100% zoom and document its frame width, container width, grid, side padding, section spacing, and component dimensions.
2. Extract font family, weight, size, line height, and letter spacing for display text, headings, body copy, navigation, labels, chips, and buttons.
3. Map colors, radii, strokes, shadows, and icon sizes to CSS custom properties.
4. Build the desktop reference first, then implement the corresponding tablet and mobile rules.
5. Compare the rendered wireframe with the target at the same viewport size. Correct meaningful differences in structure, spacing, typography, color, and component sizing before moving to the next section.
6. Verify all navigation and controls after the visual comparison; a faithful page with dead interactions is incomplete.

## Wireframe scope and file structure

Create an isolated static prototype with no backend, authentication, analytics, database, paid service, or API key.

```text
wireframe/
  index.html
  styles.css
  script.js
  assets/
    README.md
```

- `index.html` contains semantic page structure and real portfolio copy.
- `styles.css` contains design tokens, responsive layout, interaction styles, and reduced-motion rules.
- `script.js` is limited to progressive enhancements such as the mobile menu, theme toggle, copy-email control, or active navigation state.
- `assets/README.md` lists each approved local asset, its Figma source/component, licensing/disclosure status, and intended use. Do not add confidential or unapproved assets.

Keep the wireframe self-contained. It must open in a browser with no build step and no network dependency required for core appearance or interaction.

## Global page structure

```html
<a class="skip-link" href="#main-content">Skip to content</a>
<header>...</header>
<main id="main-content">
  <section id="home">...</section>
  <section id="about">...</section>
  <section id="skills">...</section>
  <section id="experience">...</section>
  <section id="projects">...</section>
  <section id="awards">...</section>
  <section id="education">...</section>
  <section id="contact">...</section>
</main>
<footer>...</footer>
```

Use only one `h1` (Ajith M). Maintain a logical heading sequence for all section titles and card titles. Wrap the primary menu in `nav` with an accessible label.

## Required content and section-by-section layout

Replicate Figma's exact placement and component treatment when available. The content below is mandatory even if the visual treatment differs.

### 1. Header and navigation

- Include the Figma logo/monogram treatment; use accessible text "Ajith M" if no approved logo asset exists.
- Navigation targets: About, Skills, Experience, Projects, Awards, Education, and Contact.
- Include GitHub and LinkedIn links only if their icons/links are shown in the approved design.
- Desktop: show the full navigation as designed.
- Mobile: replace it with an accessible menu trigger and expandable menu. It must close with Escape, restore focus to the trigger, and close after a same-page navigation selection.
- Mark the current/active section only if that behavior exists in Figma or is needed for a clear prototype.

### 2. Hero (`#home`)

Use the first-viewport visual composition from Figma. Required content:

- Eyebrow/role label if present in Figma: `Full Stack Engineer`.
- `h1`: `Ajith M`.
- Headline: `Full Stack Engineer | .NET Core | React.js | Angular | AWS`.
- Summary: `Full Stack Engineer with 3+ years of experience building and maintaining web applications using React.js, Angular, Node.js, and .NET Core. Experienced in REST APIs, AWS and Azure integrations, SQL and NoSQL databases, query optimization, Agile delivery, and end-to-end feature development.`
- Primary call to action: `View Projects`, linking to `#projects`.
- Secondary call to action: `Contact Me`, linking to `#contact`.
- GitHub: `https://github.com/ajith-murugesan`
- LinkedIn: `https://www.linkedin.com/in/ajithmurugesan`

Do not show an "available for work" badge, a resume download, or an unsupported metric. If Figma includes a profile image that has not been supplied and approved, use a neutral geometric/initials placeholder that preserves the layout without implying it is Ajith's photo.

### 3. About (`#about`)

Include concise, resume-supported copy about end-to-end feature delivery, frontend and backend development, REST APIs, cloud integrations, SQL/NoSQL databases, query optimization, Agile work, and enterprise applications.

Avoid invented client scale, outcomes, percentages, team size, certificates, or personal ownership claims. Do not add a portrait or stock illustration unless it is an approved asset in the Figma file.

### 4. Skills (`#skills`)

Use the Figma card/chip/list treatment. Do not show progress bars, stars, or proficiency percentages.

| Group | Skills |
| --- | --- |
| Languages | C#, JavaScript, HTML, CSS |
| Frontend | React.js, Angular, Ionic, Capacitor |
| Backend & APIs | .NET Core, Node.js, Express.js, REST APIs, Entity Framework, Dapper |
| Databases | Microsoft SQL Server (MSSQL), PostgreSQL, MongoDB |
| Cloud & DevOps | AWS Lambda, Amazon S3, Amazon SQS, Azure Functions, Docker, Terraform |
| Tools & Integrations | Twilio, Git, GitHub, Agile/Scrum, GitHub Copilot, Windsurf |

### 5. Experience (`#experience`)

Show one organization, **KANINI Software Solutions Inc.**, as a career progression. Use Figma's timeline, cards, or stacked layout but preserve this order and exact date ranges:

1. **Junior Associate** — January 2025–Present  
   End-to-end features with React.js/Angular and .NET Core/Node.js; REST APIs; AWS Lambda/Azure Functions; SQL optimization; Agile collaboration.
2. **Trainee Associate** — January 2024–January 2025  
   Full-stack features; AWS S3/SQS; debugging, query optimization, and refactoring; sprint planning, code reviews, and release preparation.
3. **Intern Trainee** — February 2023–January 2024  
   Web features with .NET Core, Entity Framework, and Dapper; REST APIs, MSSQL operations, and internal enterprise tools.

The reading order must be understandable without the visual timeline connector. Do not invent location, named products, promotion dates beyond those stated, or performance metrics.

### 6. Featured professional projects (`#projects`)

Display exactly two confidentiality-safe cards unless Figma explicitly provides a compatible, approved third public project.

#### Secure Healthcare Messaging Platform

- Client label: `Confidential Healthcare Client`.
- Abstract: A secure healthcare messaging application supporting real-time communication among care teams and patients, secure document/image sharing, and notifications.
- Contribution: Developed cross-platform web, Android, iOS, and iPad experiences with Angular and Ionic/Capacitor; contributed to .NET Core REST APIs, PostgreSQL integration, and Twilio-powered messaging and notifications.
- Technologies: Angular, Ionic, Capacitor, .NET Core, PostgreSQL, Twilio, GCP.
- Confidentiality note: `Project details are generalized to respect confidentiality.`

#### Enterprise Workflow Applications

- Client label: `Enterprise Client Projects`.
- Abstract: Team-delivered enterprise applications for workflow approvals, dashboard tracking, audit trails, role-based access control, automated notifications, and document management.
- Contribution: Developed and enhanced application features using frontend, API, data-access, database, and cloud-queue technologies.
- Technologies: .NET Core, Entity Framework, Dapper, Angular, React, PostgreSQL, MSSQL, AWS Lambda, Amazon SQS.
- Confidentiality note: `Project details are generalized to respect confidentiality.`

Do not include a live-demo, source-code, case-study, or external-project button unless an approved, real public destination has been provided. Do not display DaVita, Deloitte, DSM, APT, ARP, PAPA, YODA, IArriveD, logos, internal URLs, screenshots, architecture diagrams, user information, or security/workflow implementation details.

### 7. Awards and recognition (`#awards`)

Use Figma's list/card layout with these supported items:

- Client's Champion Award and Learning Champion Award through the quarterly Rewards & Recognition program.
- Best Team Player Award for teamwork, collaboration, and contributions to project success.
- Participated in two organization-level hackathons; secured 3rd place in one and received a Certificate of Appreciation for an end-to-end technical hackathon project.

Do not invent award dates, competition names, project details, or award graphics.

### 8. Education (`#education`)

- **B.Tech in Information Technology**
- Coimbatore Institute of Engineering and Technology
- 2019–2023
- CGPA: 9.08/10

### 9. Contact (`#contact`)

- Use a direct email link: `mailto:meajithmurugesan@gmail.com`.
- Show approved LinkedIn and GitHub links.
- Location: Dharmapuri, Tamil Nadu, India.
- Do not show the phone number by default.
- Do not add a nonfunctional contact form. If Figma has a form design, show it only as a visibly non-submittable layout placeholder and label it `Contact form pending service configuration`; preferably replace it with the working email CTA.
- Optional copy-email behavior must use a real button, copy the displayed email, announce success in an `aria-live` region, and retain the mailto fallback.

### 10. Footer

- Include a dynamically rendered current year, `Ajith M`, and the approved profile links.
- Include a Back to top link only if it appears in Figma or improves the long-page mobile experience.
- Do not add fabricated social accounts, legal statements, or client references.

## Responsive specifications

Use the exact Figma breakpoints if they exist. Otherwise implement and document these layout ranges:

| Viewport | Range | Expected behavior |
| --- | --- | --- |
| Small mobile | 320–479 px | Single-column content; readable type; full-width/stacked CTAs when needed; mobile menu; no horizontal scrolling. |
| Large mobile | 480–767 px | Single-column content with generous gutters; cards remain readable without compressed chips or labels. |
| Tablet | 768–1023 px | Use the Figma tablet grid; allow two-column cards only when minimum readable widths are preserved. |
| Desktop | 1024–1439 px | Use the primary Figma desktop layout and navigation. |
| Wide desktop | 1440 px and above | Preserve a controlled maximum content width; do not stretch paragraphs/cards indefinitely. |

At every width:

- Maintain at least a 44 by 44 CSS-pixel hit area for interactive controls.
- Do not rely on hover to reveal core content.
- Prevent clipping, overflow, overlapping text, wrapped navigation collisions, and unscrollable mobile menus.
- Preserve meaningful section anchors below a sticky header by setting scroll margins.
- Ensure card grids collapse before cards become cramped.

## Interaction and state requirements

Replicate Figma component variants for default, hover, focus-visible, active/pressed, disabled, selected, open, and closed states where those variants exist.

- Anchor navigation must scroll to the intended section.
- Buttons that navigate must be anchors; controls that change UI state must be buttons.
- External GitHub and LinkedIn links opening a new tab require `target="_blank"` and `rel="noreferrer"`.
- Icon-only buttons require visible-on-focus labels or `aria-label` values.
- If a theme toggle appears in Figma, persist the chosen theme for the current browser and honor the operating-system preference on first visit. Verify both themes have sufficient contrast.
- Use only restrained transitions. Set `scroll-behavior: auto` and remove nonessential transitions/animations under `prefers-reduced-motion: reduce`.
- Never use autoplay video, parallax that impedes reading, custom cursor behavior, or animation required to understand content.

## Accessibility requirements

- Use `header`, `nav`, `main`, `section`, `article`, `aside` (only where meaningful), and `footer` landmarks.
- Give each section an accessible heading and associate navigation labels with the correct target.
- Provide a visible keyboard focus indicator that meets contrast requirements and is not removed by reset styles.
- Ensure foreground/background contrast meets WCAG AA: 4.5:1 for normal text and 3:1 for large text and meaningful UI boundaries.
- Mark purely decorative shapes/icons as `aria-hidden="true"`; provide text alternatives for meaningful images.
- Use list semantics for skills, experience bullets, awards, and technology lists.
- Do not encode meaning only with color, position, or a timeline connector.
- Test keyboard-only navigation, including skip link, menu open/close, same-page links, controls, and external links.

## Content safety and disclosure guardrails

- Treat the resume-derived content as the maximum approved factual scope.
- Hide client names, logos, project acronyms, phone number, internal URLs, private repositories, source code, screenshots, architecture diagrams, patient/user data, credentials, and proprietary details by default.
- Do not claim metrics, certifications, project outcomes, ownership of an entire product, or permissions that have not been supplied.
- Do not render dummy links (`#`), disabled-looking fake CTAs, or empty social icons.
- Before the final implementation, Ajith must confirm that all named clients, titles, assets, and project details are cleared by relevant employment, client, and NDA obligations.

## End-to-end review checklist

### Visual fidelity

- [ ] The Figma target frames, viewport dimensions, and implementation capture dates are recorded.
- [ ] The desktop, tablet, and mobile wireframe match their corresponding Figma layouts in hierarchy, section order, grid, spacing, typography, colors, and component dimensions.
- [ ] Reusable visual values are implemented as CSS variables rather than repeated magic values.
- [ ] No Figma screenshot is used as the page implementation.
- [ ] All required sections and factual copy are present.

### Functional verification

- [ ] Header links, hero CTAs, contact email, GitHub, LinkedIn, mobile navigation, theme toggle (if present), and Back to top link (if present) work.
- [ ] There are no dead buttons, placeholder destinations, console errors, broken assets, or unexpected horizontal overflow.
- [ ] The page works with JavaScript disabled except for optional enhanced controls; core reading and contact links remain available.

### Responsive and accessibility verification

- [ ] Inspect at 320, 375, 768, 1024, 1280, and the approved Figma frame widths.
- [ ] Verify keyboard-only use and visible focus at each interactive element.
- [ ] Verify mobile-menu focus management and Escape behavior.
- [ ] Verify text contrast and both color themes, if a theme toggle exists.
- [ ] Verify reduced-motion behavior.
- [ ] Verify heading order, landmarks, link names, and meaningful image alternatives with browser accessibility tooling.

### Disclosure verification

- [ ] The phone number is not visible by default.
- [ ] Client names, logos, and internal project acronyms are not displayed.
- [ ] No private source, credentials, personal health/user data, internal URL, confidential screenshot, or proprietary diagram is included.
- [ ] Every external destination is real, approved, and uses the intended URL.

## Wireframe handoff package

Do not begin the production application until the following are available:

1. Static wireframe files and instructions to open them locally.
2. Desktop, tablet, and mobile screenshots at the agreed comparison widths.
3. A list of Figma deviations, each with a reason and required owner decision.
4. A list of assets used, replaced, or still pending approval.
5. Completed review checklist with failed or pending items explicitly called out.
6. Written approval that the visual direction and disclosure-safe content can move to implementation.
