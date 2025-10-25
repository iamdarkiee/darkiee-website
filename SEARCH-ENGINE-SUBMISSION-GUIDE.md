# Quick Guide: Submit Darkiee to Search Engines

**After you deploy the website, follow these steps to get indexed by search engines.**

---

## 🔍 Google Search Console (PRIORITY #1)

### Step 1: Add Your Property

1. Visit: https://search.google.com/search-console
2. Click "Start now" and sign in with your Google account
3. Click "Add Property"
4. Enter: `https://www.darkiee.com`

### Step 2: Verify Ownership

Choose one of these methods:

**Option A: HTML Tag (Easiest)**

1. Google will give you a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_CODE_HERE" />
   ```
2. Add this tag to index.html in the `<head>` section (after other meta tags)
3. Push to GitHub
4. Click "Verify" in Google Search Console

**Option B: HTML File**

1. Download the verification file from Google
2. Upload it to your website root
3. Click "Verify"

### Step 3: Submit Sitemap

1. Once verified, go to "Sitemaps" in left menu
2. Enter: `sitemap.xml`
3. Click "Submit"
4. You should see "Success" status

### Step 4: Request Indexing

1. Go to "URL Inspection" in left menu
2. Enter: `https://www.darkiee.com`
3. Click "Request Indexing"
4. Wait for Google to crawl (1-7 days)

---

## 🔍 Bing Webmaster Tools (PRIORITY #2)

### Step 1: Add Your Site

1. Visit: https://www.bing.com/webmasters
2. Sign in with Microsoft account
3. Click "Add a site"
4. Enter: `https://www.darkiee.com`

### Step 2: Verify Ownership

Similar to Google - use HTML tag or file upload

### Step 3: Submit Sitemap

1. Go to "Sitemaps" section
2. Submit: `https://www.darkiee.com/sitemap.xml`

---

## 📍 Google My Business (LOCAL SEO - IMPORTANT!)

### Create Business Listing

1. Visit: https://www.google.com/business
2. Click "Manage now"
3. Enter business name: **Darkiee**
4. Choose category: **Software Company** or **Web Designer**
5. Add location: **Sector-B, Suryadev Nagar, Indore, Madhya Pradesh**
6. Add phone: **9399811283**
7. Add website: **https://www.darkiee.com**
8. Verify business (postcard or phone)

**Benefits:**

- Appear in Google Maps
- Show up in "near me" searches
- Display business hours and contact info
- Get customer reviews

---

## 🧪 Test Your SEO

### Rich Results Test

https://search.google.com/test/rich-results

- Paste: `https://www.darkiee.com`
- Should show: Organization, LocalBusiness, Services

### Mobile-Friendly Test

https://search.google.com/test/mobile-friendly

- Should show: "Page is mobile friendly"

### PageSpeed Insights

https://pagespeed.web.dev/

- Test both mobile and desktop
- Aim for score > 90

### Schema Validator

https://validator.schema.org/

- Paste your website URL
- Should show 0 errors

---

## 📊 Monitor Progress

### Week 1

- [ ] Site verified in Google Search Console
- [ ] Site verified in Bing Webmaster Tools
- [ ] Sitemap submitted
- [ ] Initial indexing requested

### Week 2-4

- [ ] Site indexed (check: `site:darkiee.com` in Google)
- [ ] Google My Business verified
- [ ] First impressions appearing in Search Console

### Month 2-3

- [ ] Rankings for brand name ("darkiee")
- [ ] Starting to rank for service keywords
- [ ] Organic traffic beginning

### Month 4+

- [ ] Consistent organic traffic
- [ ] Rankings improving for target keywords
- [ ] Local pack appearances (Google Maps)

---

## 🚀 Quick Checks

### Is My Site Indexed?

Search in Google: `site:darkiee.com`

- If indexed: You'll see your site
- If not indexed: "No results found" (wait 1-7 days after submission)

### What Keywords Am I Ranking For?

Check in Google Search Console:

- Performance → Queries
- Shows what people searched to find you

### How's My SEO Performing?

Google Search Console → Performance:

- Total Clicks
- Total Impressions
- Average CTR
- Average Position

---

## ✅ Checklist After Deployment

- [ ] Website deployed to https://www.darkiee.com
- [ ] robots.txt accessible at https://www.darkiee.com/robots.txt
- [ ] sitemap.xml accessible at https://www.darkiee.com/sitemap.xml
- [ ] All links working
- [ ] Contact form working (EmailJS)
- [ ] Website loads fast (< 3 seconds)
- [ ] Mobile responsive (test on phone)
- [ ] Google Search Console verification
- [ ] Bing Webmaster Tools verification
- [ ] Google My Business created
- [ ] Social media links working

---

## 📞 Need Help?

If you encounter issues:

1. **Google Search Console Help**: https://support.google.com/webmasters
2. **Bing Webmaster Help**: https://www.bing.com/webmasters/help
3. **Schema.org Help**: https://schema.org/docs/gs.html

---

**Status**: Ready for submission after deployment ✅  
**Last Updated**: October 25, 2025
