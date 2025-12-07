# Deployment Guide - Vercel

This guide will help you deploy your portfolio to Vercel.

## Prerequisites

1. **GitHub Account** - Your code needs to be on GitHub
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com) (free)

## Step-by-Step Deployment

### Step 1: Push Code to GitHub

If you haven't already:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio website"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository
4. Vercel will auto-detect your settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `dist` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)
5. Click **"Deploy"**

#### Option B: Via Vercel CLI

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Link to existing project? **No** (first time)
   - Project name: **suganraj-portfolio** (or your choice)
   - Directory: **./** (current directory)
   - Override settings? **No**

5. For production deployment:
   ```bash
   vercel --prod
   ```

### Step 3: Configure Environment Variables (Optional)

If you're using Web3Forms:

1. Go to your project in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Click **"Add New"**
4. Add:
   - **Key**: `VITE_WEB3FORMS_KEY`
   - **Value**: Your Web3Forms API key
   - **Environments**: Select all (Production, Preview, Development)
5. Click **"Save"**
6. **Redeploy** your site (or it will use the new env var on next deployment)

### Step 4: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Enter your domain name (e.g., `yourname.com`)
3. Follow the DNS configuration instructions
4. Vercel will automatically provision SSL certificates

## Post-Deployment Checklist

- [ ] Visit your deployed site (you'll get a URL like `your-project.vercel.app`)
- [ ] Test all sections (Hero, About, Projects, etc.)
- [ ] Test theme toggle (light/dark mode)
- [ ] Test contact form (if Web3Forms key is set)
- [ ] Test resume download link
- [ ] Test on mobile device
- [ ] Check that profile image loads correctly
- [ ] Verify all links work

## Continuous Deployment

Vercel automatically deploys:
- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches or pull requests

## Troubleshooting

### Build Fails

- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify `vercel.json` is correct

### Environment Variables Not Working

- Make sure variable name starts with `VITE_`
- Redeploy after adding environment variables
- Check that variables are enabled for the correct environments

### Images Not Loading

- Ensure images are in `public/` folder
- Use relative paths (e.g., `/image.jpg` not `./image.jpg`)
- Check file names match exactly (case-sensitive)

### 404 Errors

- Vercel should handle routing automatically with `vercel.json`
- If issues persist, check the rewrite rules in `vercel.json`

## Need Help?

- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Discord](https://vercel.com/discord)
- Check build logs in Vercel dashboard for specific errors

