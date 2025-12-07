# How to Set Up VITE_WEB3FORMS_KEY for Contact Form

## Step 1: Get Your Web3Forms API Key

1. Go to [Web3Forms.com](https://web3forms.com/)
2. Sign up for a free account (or sign in if you already have one)
3. Navigate to your dashboard
4. Copy your API access key

## Step 2: Create .env File

1. In the root directory of your project (same level as `package.json`), create a new file named `.env`
2. Add the following line to the file:

```env
VITE_WEB3FORMS_KEY=your_actual_api_key_here
```

Replace `your_actual_api_key_here` with the API key you copied from Web3Forms.

## Example .env File

```env
VITE_WEB3FORMS_KEY=abc123def456ghi789jkl012mno345pqr678stu901vwx234yz
```

## Step 3: Restart Development Server

After creating/updating the `.env` file:

1. Stop your development server (if running) by pressing `Ctrl+C`
2. Start it again with:
   ```bash
   npm run dev
   ```

## Step 4: Test the Contact Form

1. Fill out the contact form on your site
2. Submit it
3. Check your email - you should receive the form submission

## For Production (Vercel Deployment)

When deploying to Vercel:

1. Go to your project settings in Vercel dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Key**: `VITE_WEB3FORMS_KEY`
   - **Value**: Your API key
4. Select the environments (Production, Preview, Development)
5. Click **Save**
6. Redeploy your site

## Without API Key (Mailto Fallback)

If you don't set `VITE_WEB3FORMS_KEY`, the contact form will automatically fall back to opening the user's email client with a pre-filled message. This works without any setup, but requires the user to have an email client configured.

## Security Note

- Never commit your `.env` file to Git (it's already in `.gitignore`)
- Never share your API key publicly
- The `.env.example` file is safe to commit as it doesn't contain real keys

