# Step-by-Step: Adding Netlify IP to Namecheap Advanced DNS

## Step 1: Get Your Netlify IP Address

### Option A: From Netlify Dashboard (Recommended)
1. Log in to **Netlify**: https://app.netlify.com
2. Click on your site (the one connected to `pathyakram.com`)
3. Go to **Domain management** (left sidebar)
4. Click on **pathyakram.com** in the domain list
5. You'll see DNS configuration instructions
6. Look for the **A Record** value - this is your Netlify IP
   - Common Netlify IPs: `75.2.60.5` or `75.2.70.75`
   - **Note this IP address down**

### Option B: Check Netlify Documentation
- Netlify's main IP addresses:
  - `75.2.60.5`
  - `75.2.70.75`
  - `99.83.190.102`
- But **always use the IP Netlify shows in your dashboard** for your specific site

---

## Step 2: Add A Record in Namecheap

### Detailed Steps:

1. **Log in to Namecheap**
   - Go to https://www.namecheap.com
   - Sign in with your account

2. **Navigate to Domain List**
   - Click **Domain List** from the left sidebar
   - Or go directly to: https://ap.www.namecheap.com/domains/list/

3. **Select Your Domain**
   - Find `pathyakram.com` in the list
   - Click the **Manage** button (or click on the domain name)

4. **Go to Advanced DNS Tab**
   - You'll see tabs: **Domain**, **Sharing**, **Advanced DNS**, etc.
   - Click on **Advanced DNS** tab
   - Wait for the DNS records to load

5. **Find the Hosting Records Section**
   - Scroll down to the **Hosting Records** section
   - This is where you'll add your A record

6. **Add A Record for Root Domain**

   **Click the "Add New Record" button** (usually a green "+" or "Add" button)

   Fill in the fields:
   - **Type**: Select `A Record` from the dropdown
   - **Host**: Enter `@` (this represents the root domain `pathyakram.com`)
     - Alternative: You can leave it blank or enter `pathyakram.com`
   - **Value**: Enter the Netlify IP address (e.g., `75.2.60.5`)
     - **Important**: Use the exact IP from Netlify dashboard
   - **TTL**: Select `Automatic` (or `30 min` for faster updates)

   **Click the checkmark (✓) or Save button** to save the record

7. **Add CNAME Record for WWW**

   **Click "Add New Record" again**

   Fill in the fields:
   - **Type**: Select `CNAME Record` from the dropdown
   - **Host**: Enter `www`
   - **Value**: Enter your Netlify site URL
     - Format: `[your-site-name].netlify.app`
     - Example: `amazing-site-123.netlify.app`
     - **OR** use: `cname.netlify.com` (if Netlify suggests this)
   - **TTL**: Select `Automatic`

   **Click the checkmark (✓) or Save button** to save the record

---

## Step 3: Remove Old/Conflicting Records

**Before saving, check for these and DELETE them:**

1. **Any A records** pointing to:
   - `parkingpage.namecheap.com`
   - `sedoparking.com`
   - Any IP that's not your Netlify IP

2. **Any CNAME records** for `www` pointing to:
   - `parkingpage.namecheap.com`
   - Any other parking page domains

3. **How to Delete:**
   - Find the record in the list
   - Click the **trash icon** (🗑️) or **Delete** button
   - Confirm deletion

---

## Step 4: Verify Your DNS Records

After adding, your **Hosting Records** section should look like this:

```
Type    Host    Value                          TTL
A       @       75.2.60.5                     Automatic
CNAME   www     your-site.netlify.app          Automatic
```

**OR** (if using Netlify's CNAME):

```
Type    Host    Value                          TTL
A       @       75.2.60.5                     Automatic
CNAME   www     cname.netlify.com              Automatic
```

---

## Step 5: Save and Wait

1. **Save All Changes**
   - Make sure all records are saved (checkmarks visible)
   - Some changes save automatically, others require clicking "Save"

2. **Wait for DNS Propagation**
   - Changes usually take **15-30 minutes**
   - Can take up to **48 hours** in rare cases
   - Check status: https://www.whatsmydns.net/#A/pathyakram.com

3. **Verify in Netlify**
   - Go back to Netlify Dashboard
   - Check **Domain management** → `pathyakram.com`
   - Status should change to "DNS configured correctly"

---

## Visual Guide: Namecheap Interface

### Where to Find Advanced DNS:
```
Namecheap Dashboard
  └── Domain List
      └── pathyakram.com
          └── [Manage Button]
              └── Advanced DNS Tab
                  └── Hosting Records Section
                      └── [Add New Record Button]
```

### A Record Fields:
```
┌─────────────────────────────────────┐
│ Type: [A Record ▼]                  │
│ Host: [@        ]                   │
│ Value: [75.2.60.5]                  │
│ TTL:   [Automatic ▼]                │
│         [✓ Save]                     │
└─────────────────────────────────────┘
```

---

## Common Netlify IP Addresses

If you can't find the IP in your Netlify dashboard, try these (but **prefer the one Netlify shows**):

- `75.2.60.5` (most common)
- `75.2.70.75`
- `99.83.190.102`

**However**, Netlify may use different IPs for different regions. Always check your Netlify dashboard first!

---

## Troubleshooting

### Can't find "Add New Record" button?
- Make sure you're in the **Advanced DNS** tab
- Scroll down to the **Hosting Records** section
- The button might be labeled as "+" or "Add"

### Record not saving?
- Make sure all required fields are filled
- Check that the IP address is valid (numbers and dots only)
- Try refreshing the page and adding again

### Still seeing parking page?
- Clear browser cache (Ctrl+Shift+Delete)
- Wait longer for DNS propagation
- Check DNS propagation status online
- Verify records are saved correctly in Namecheap

### Need to find your Netlify site URL?
- In Netlify Dashboard → Your Site → Overview
- Look at the top: "Site URL" or "Production URL"
- It will be something like: `https://amazing-site-123.netlify.app`
- Use the part before `.netlify.app` for the CNAME value

---

## Quick Reference

**A Record (Root Domain):**
- Type: `A Record`
- Host: `@`
- Value: `75.2.60.5` (or Netlify-provided IP)
- TTL: `Automatic`

**CNAME Record (WWW):**
- Type: `CNAME Record`
- Host: `www`
- Value: `[your-site].netlify.app` or `cname.netlify.com`
- TTL: `Automatic`

---

## Need Help?

- **Namecheap Support**: https://www.namecheap.com/support/
- **Netlify DNS Docs**: https://docs.netlify.com/domains-https/custom-domains/configure-external-dns/
- **Check DNS Propagation**: https://www.whatsmydns.net
