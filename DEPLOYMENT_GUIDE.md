# Deployment Guide for pathyakram.com

This guide will help you deploy your Pathyakram marketing website to your Namecheap domain.

## Option 1: Deploy to Netlify (Recommended - Easiest & Free)

### Step 1: Build Your Website
```bash
cd /Users/rishabhrai/Documents/smansys-marketing
npm run build
```

This creates an optimized production build in the `build/` directory.

### Step 2: Deploy to Netlify

1. **Create a Netlify Account**
   - Go to https://www.netlify.com
   - Sign up for free (can use GitHub account)

2. **Deploy Your Site**
   - Option A: Drag & Drop
     - Go to https://app.netlify.com/drop
     - Drag the `build/` folder to the page
     - Your site will be live immediately!
   
   - Option B: Connect GitHub (Recommended)
     - In Netlify dashboard, click "Add new site" → "Import an existing project"
     - Connect your GitHub account
     - Select `rishabhrai14/pathyakram_marketing` repository
     - Build settings:
       - Build command: `npm run build`
       - Publish directory: `build`
     - Click "Deploy site"

3. **Connect Your Domain**
   - In Netlify dashboard, go to your site → "Domain settings"
   - Click "Add custom domain"
   - Enter: `pathyakram.com`
   - Follow Netlify's DNS configuration instructions

4. **Update Namecheap DNS**
   - Log in to Namecheap
   - Go to Domain List → Manage pathyakram.com
   - Go to "Advanced DNS" tab
   - Add these records:
     ```
     Type: A Record
     Host: @
     Value: [Netlify IP - Netlify will provide this, usually: 75.2.60.5]
     TTL: Automatic
     
     Type: CNAME Record
     Host: www
     Value: [Your Netlify site URL].netlify.app
     TTL: Automatic
     ```
   - Netlify will provide exact DNS values in their dashboard

### Step 3: Enable HTTPS (Automatic)
- Netlify automatically provides free SSL certificates
- Your site will be available at https://pathyakram.com

---

## Option 2: Deploy to Vercel (Alternative - Also Free)

### Step 1: Build Your Website
```bash
cd /Users/rishabhrai/Documents/smansys-marketing
npm run build
```

### Step 2: Deploy to Vercel

1. **Create a Vercel Account**
   - Go to https://vercel.com
   - Sign up for free (can use GitHub account)

2. **Deploy Your Site**
   - Click "Add New Project"
   - Import your GitHub repository: `rishabhrai14/pathyakram_marketing`
   - Framework Preset: React
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Click "Deploy"

3. **Connect Your Domain**
   - Go to Project Settings → Domains
   - Add `pathyakram.com` and `www.pathyakram.com`
   - Follow Vercel's DNS instructions

4. **Update Namecheap DNS**
   - In Namecheap, go to Advanced DNS
   - Add DNS records as provided by Vercel:
     ```
     Type: A Record
     Host: @
     Value: [Vercel IP - provided in dashboard]
     
     Type: CNAME Record
     Host: www
     Value: cname.vercel-dns.com
     ```

---

## Option 3: Use Namecheap Hosting

### Step 1: Set Up Namecheap Hosting

1. **Purchase Hosting** (if not already done)
   - Log in to Namecheap
   - Go to "Hosting List"
   - Purchase hosting plan if needed

2. **Connect Domain to Hosting**
   - In Namecheap dashboard, link your domain to hosting
   - This is usually automatic if both are on Namecheap

### Step 2: Upload Your Website

1. **Build Your Website**
   ```bash
   cd /Users/rishabhrai/Documents/smansys-marketing
   npm run build
   ```

2. **Access cPanel**
   - In Namecheap, go to your hosting account
   - Click "Manage" → Access cPanel
   - Login with your hosting credentials

3. **Upload Files**
   - In cPanel, go to "File Manager"
   - Navigate to `public_html` folder
   - Upload all files from your `build/` directory
   - Make sure `index.html` is in the root of `public_html`

4. **Configure for React Router**
   - Create a `.htaccess` file in `public_html`:
   ```apache
   Options -MultiViews
   RewriteEngine On
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteRule ^ index.html [QR,L]
   ```

---

## Option 4: GitHub Pages (Free but Limited)

### Step 1: Install gh-pages Package
```bash
cd /Users/rishabhrai/Documents/smansys-marketing
npm install --save-dev gh-pages
```

### Step 2: Update package.json
Add these scripts:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  },
  "homepage": "https://rishabhrai14.github.io/pathyakram_marketing"
}
```

### Step 3: Deploy
```bash
npm run deploy
```

### Step 4: Configure Custom Domain
- Create a `CNAME` file in `public/` with content: `pathyakram.com`
- In Namecheap DNS, add:
  ```
  Type: CNAME
  Host: @
  Value: rishabhrai14.github.io
  ```

---

## Recommended: Netlify (Easiest Option)

**Why Netlify?**
- ✅ Free SSL certificate
- ✅ Automatic deployments from GitHub
- ✅ Fast CDN
- ✅ Easy domain setup
- ✅ Free tier is generous
- ✅ Automatic HTTPS

### Quick Netlify Setup:

1. **Push your code to GitHub** (already done ✅)

2. **Build locally to test:**
   ```bash
   cd /Users/rishabhrai/Documents/smansys-marketing
   npm run build
   ```

3. **Deploy to Netlify:**
   - Sign up at https://netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub → Select `pathyakram_marketing`
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy"

4. **Add Custom Domain:**
   - Site settings → Domain management → Add custom domain
   - Enter: `pathyakram.com`
   - Follow DNS configuration steps

5. **Update Namecheap DNS:**
   - Netlify will provide exact DNS records
   - Add them in Namecheap's Advanced DNS section

---

## DNS Configuration in Namecheap

### Steps:
1. Log in to Namecheap
2. Go to "Domain List"
3. Click "Manage" next to pathyakram.com
4. Go to "Advanced DNS" tab
5. Add the DNS records provided by your hosting service
6. Wait 24-48 hours for DNS propagation (usually faster)

### Common DNS Records:
- **A Record**: Points domain to IP address
- **CNAME Record**: Points subdomain to another domain
- **TXT Record**: For verification (if required)

---

## Testing Your Deployment

After deployment:
1. Visit https://pathyakram.com
2. Check all pages load correctly
3. Test navigation links
4. Verify mobile responsiveness
5. Check that logo displays correctly

---

## Troubleshooting

### Site Not Loading?
- Check DNS propagation: https://www.whatsmydns.net
- Verify DNS records are correct
- Wait 24-48 hours for full propagation

### 404 Errors on Routes?
- Ensure `.htaccess` file is configured (for Namecheap hosting)
- For Netlify/Vercel, add `_redirects` file in `public/`:
  ```
  /*    /index.html   200
  ```

### Logo Not Showing?
- Ensure logo.png is in `public/` directory
- Check file path in code matches actual file location
- Verify file permissions

---

## Need Help?

- **Netlify Support**: https://docs.netlify.com
- **Vercel Support**: https://vercel.com/docs
- **Namecheap Support**: https://www.namecheap.com/support/
