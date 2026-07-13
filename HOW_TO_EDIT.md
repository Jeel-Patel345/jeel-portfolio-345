# 🛠️ How to Edit Your Portfolio

A simple guide to help you make changes to your live portfolio website.

---

## ⚡ Quick Start (Every Time You Want to Edit)

1. Open **VS Code**
2. Open your project folder: `Desktop → portfolio-react`
3. Press **Ctrl + `** to open the terminal
4. Run: `npm run dev`
5. Open your browser at: **http://localhost:5173**
6. Make your changes — the browser updates live!

When done, push to make it live:
```
git add .
git commit -m "Describe your change"
git push
```

---

## 📝 Common Changes & Where to Make Them

---

### 1. 👤 Change Your Name or Bio Text
**File:** `src/components/hero.tsx`

- **Name:** Find `<h1>Jeel Patel</h1>` → change "Jeel Patel"
- **Bio paragraph:** Find the `<p>` tag below the typing text → edit the bio text
- **Typing titles:** Find the `TITLES` array at the top:
```tsx
const TITLES = [
  "Cybersecurity Learner",
  "Network Security",
  "Hardware Troubleshooting",
];
```
Change these words to whatever you want to display.

---

### 2. 🖼️ Change Your Profile Photo
**File:** `src/assets/profile.png`

- Replace `profile.png` in the `src/assets/` folder with your new photo
- ⚠️ Keep the **same filename** (`profile.png`) so nothing breaks

---

### 3. 📄 Change Your Resume
**File:** `public/sample (4).pdf`

- Replace the file in the `public/` folder with your new resume PDF
- Open `src/components/hero.tsx` and find:
```tsx
<a href="/sample (4).pdf"
```
- Change the filename to match your new PDF filename

---

### 4. 📊 Change the Stats (5+ Projects, 3+ Certifications)
**File:** `src/components/hero.tsx`

Find this section:
```tsx
<StatCounter target="5+" label="Projects" start={heroVisible} />
<StatCounter target="3+" label="Certifications" start={heroVisible} />
```
Change `"5+"` or `"3+"` to any number you want.

---

### 5. 🎨 Change Colors
**File:** `src/styles/global.css`

Find the `:root` section at the top:
```css
:root {
  --primary: #f97316;        /* Orange - main color */
  --background: #fdf8f3;     /* Off-white background */
  --text: #1a1a1a;           /* Dark text */
}
```
Change the hex color codes to your preferred colors.

---

### 6. 🗂️ Add a New Project
**File:** `src/data/` (look for a projects data file)

Or go to `src/components/projects.tsx` and add a new project card following the same format as existing ones.

---

### 7. 🏆 Add a New Certification
**File:** `src/components/Certifications.tsx`

Find the existing certifications and add a new one following the same structure.

---

### 8. 📚 Update Education
**File:** `src/components/Education.tsx`

Find the education entries and update your degree, college name, or year.

---

### 9. 📞 Update Contact Info
**File:** `src/components/Contact.tsx`

Update your email address or any social media links.

---

### 10. 🔗 Update Social Links (GitHub / LinkedIn)
**File:** `src/components/Footer.tsx` or `src/components/Navbar.tsx`

Find `href="https://github.com/..."` and replace with your actual profile links.

---

### 11. ✏️ Change Navbar Logo Text
**File:** `src/components/Navbar.tsx`

Find:
```tsx
<h2>Jeel<span>.dev</span></h2>
```
Change `Jeel` or `.dev` to whatever you want.

---

### 12. 🌙 Add/Remove Dark Mode
The dark mode toggle is already built in. It's the moon/sun button in the navbar.
To style how dark mode looks, edit `src/styles/global.css` and look for `[data-theme="dark"]`.

---

## 🚀 Push Changes to Live Website

After making any changes, run these 3 commands in the VS Code terminal:

```bash
git add .
git commit -m "What you changed"
git push
```

✅ Your live site at **jeel-portfolio-345.vercel.app** will update in ~60 seconds automatically!

---

## 📁 Quick File Reference Map

| What You Want to Change | File to Open |
|---|---|
| Name, bio, typing titles, stats | `src/components/hero.tsx` |
| Profile photo | `src/assets/profile.png` |
| Resume PDF | `public/` folder |
| Colors & theme | `src/styles/global.css` |
| Navbar logo & links | `src/components/Navbar.tsx` |
| About section | `src/components/About.tsx` |
| Skills list | `src/components/skills.tsx` |
| Projects | `src/components/projects.tsx` |
| Certifications | `src/components/Certifications.tsx` |
| Education | `src/components/Education.tsx` |
| Contact info | `src/components/Contact.tsx` |
| Footer | `src/components/Footer.tsx` |
| Hero section styles | `src/styles/hero.css` |

---

## 🆘 If Something Breaks

1. Press **Ctrl + Z** in VS Code to undo your change
2. Or run in terminal: `git restore .` (reverts all unsaved changes)
3. Or message me — I'm always here to help! 😊

---

*Saved: July 13, 2026 | Jeel Patel Portfolio Editing Guide*
