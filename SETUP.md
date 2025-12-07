# Quick Setup Guide

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📝 Before You Deploy

### Required Replacements:

1. **Profile Photo**
   - Replace `public/profile-placeholder.svg` with your actual photo
   - Recommended: Square image, 800x800px or larger
   - Formats: JPG, PNG, or SVG

2. **Resume**
   - Add your resume PDF to `public/resume/Suganraj_S_Resume.pdf`
   - The filename must match exactly

3. **Favicon** (Optional)
   - Replace `public/favicon.svg` with your custom favicon

4. **Open Graph Image** (Optional)
   - Replace `public/og-image.svg` with a 1200x630px image for social sharing

### Update Project Links:

Edit `src/data/projects.js` and update:
- `demo` URLs (or set to `null` if no demo)
- `github` URLs to point to your actual repositories

### Enable Contact Form (Optional):

1. Get a free API key from [Web3Forms](https://web3forms.com/)
2. Create `.env` file:
   ```
   VITE_WEB3FORMS_KEY=your_api_key_here
   ```
3. If not provided, the form will use mailto fallback

## 🚢 Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Vercel will auto-detect settings (no changes needed)
4. Add `VITE_WEB3FORMS_KEY` in Environment Variables (optional)
5. Deploy!

## 📚 More Information

See [README.md](./README.md) for detailed documentation.

