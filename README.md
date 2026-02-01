# Bonelli.dev

Software engineering portfolio built with Next.js, TypeScript, and Tailwind CSS.

## Structure

```
app/           — Pages (/)
components/    — Shared UI components
data/          — Project and skill data (single source of truth)
public/        — Static assets
```

## Adding a Project

Edit `data/projects.ts` and add an entry to the `projects` array. Set `featured: true` to show it on the home page.

## Development

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build && npm start
```

Or deploy to Vercel with zero config.
