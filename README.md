# Suganraj S - Developer Portfolio

A minimal, Apple-style developer portfolio website built with React, Vite, and Tailwind CSS. Features a clean design with light/dark theme toggle, smooth animations, and full responsiveness.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.



### Update Content

All content is stored in the `src/data/` directory:

- **Projects**: Edit `src/data/projects.js`
- **Experience**: Edit `src/data/experience.js`
- **Achievements**: Edit `src/data/achievements.js`
- **Skills**: Edit `src/data/skills.js`
- **Certifications**: Edit `src/data/certifications.js`
- **Contact Info**: Edit `src/data/contact.js`

### Update Project Links

In `src/data/projects.js`, update the `demo` and `github` fields for each project:

```javascript
{
  demo: 'https://your-demo-url.com',  // or null if no demo
  github: 'https://github.com/yourusername/your-repo',
}
```

## 🌐 Environment Variables

### Contact Form (Optional)

To enable the contact form submission (instead of mailto fallback):

1. Get a free API key from [Web3Forms](https://web3forms.com/)
2. Create a `.env` file in the root directory:
```env
VITE_WEB3FORMS_KEY=your_api_key_here
```

3. The contact form will automatically use Web3Forms if the key is provided, otherwise it will fall back to opening the user's email client.

## 🚢 Deployment to Vercel

### Method 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your GitHub repository
4. Vercel will auto-detect Vite settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. (Optional) Add environment variable:
   - Go to Project Settings → Environment Variables
   - Add `VITE_WEB3FORMS_KEY` with your API key
6. Click "Deploy"

### Method 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to link your project

### Custom Domain (Optional)

1. In Vercel dashboard, go to your project → Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions

## 📁 Project Structure

```
Portfolio/
├── public/
│   ├── resume/
│   │   └── Suganraj_S_Resume.pdf (replace with your resume)
│   ├── profile-placeholder.jpg (replace with your photo)
│   ├── favicon.ico
│   ├── og-image.png
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── data/
│   │   ├── achievements.js
│   │   ├── certifications.js
│   │   ├── contact.js
│   │   ├── experience.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── utils/
│   │   ├── helpers.js
│   │   └── theme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🎯 Features

- ✅ Minimal Apple-style design
- ✅ Light/Dark theme toggle (persisted in localStorage)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations (Framer Motion)
- ✅ SEO optimized (meta tags, Open Graph)
- ✅ Accessible (semantic HTML, ARIA labels, keyboard navigation)
- ✅ Project modals with detailed views
- ✅ Contact form with Web3Forms integration
- ✅ Resume download functionality

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📝 TODO After Setup

- [ ] Replace `public/profile-placeholder.jpg` with your actual profile photo
- [ ] Replace `public/resume/Suganraj_S_Resume.pdf` with your resume
- [ ] Update project demo and GitHub links in `src/data/projects.js`
- [ ] (Optional) Set `VITE_WEB3FORMS_KEY` environment variable for contact form
- [ ] Update Open Graph image (`public/og-image.png`) for social sharing
- [ ] Customize favicon (`public/favicon.ico`)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Contact

**Suganraj S**

- Email: [suganrajsms@gmail.com](mailto:suganrajsms@gmail.com)
- GitHub: [https://github.com/ssuganraj](https://github.com/ssuganraj)
- LinkedIn: [https://linkedin.com/in/suganraj-s](https://linkedin.com/in/suganraj-s)
- Location: Chennai, India

---

**Note**: This project was auto-generated by Cursor from a master prompt. Replace profile photo and resume file in `/public` or `/src/assets`. Update `src/data` to add or edit projects.

**Design**: Minimal Apple-style | **Theme**: Light + Dark toggle | **Deployment**: Vercel

