# Logo Setup Instructions

## Adding Your Pathyakram Logo

To display the logo correctly in the header:

### Step 1: Prepare Your Logo
- Format: PNG (recommended) or SVG
- Size: At least 200x200px (will be scaled to 45px height)
- Background: Transparent preferred
- File name: `logo.png`

### Step 2: Add Logo to Project
1. Place your logo file in the `public/` directory:
   ```
   /Users/rishabhrai/Documents/smansys-marketing/public/logo.png
   ```

2. The logo will automatically appear in the header once the file is added.

### Step 3: Verify
- Restart the development server if it's running
- The logo should appear next to "Pathyakram" text in the header
- If the logo doesn't load, the text will still display

### Alternative Logo Locations
If your logo has a different name or location, update `src/components/Header.js`:

```jsx
<img 
  src="/your-logo-name.png" 
  alt="Pathyakram" 
  className="logo-image"
  onError={() => setLogoError(true)}
/>
```

### Logo Styling
The logo is styled with:
- Height: 45px (auto width to maintain aspect ratio)
- Positioned next to the "Pathyakram" text
- Responsive and scales on mobile devices

### Current Status
- ✅ Logo component is ready
- ✅ Error handling in place (shows text if logo fails to load)
- ⏳ Waiting for logo.png file in public/ directory
