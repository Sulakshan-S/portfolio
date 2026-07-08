# Portfolio Website

A personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and tech stack, with a working contact form and a protected admin dashboard for managing messages.

**Live demo:** _add your deployed URL here_

---

## Features

- **Home** — Hero section, About, Skills, Tech Stack, Projects, and Contact, all on a single scrollable page
- **Contact form** — sends messages directly to email via EmailJS
- **Admin dashboard** — protected route with login, for viewing and managing messages received through the contact form
- **Resume download** — downloadable PDF resume
- **Fully responsive** — works across desktop, tablet, and mobile
- **Dark, developer-focused UI** — built entirely with Tailwind CSS, no external UI kit

## Tech Stack

**Frontend**
- React 19
- React Router
- Tailwind CSS 4
- React Icons

**Integrations**
- EmailJS — contact form email delivery

**Tooling**
- Vite — build tool and dev server
- ESLint — linting

## Project Structure

```
src/
├── assets/            # Images and static assets
├── components/        # UI components (sections, layout, admin, common)
├── context/            # React context (auth)
├── pages/              # Route-level pages (Home, Admin Dashboard)
├── App.jsx
├── main.jsx
└── index.css
public/
├── resume.pdf
└── ...
```

## Getting Started

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd <project-folder>

# Install dependencies
npm install
```

### Environment Variables

This project uses EmailJS for the contact form. Create a `.env` file in the root directory with your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> Adjust variable names to match however they're referenced in `Contact.jsx` / your email service file.

### Running Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
```

The optimized build output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Admin Dashboard

The site includes a protected `/admin` route for viewing contact form submissions. Access requires login through the admin authentication flow. Update credentials/auth logic in `src/context/AuthContext.jsx` before deploying.

## Deployment

This project is built with Vite and can be deployed to any static hosting provider, such as:
- Vercel

Build the project with `npm run build` and deploy the contents of the `dist/` folder.

## License

This project is open for personal use and reference. Feel free to fork it for your own portfolio, but please don't copy the content (projects, bio, etc.) as-is.

## Contact

Feel free to reach out via the contact form on the site, or connect with me on [LinkedIn](#) / [GitHub](#).
