# DNS Configuration Fix for pathyakram.com

## Current Issue
Your domain is showing a parking page because the DNS records aren't fully configured. The errors you're seeing (`sedoparking.com`, `tsc.php`) are from Namecheap's default parking page.

## Current DNS Status
- `pathyakram.com` → `162.255.119.223` (might be Netlify)
- `www.pathyakram.com` → `parkingpage.namecheap.com` ❌ (This is the problem!)

## Solution: Update DNS Records in Namecheap

### Step 1: Get Netlify DNS Information

1. **Go to Netlify Dashboard**
   - Open your site in Netlify
   - Go to **Domain management** (left sidebar)
   - Click on your domain `pathyakram.com`
   - You'll see DNS configuration instructions

2. **Note the DNS Records**
   Netlify typically provides:
   - **A Record** for root domain (`@` or `pathyakram.com`)
   - **CNAME Record** for `www` subdomain

### Step 2: Update Namecheap DNS

1. **Log in to Namecheap**
   - Go to https://www.namecheap.com
   - Sign in to your account

2. **Navigate to Domain Management**
   - Click **Domain List** (left sidebar)
   - Find `pathyakram.com`
   - Click **Manage** button

3. **Go to Advanced DNS Tab**
   - Click on **Advanced DNS** tab
   - You'll see existing DNS records

4. **Remove Parking Page Records**
   - Look for any records pointing to:
     - `parkingpage.namecheap.com`
     - `sedoparking.com`
     - Any other parking-related records
   - Delete these records (click the trash icon)

5. **Add Netlify DNS Records**

   **For Root Domain (pathyakram.com):**
   - Click **Add New Record**
   - Type: **A Record**
   - Host: `@` (or leave blank, or `pathyakram.com`)
   - Value: `75.2.60.5` (or the IP Netlify provides)
   - TTL: `Automatic` (or `30 min`)
   - Click the checkmark to save

   **For WWW Subdomain:**
   - Click **Add New Record**
   - Type: **CNAME Record**
   - Host: `www`
   - Value: `[your-site-name].netlify.app` (e.g., `amazing-site-123.netlify.app`)
     - **OR** use Netlify's CNAME: `cname.netlify.com`
   - TTL: `Automatic` (or `30 min`)
   - Click the checkmark to save

### Step 3: Verify DNS Records

After updating, your DNS records should look like:

```
Type    Host    Value                          TTL
A       @       75.2.60.5                      Automatic
CNAME   www     your-site.netlify.app          Automatic
```

**OR** (if Netlify provides different values):

```
Type    Host    Value                          TTL
A       @       [Netlify IP]                   Automatic
CNAME   www     cname.netlify.com              Automatic
```

### Step 4: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate
- Usually takes **15-30 minutes** for most locations
- Check propagation status: https://www.whatsmydns.net/#A/pathyakram.com

### Step 5: Verify in Netlify

1. Go back to Netlify Dashboard
2. Go to **Domain management**
3. Check the status of `pathyakram.com`
4. It should show:
   - ✅ **DNS configured correctly**
   - ✅ **SSL certificate issued** (automatic)
   - ✅ **Site is live**

## Alternative: Use Netlify DNS (Easiest)

If you want Netlify to manage your DNS completely:

1. **In Netlify Dashboard:**
   - Go to **Domain management**
   - Click **Add custom domain**
   - Enter `pathyakram.com`
   - Netlify will show DNS configuration

2. **In Namecheap:**
   - Go to **Domain List** → **Manage** → **Nameservers**
   - Change from "Namecheap BasicDNS" to **Custom DNS**
   - Enter Netlify's nameservers (Netlify will provide these)
   - Usually something like:
     ```
     dns1.p01.nsone.net
     dns2.p01.nsone.net
     dns3.p01.nsone.net
     dns4.p01.nsone.net
     ```
   - Save changes

This way, Netlify manages all DNS records automatically!

## Quick Check Commands

After updating DNS, verify with:

```bash
# Check root domain
dig pathyakram.com +short

# Check www subdomain
dig www.pathyakram.com +short

# Full DNS lookup
nslookup pathyakram.com
```

Expected results:
- Root domain should point to Netlify IP (e.g., `75.2.60.5`)
- www should point to Netlify CNAME (e.g., `your-site.netlify.app`)

## Troubleshooting

### Still seeing parking page?
1. **Clear browser cache** (Ctrl+Shift+Delete or Cmd+Shift+Delete)
2. **Try incognito/private window**
3. **Check DNS propagation**: https://www.whatsmydns.net
4. **Wait longer** - DNS can take up to 48 hours

### DNS not updating?
1. **Double-check records** in Namecheap match Netlify's instructions exactly
2. **Remove conflicting records** (old A records, other CNAMEs)
3. **Check TTL** - Lower TTL (30 min) helps changes propagate faster

### SSL Certificate not issued?
- Netlify automatically issues SSL certificates
- Wait 24-48 hours after DNS is configured
- Check in Netlify Dashboard → Domain management → SSL/TLS

## Need Help?

- **Netlify DNS Docs**: https://docs.netlify.com/domains-https/custom-domains/
- **Namecheap DNS Guide**: https://www.namecheap.com/support/knowledgebase/article.aspx/767/10/how-can-i-set-up-an-a-address-record-for-my-domain/
- **Check DNS Propagation**: https://www.whatsmydns.net
