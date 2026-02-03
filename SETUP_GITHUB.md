# GitHub Repository Setup Instructions

## Option 1: Create Repository via GitHub Website

1. Go to https://github.com/new
2. Repository name: `smansys-marketing`
3. Description: "Marketing website for Smansys - Complete School Management System"
4. Choose **Public** or **Private** as per your preference
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

7. Then run these commands in the terminal:

```bash
cd /Users/rishabhrai/Documents/smansys-marketing
git remote add origin https://github.com/YOUR_USERNAME/smansys-marketing.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

## Option 2: Using GitHub CLI (if installed)

If you have GitHub CLI installed, run:

```bash
cd /Users/rishabhrai/Documents/smansys-marketing
gh repo create smansys-marketing --public --source=. --remote=origin --push
```

## After Repository is Created

Your marketing website will be available at:
- Repository: `https://github.com/YOUR_USERNAME/smansys-marketing`
- You can deploy it to:
  - **Netlify**: Connect GitHub repo, auto-deploy on push
  - **Vercel**: Connect GitHub repo, auto-deploy on push
  - **GitHub Pages**: Enable in repository settings
