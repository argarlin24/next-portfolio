# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 14 portfolio website using the App Router architecture, styled with Tailwind CSS and DaisyUI. Content is managed through DatoCMS and fetched via GraphQL with full type safety through code generation.

## Development Commands

```bash
# Start development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint and auto-fix
npm run lint

# Format code with Prettier
npm run format

# Generate TypeScript types from GraphQL schema
npm run create-types
```

## Architecture

### Dynamic Page Rendering with DatoCMS

The site uses a catch-all route (`src/app/[[...slug]]/page.tsx`) that:
1. Fetches all page slugs at build time via `generateStaticParams()`
2. Queries DatoCMS for page content based on slug (defaults to "homepage" for root)
3. Renders components dynamically through the component generator pattern

### Component Generator Pattern

Located in `src/utils/componentGenerator.tsx`, this utility maps DatoCMS component types to React components:
- Matches `_modelApiKey` from CMS to corresponding React component
- Supported components: Navigation, Hero, Switcher, SingleInstance
- **When adding new components**: Add the case to the switch statement and import the component

### GraphQL Integration

**Schema & Code Generation:**
- GraphQL queries are in `src/graphql/*.graphql`
- Schema is fetched from DatoCMS (configured in `graphql.config.yml`)
- Run `npm run create-types` after modifying `.graphql` files to regenerate TypeScript types
- Generated types are output to `src/graphql/generated.ts`

**Making Requests:**
- Use the `request()` function from `src/lib/request.ts`
- Automatically includes authorization header from `DATO_CMS_TOKEN` environment variable
- All queries are typed via generated TypedDocumentNode types

### Styling

- **Framework**: Tailwind CSS + DaisyUI component library
- **Theme**: Single theme "emerald" (configured in `tailwind.config.ts`)
- Theme is set in root layout via `data-theme="emerald"` attribute

### Code Quality Tooling

**Husky Pre-commit Hook:**
- Automatically runs `npm run lint && npm run format` before each commit
- Located in `.husky/pre-commit`

**Import Order:**
- Prettier is configured with `@trivago/prettier-plugin-sort-imports`
- Import order: React/Next → Third-party → Project modules (assets, graphql, components, utils, etc.) → Relative imports
- See `prettier.config.js` for full configuration

## Environment Variables

Required in `.env`:
- `DATO_CMS_TOKEN`: API token for DatoCMS GraphQL endpoint

## Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── [[...slug]]/page.tsx     # Catch-all dynamic route
│   ├── layout.tsx               # Root layout with Footer
│   ├── not-found.tsx            # 404 page
│   └── globals.css              # Global styles
├── components/                   # React components (mapped from CMS)
├── graphql/                      # GraphQL queries and generated types
│   ├── *.graphql                # Query definitions
│   └── generated.ts             # Auto-generated TypeScript types
├── lib/
│   └── request.ts               # GraphQL request helper
└── utils/
    └── componentGenerator.tsx   # Maps CMS components to React components
```

## Common Workflows

**Adding a New Component:**
1. Create component in `src/components/[ComponentName]/`
2. Add GraphQL fragment to `src/graphql/templates.graphql` under the `components` field
3. Run `npm run create-types` to regenerate types
4. Import and add case to `src/utils/componentGenerator.tsx`

**Updating GraphQL Schema:**
1. Modify queries in `src/graphql/*.graphql`
2. Run `npm run create-types`
3. Update components to use new generated types
