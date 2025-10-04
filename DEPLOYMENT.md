# 🎯 DEPLOYMENT CHECKLIST

Before deploying to production, ensure:

## ✅ Pre-Deployment

- [ ] Update Google Verification Code
  - File: `src/app/page.tsx` → `metadata.verification.google`
  - File: `src/app/layout.tsx` → `metadata.verification.google`

- [ ] Update Contact Information (if needed)
  - File: `src/components/Footer.tsx`
  - File: `src/components/Contact.tsx`

- [ ] Update Site URL (if different)
  - File: `src/app/page.tsx` → `siteUrl`
  - File: `src/app/sitemap.ts` → `baseUrl`
  - File: `src/app/robots.ts` → `baseUrl`
  - All other page metadata files

- [ ] Test All Pages Locally
  ```bash
  pnpm build
  pnpm serve
  ```

- [ ] Check SEO
  - Meta tags present on all pages
  - sitemap.xml accessible
  - robots.txt accessible
  - manifest.json accessible

## 🚀 Deployment Steps

### Vercel (Recommended)
1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `pnpm build`
   - Output Directory: `out`
3. Deploy

### Netlify
1. Connect repository or drag/drop `out` folder
2. Build settings:
   - Build Command: `pnpm build`
   - Publish Directory: `out`
3. Deploy

### Other Platforms
Upload contents of `out` directory to your hosting service.

## ✅ Post-Deployment

- [ ] Test all pages on live site
- [ ] Verify sitemap.xml: `https://yoursite.com/sitemap.xml`
- [ ] Verify robots.txt: `https://yoursite.com/robots.txt`
- [ ] Submit sitemap to Google Search Console
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Test contact form (if applicable)
- [ ] Check all links work
- [ ] Verify images load correctly
- [ ] Test scroll animations

## 🔍 Performance Testing

Run these tests:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse (Chrome DevTools)

Target Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

## 📊 Analytics Setup (Optional)

Add tracking codes in `src/app/layout.tsx`:
- Google Analytics
- Facebook Pixel
- Microsoft Clarity
- Hotjar

## 🔒 Security Headers (Optional)

Configure in your hosting platform:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Content-Security-Policy

## 🎉 Launch!

Once all checks are complete, your site is ready for production!

---

Generated: October 2025
Version: 1.0.0
