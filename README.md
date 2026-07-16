# Ansh Bhardwaj — Portfolio

A single-page portfolio site built with React, TypeScript, Vite, Tailwind CSS, and Framer Motion, featuring animated page transitions and a bright, professional UI.

[![Open in Bolt](https://bolt.new/static/open-in-bolt.svg)](https://bolt.new/~/sb1-zxvcza3y)

## Features

- Home, Projects, Certificates, Experience, Skills, and Education sections
- Animated page transitions and flip card interactions
- Autoplaying project videos and media modal for certificates
- Fully responsive, light-themed UI built with Tailwind CSS

## Tech Stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool and dev server
- [Tailwind CSS](https://tailwindcss.com/) — styling
- [Framer Motion](https://www.framer.com/motion/) — animation
- [lucide-react](https://lucide.dev/) — icons

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (comes with Node.js)

### Installation

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
npm install
```

### Local Development

```bash
npm run dev
```

This starts the Vite dev server (by default at `http://localhost:5173`) with hot module reloading.

### Available Scripts

| Command             | Description                                       |
| -------------------- | -------------------------------------------------- |
| `npm run dev`        | Start the local development server                 |
| `npm run build`       | Type-check and build for production into `dist/`   |
| `npm run preview`     | Preview the production build locally                |
| `npm run lint`        | Run ESLint                                          |
| `npm run typecheck`   | Run the TypeScript compiler with no emit            |

## Project Structure

```
├── public/              # Static assets (certificates, videos)
├── src/
│   ├── components/      # Reusable UI components (Nav, TiltCard, FlipCard, etc.)
│   ├── pages/            # Page-level components (Home, Projects, Skills, etc.)
│   ├── App.tsx           # Root app component and page routing (state-based)
│   ├── data.ts           # Site content (projects, skills, experience, etc.)
│   └── main.tsx          # App entry point
├── index.html
├── vite.config.ts
└── tailwind.config.js
```

## Deployment

The project builds to a static `dist/` folder and can be hosted anywhere that serves static files. `vite.config.ts` uses a relative `base: './'` path so the build works correctly whether it's deployed at a domain root or a sub-path (e.g. a GitHub Pages project site).

### Option 1: GitHub Pages (automatic, included)

This repo includes a GitHub Actions workflow at `.github/workflows/deploy.yml` that builds and deploys the site automatically on every push to `main`.

1. Push this repository to GitHub (see below).
2. In your GitHub repo, go to **Settings → Pages**, and under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or re-run the workflow from the **Actions** tab). Your site will be published at:
   `https://<your-username>.github.io/<your-repo>/`

### Option 2: Vercel

1. Push the repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel auto-detects the Vite settings from `vercel.json` (build command `npm run build`, output `dist`). Click **Deploy**.

### Option 3: Netlify

1. Push the repo to GitHub.
2. Go to [app.netlify.com](https://app.netlify.com), click **Add new Site → Import an existing project**, and select the repo.
3. Netlify reads the build settings from `netlify.toml` automatically. Click **Deploy**.

### Manual build

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

Upload the contents of `dist/` to any static host (S3, Cloudflare Pages, Firebase Hosting, etc.).

## Pushing to GitHub

If this project isn't on GitHub yet:

```bash
# from the project root
git init                      # only if there's no existing .git folder
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

If the repo already has a remote configured, just commit and push:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## License

This project is provided as-is for personal portfolio use.
