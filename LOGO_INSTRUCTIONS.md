# Logo Setup Instructions

## Adding the Pathyakram Logo

1. **Get your logo file:**
   - The logo should be in PNG format
   - Recommended size: 200x200px or larger (will be scaled down)
   - Transparent background preferred

2. **Add the logo:**
   - Place your logo file in the `public/` directory
   - Name it `logo.png`
   - The website will automatically use it in the header

3. **Alternative logo names:**
   - If your logo has a different name, update `src/components/Header.js`:
   ```jsx
   <img src="/your-logo-name.png" alt="Pathyakram" className="logo-image" />
   ```

4. **Logo styling:**
   - The logo is set to 40px height in the header
   - You can adjust the size in `src/components/Header.css`:
   ```css
   .logo-image {
     height: 40px; /* Adjust as needed */
     width: auto;  /* Maintains aspect ratio */
   }
   ```

## Current Logo Implementation

The header is already configured to display:
- Logo image (if `public/logo.png` exists)
- Brand name: "Pathyakram"
- Tagline: "Measure Growth, Inspire Success"

Once you add the logo file, it will automatically appear in the header navigation.
