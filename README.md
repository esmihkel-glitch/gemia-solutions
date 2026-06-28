# Gemia Solutions Landing Page

Modern one-page React + Tailwind CSS landing page for Gemia Solutions / GEMIA OU.

## Included

- React source code in `src/`
- Tailwind CSS and PostCSS configuration
- Public assets in `public/assets/`
- Production build in `dist/`
- `pnpm-lock.yaml` for reproducible installs

`node_modules/` is not included in the ZIP. Install dependencies after unpacking.

## Requirements

- Node.js 20 or newer
- pnpm

## Run Locally

```bash
pnpm install
pnpm run dev
```

Open the local URL shown in the terminal. By default Vite usually uses:

```text
http://127.0.0.1:5173/
```

## Build For Production

```bash
pnpm run build
```

The production files will be created in:

```text
dist/
```

## Preview Production Build

```bash
pnpm run preview
```

## Deploy

Upload the contents of the `dist/` folder to any static hosting provider, for example:

- Netlify
- Vercel
- Cloudflare Pages
- Zone/Eesti hosting static file hosting
- Any web server that can serve static HTML, CSS, JS, and image files

For static hosting, the publish/output directory is:

```text
dist
```

## Editing Content

Most visible text and section content is in:

```text
src/App.jsx
```

Global CSS and Tailwind imports are in:

```text
src/styles.css
```

The hero image is:

```text
public/assets/gemia-hero.png
```

## Contact Details On Site

- Brand: Gemia Solutions
- Legal name: GEMIA OU
- Registry code: 17005131
- Phone: +372 558 8084
- Email: gemiasolutions@gmail.com
- Service area: Estonia

