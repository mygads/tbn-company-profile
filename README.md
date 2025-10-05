# TBN Tiling & Stone - Company Profile Website

A modern, fully optimized company profile website for TBN Tiling & Stone - Professional tiling, waterproofing, and renovation services in Australia.

## 🚀 Features

### Technical Stack
- **Framework**: Next.js 15.5.3 with App Router
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4
- **TypeScript**: Type-safe development
- **Icons**: React Icons 5.5.0
- **Build Tool**: Turbopack for faster development

### SEO & Performance
- ✅ **Static Site Generation (SSG)**: All pages pre-rendered at build time
- ✅ **Comprehensive SEO**: Meta tags, Open Graph, Twitter Cards for all pages
- ✅ **Dynamic Sitemap**: Auto-generated XML sitemap
- ✅ **Robots.txt**: Search engine crawling optimization
- ✅ **PWA Ready**: Web app manifest for installability
- ✅ **Image Optimization**: Next.js Image component with lazy loading
- ✅ **Font Optimization**: Geist fonts with swap display

### User Experience
- 🎨 **Scroll Animations**: Smooth entrance animations on all pages
- 📱 **Fully Responsive**: Mobile-first design
- ♿ **Accessible**: WCAG compliant
- 🎯 **Performance**: Optimized Core Web Vitals

## 📄 Pages

1. **Homepage** (`/`) - Hero, Services overview, About, Testimonials, FAQ
2. **Services** (`/services`) - Detailed service offerings
   - Bathroom & Kitchen Renovations
   - Regrouting Services
   - Fix Leaking Showers
   - Waterproofing
   - Kitchen Splashbacks
3. **About Us** (`/about`) - Company information, Mission, Values
4. **Gallery** (`/gallery`) - Project portfolio with image filtering
5. **Reviews** (`/review`) - Customer testimonials and ratings
6. **Legal Pages**:
   - Privacy Policy (`/privacy`)
   - Terms of Use (`/terms`)
   - Sales & Refunds (`/sales-refunds`)
   - Legal Information (`/legal`)

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production (SSG)
pnpm build

# Start production server
pnpm start
```

### Development
Open [http://localhost:3000](http://localhost:3000) to view the site in development mode.

The page auto-updates as you edit files in the `src/` directory.

## 📦 Build & Deploy

### Static Site Generation

This project is configured for full SSG. All pages are pre-rendered at build time:

```bash
# Create optimized production build
pnpm build
```

The build process will:
1. Generate static HTML for all pages
2. Optimize images and fonts
3. Create sitemap.xml and robots.txt
4. Generate meta tags for all pages
5. Output to `.next/` directory

### Deployment Options

#### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mygads/tbn-company-profile)

#### Other Platforms
- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Deploy via AWS Console
- **Static Hosting**: Upload `.next/` folder to any static host

## 🎨 Customization

### Colors
Main brand colors in Tailwind config:
- Gold: `#D4AF37`
- Dark Blue: `#2C3E50`
- Background: `#fcfcf7`

### Content Updates

#### Update Contact Information
- `src/components/Footer.tsx` - Footer contact details
- `src/components/Contact.tsx` - Contact form
- `src/app/page.tsx` - Homepage metadata

#### Add New Services
1. Create component in `src/components/`
2. Add to `/services` page
3. Update sitemap.xml

#### Update Gallery Images
Add images to `public/images/` and update `GalleryGrid.tsx`

## 📊 SEO Configuration

### Metadata
Each page has comprehensive metadata including:
- Title with template
- Description
- Keywords
- Open Graph tags
- Twitter Cards
- Canonical URLs

### Sitemap
Auto-generated at build time. Update priorities in `src/app/sitemap.ts`

### Google Verification
Add your verification code in:
- `src/app/page.tsx` (metadata.verification.google)
- `src/app/layout.tsx` (root metadata)

## 🎭 Animation System

Custom `AnimatedSection` component with 6 animation types:
- `fade-up` - Fade in from bottom
- `fade-down` - Fade in from top
- `fade-left` - Fade in from left
- `fade-right` - Fade in from right
- `zoom-in` - Scale up with fade
- `zoom-out` - Scale down with fade

Usage:
```tsx
<AnimatedSection animation="fade-up" delay={100}>
  <YourComponent />
</AnimatedSection>
```

## 📱 PWA Features

The site includes a web app manifest for installation:
- Add to Home Screen support
- Standalone app mode
- Custom icons and theme colors
- Service shortcuts

## 🔧 Technology Details

### Next.js 15 Features Used
- App Router
- Server Components
- Metadata API
- Image Optimization
- Font Optimization
- Static Export
- Turbopack

### Performance Optimizations
- Lazy loading images
- Code splitting
- Font preloading
- Minified CSS/JS
- Gzip compression ready

## 📈 Analytics

To add analytics, integrate in `src/app/layout.tsx`:
- Google Analytics
- Facebook Pixel
- Microsoft Clarity

## 🤝 Contributing

This is a private company website. For inquiries, contact:
- Email: tbntiling2009@gmail.com
- Phone: +61424296793

## 📄 License

© 2025 TBN Tiling & Stone. All Rights Reserved.

Developed by [Genfity Digital Solution](https://www.genfity.com)

## 🐛 Troubleshooting

### Build Issues
```bash
# Clear cache
rm -rf .next
pnpm install
pnpm build
```

### Development Server Issues
```bash
# Kill port 3000
npx kill-port 3000
pnpm dev
```

## 📞 Support

For technical support or questions:
- Website: https://www.tbntiling.com.au
- Email: tbntiling2009@gmail.com
- Phone: +61424296793

---

Built with ❤️ using Next.js and Tailwind CSS
