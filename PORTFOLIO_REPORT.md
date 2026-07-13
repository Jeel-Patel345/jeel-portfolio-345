# 📋 Portfolio Project Report
**Owner:** Jeel Patel  
**Date:** July 13, 2026  
**Live URL:** https://jeel-portfolio-345.vercel.app  
**GitHub Repo:** https://github.com/Jeel-Patel345/jeel-portfolio-345  

---

## 🎯 Project Overview

A modern, fully responsive **Cybersecurity Portfolio** built with React + TypeScript + Vite. The portfolio showcases Jeel Patel's skills, projects, certifications, and education in the cybersecurity domain. It is designed with a premium off-white and orange color palette, smooth animations, and a recruiter-friendly layout.

---

## 🛠️ Tech Stack

| Technology     | Purpose                          |
|----------------|----------------------------------|
| React 18       | UI framework                     |
| TypeScript     | Type-safe JavaScript             |
| Vite           | Build tool and dev server        |
| Vanilla CSS    | Styling (no frameworks)          |
| Vercel         | Hosting and deployment           |
| GitHub         | Version control                  |

---

## 📁 Project Structure

```
portfolio-react/
├── public/                  # Static assets (resume PDF, favicon)
├── src/
│   ├── assets/              # Images (profile photo)
│   ├── components/          # All React components
│   │   ├── hero.tsx         # Hero / landing section
│   │   ├── Navbar.tsx       # Navigation bar with theme toggle
│   │   ├── About.tsx        # About me section
│   │   ├── skills.tsx       # Skills grid
│   │   ├── projects.tsx     # Project cards
│   │   ├── Certifications.tsx  # Certifications section
│   │   ├── Education.tsx    # Education timeline
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer
│   ├── context/
│   │   └── ThemeContext.tsx # Light/Dark mode context
│   ├── data/                # Static data (skills, projects etc.)
│   ├── hooks/               # Custom React hooks
│   │   ├── useCounter.ts    # Animated number counter
│   │   └── useScrollAnimation.ts # Scroll reveal animations
│   ├── pages/
│   │   └── ProjectsPage.tsx # Dedicated projects page
│   ├── styles/              # CSS files per component
│   │   ├── global.css       # CSS variables & theme tokens
│   │   ├── hero.css         # Hero section styles
│   │   ├── Navbar.css       # Navbar styles
│   │   ├── about.css        # About section styles
│   │   ├── skills.css       # Skills section styles
│   │   ├── projects.css     # Projects section styles
│   │   ├── certifications.css
│   │   ├── education.css
│   │   ├── contact.css
│   │   ├── footer.css
│   │   └── projectsPage.css
│   ├── App.tsx              # Root app component + routing
│   ├── App.css              # App-level styles
│   └── main.tsx             # React entry point
├── vercel.json              # Vercel routing config
├── tsconfig.app.json        # TypeScript config
├── vite.config.ts           # Vite config
└── package.json             # Dependencies
```

---

## 🌐 Sections / Pages

| Section          | Description                                               |
|------------------|-----------------------------------------------------------|
| **Hero**         | Name, typing animation title, CTA buttons, stats          |
| **About**        | Short bio with scroll animation                           |
| **Skills**       | Visual skills grid with icons                             |
| **Projects**     | Project cards with links                                  |
| **Education**    | Education timeline                                        |
| **Certifications** | Certifications display                                  |
| **Contact**      | Contact form                                              |
| **Footer**       | Social links and credits                                  |
| **Projects Page** | Dedicated full-page project view                         |

---

## ✨ Key Features

- **Typing Animation** — Hero title cycles through: *Cybersecurity Learner | Network Security | Hardware Troubleshooting* with a blinking cursor
- **Light / Dark Mode** — Toggle button in the navbar switches themes using CSS variables
- **Animated Statistics** — Counting animation for "5+ Projects" and "3+ Certifications"
- **Scroll Animations** — Elements fade in as the user scrolls down
- **Mouse Glow Effect** — Subtle glow that follows the mouse cursor
- **Responsive Design** — Fully mobile, tablet, and desktop friendly
- **Download Resume** — CTA button links directly to the resume PDF
- **View Projects** — Button navigates to the dedicated Projects page
- **Floating Badge** — Animated floating badge on the profile image
- **Cybersecurity Grid Background** — Subtle orange grid pattern in the hero

---

## 🎨 Design System

| Token              | Value                          |
|--------------------|--------------------------------|
| Primary Color      | Orange `#f97316`               |
| Background (light) | Off-white `#fdf8f3`            |
| Background (dark)  | Deep dark `#0a0a0a`            |
| Font               | System UI / Inter              |
| Border Radius      | 12px–16px                      |
| Transition Speed   | 0.3s–0.8s cubic-bezier         |

---

## 🚀 Deployment Info

| Property        | Value                                  |
|-----------------|----------------------------------------|
| Platform        | Vercel (Hobby plan)                    |
| Framework       | Vite                                   |
| Build Command   | `npm run build`                        |
| Output Dir      | `dist`                                 |
| Branch          | `main`                                 |
| Auto Deploy     | ✅ Yes (on every `git push`)           |
| Live URL        | https://jeel-portfolio-345.vercel.app  |

---

## 🔄 How to Update the Portfolio

1. Make changes to any file in VS Code
2. Test locally with `npm run dev`
3. Push changes to GitHub:
```bash
git add .
git commit -m "Your update description"
git push
```
4. Vercel automatically rebuilds and deploys within ~60 seconds ✅

---

## 📦 Dependencies

| Package              | Version  | Purpose                    |
|----------------------|----------|----------------------------|
| react                | ^18.x    | UI library                 |
| react-dom            | ^18.x    | DOM rendering              |
| typescript           | ^5.x     | Type checking              |
| vite                 | ^5.x     | Build tool                 |
| @types/react         | ^18.x    | React type definitions     |
| @types/react-dom     | ^18.x    | React DOM type definitions |

---

## ✅ Build Status

| Check                  | Status |
|------------------------|--------|
| TypeScript compilation | ✅ Pass |
| Vite build             | ✅ Pass |
| Vercel deployment      | ✅ Live |
| Responsive design      | ✅ Pass |
| Light/Dark mode        | ✅ Pass |

---

*Report generated on July 13, 2026 — Jeel Patel Portfolio v1.0*
