# Ajith M Portfolio

A responsive, accessible portfolio for Ajith M, built with Next.js, TypeScript, and Tailwind CSS. Professional projects are intentionally described at a safe, high level.

## Prerequisites

- Node.js 20.9 or later
- npm

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`. To run the production checks:

```bash
npm run lint
npm run build
```

## Updating content

All profile, skills, experience, projects, and recognition content is centralized in [src/data/portfolio.ts](./src/data/portfolio.ts). Update that file rather than scattering content changes through components.

The `showPhone`, `showClientNames`, and `showProjectAcronyms` settings record the intended disclosure defaults. Phone number, client names, client logos, and internal project acronyms are hidden by default. Only enable or add them after confirming that disclosure complies with employment agreements, NDAs, and client/employer policies.

## Deployment

1. Push the repository to GitHub.
2. Import it into Vercel.
3. Accept the detected Next.js settings and deploy under the available `vercel.app` subdomain.
4. Before sharing the deployment, check the public content, mobile navigation, email and profile links, metadata, and confidentiality settings.

Update the canonical `metadataBase`, sitemap URL, and robots sitemap URL in [src/app/layout.tsx](./src/app/layout.tsx), [src/app/sitemap.ts](./src/app/sitemap.ts), and [src/app/robots.ts](./src/app/robots.ts) if the deployed URL changes.

## Wireframe

The pre-implementation prototype remains available under [wireframe/](./wireframe/). It has no runtime dependency and can be opened directly in a browser.
