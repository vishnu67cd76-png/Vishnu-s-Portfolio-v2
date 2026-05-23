# Vishnu — Portfolio (portfolio-v2)

Personal portfolio site built with **React**, **Vite**, and **Tailwind CSS**. Single-page layout with sections for hero, projects, skills, resume, services, and contact.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (20+ recommended)
- npm (included with Node)

## Quick start

```bash
# Clone or open the project folder, then:
npm install

# Copy env template and add your Formspree form ID (see below)
copy .env.example .env

npm run dev
```

Open the URL shown in the terminal (usually **http://localhost:5173**).

## Contact form (Formspree)

Messages are sent via [Formspree](https://formspree.io) (free tier works).

1. Sign up at [formspree.io](https://formspree.io).
2. Create a new form and set the notification email to `vishnu67cd76@gmail.com`.
3. Copy the form ID from your endpoint URL: `https://formspree.io/f/**YOUR_FORM_ID**`.
4. Create a `.env` file in the project root:

```env
VITE_FORMSPREE_FORM_ID=YOUR_FORM_ID
```

5. Restart `npm run dev` after changing `.env`.

For production (Vercel, Netlify, etc.), add the same variable in the host’s environment settings.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |
| `npm run compress-profile` | Re-compress `src/assets/images/profile.jpg` |

## Project structure

```
portfolio-v2/
├── public/              # Static assets (favicon)
├── src/
│   ├── assets/images/   # Profile & project screenshots
│   ├── components/      # Navbar, Hero, Projects, etc.
│   ├── App.jsx          # Page section order
│   ├── main.jsx         # React entry
│   └── index.css        # Tailwind + smooth scroll
├── index.html
├── vite.config.js
└── tailwind.config.js
```

Edit copy and links in `src/components/*.jsx`. Replace images in `src/assets/images/`.

## Deploy live

### Vercel (recommended)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Add environment variable: `VITE_FORMSPREE_FORM_ID` = your Formspree ID.
5. Deploy. Your site will be at `https://your-project.vercel.app`.

CLI option (after `npm i -g vercel`):

```bash
npm run build
vercel
```

### Netlify

1. Connect the GitHub repo at [netlify.com](https://www.netlify.com).
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add `VITE_FORMSPREE_FORM_ID` under **Site settings → Environment variables**.

### Manual / any static host

```bash
npm run build
```

Upload the contents of the `dist/` folder to any static host (GitHub Pages, Cloudflare Pages, etc.).

## Tech stack

- React 19
- Vite 8
- Tailwind CSS 3
- Framer Motion
- Lucide React & React Icons

## License

Private portfolio project — © Vishnu.
