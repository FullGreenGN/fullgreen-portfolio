# Portfolio

[![CI](https://github.com/FullGreenGN/fullgreen-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/FullGreenGN/fullgreen-portfolio/actions/workflows/ci.yml)

A personal portfolio website built with Next.js — featuring an interactive project showcase, a career timeline, bilingual content (French / English) and dark mode.

## Features

- **Home** — animated hero with marquee, about section, experiences preview, bento-style project grid, infinite scrolling tech stack, contact section
- **Achievements** (`/achievements`) — filterable project list with expandable accordion cards and an open-source call-to-action
- **Experiences** (`/experiences`) — vertical timeline of professional experiences, education and certifications
- **Internationalization** — French and English powered by `next-intl`
- **Dark / light theme** — system-aware theme switching with `next-themes`
- **SEO ready** — metadata API, Open Graph image, JSON-LD structured data, sitemap and robots
- **Animations** — smooth motion-driven interactions via `motion`

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | [Next.js](https://nextjs.org) 16 (App Router, Turbopack) |
| UI | [React](https://react.dev) 19, [Tailwind CSS](https://tailwindcss.com) v4 |
| Language | [TypeScript](https://www.typescriptlang.org) |
| i18n | [next-intl](https://next-intl.dev) |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Animations | [motion](https://motion.dev) |
| Icons | [simple-icons](https://simpleicons.org) |
| Tooling | [Biome](https://biomejs.dev) (lint + format), pnpm |

## Getting Started

### Prerequisites

- **Node.js** 20.9 or later
- **pnpm** 11 (enabled automatically through [Corepack](https://nodejs.org/api/corepack.html))

### Installation

```bash
# Enable pnpm through Corepack (once per machine)
corepack enable

# Install dependencies
pnpm install
```

### Environment Variables

All variables are **optional** — sensible fallbacks are used in development.

| Variable | Description | Default |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL used for metadata and the sitemap | `http://localhost:3000` |
| `NEXT_PUBLIC_GITHUB_URL` | GitHub profile link | `https://github.com` |
| `NEXT_PUBLIC_LINKEDIN_URL` | LinkedIn profile link | `https://www.linkedin.com` |

Create a `.env.local` file at the project root to override them:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.tld
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server (Turbopack) |
| `pnpm build` | Create an optimized production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run Biome checks (lint + format) |
| `pnpm format` | Auto-format files with Biome |

## Project Structure

```
src/
├── app/                # App Router pages and metadata files
│   ├── achievements/   # Projects page
│   ├── experiences/    # Career timeline page
│   └── ...
├── components/         # Reusable UI components
├── config/             # Typed data sources (projects, experiences, stack…)
├── i18n/               # Routing and locale handling
└── messages/           # Translation files (fr.json, en.json)
```

## Deployment

The easiest way to deploy is on [Vercel](https://vercel.com):

1. Push the repository to GitHub
2. Import it in Vercel — the framework preset is detected automatically
3. Set the optional environment variables in the project settings

Any Node.js-compatible host works as long as it supports pnpm and Node.js 20.9+.

## Contributing

Bug reports and feature requests are welcome — please use the [issue templates](.github/ISSUE_TEMPLATE). Pull requests should follow the [PR template](.github/pull_request_template.md); CI runs lint, type-check and build on every change.

## License

Distributed under the [MIT License](LICENSE).
