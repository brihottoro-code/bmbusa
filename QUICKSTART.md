# Quick Start Guide

## Getting Started Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Building for Production

1. **Build the static site:**
   ```bash
   npm run build
   ```

2. **Preview the build:**
   The static files will be in the `out` directory. You can serve them with any static file server.

## Project Structure

```
bmbusa/
├── app/                    # Next.js app directory (pages)
│   ├── about/              # About page
│   ├── constitution/      # Constitution page
│   ├── contact/            # Contact page
│   ├── events/            # Events page
│   ├── membership/        # Membership page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Footer component
├── public/                # Static assets
│   ├── .nojekyll         # GitHub Pages config
│   └── CNAME             # Custom domain config
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions workflow
└── next.config.js         # Next.js configuration
```

## Key Features

- ✅ Modern, responsive design with Tailwind CSS
- ✅ TypeScript for type safety
- ✅ Static site generation for GitHub Pages
- ✅ Automatic deployment via GitHub Actions
- ✅ Custom domain support
- ✅ SEO optimized
- ✅ Accessible design

## Next Steps

1. **Customize Content:**
   - Update organization information in `app/about/page.tsx`
   - Modify contact details in `components/Footer.tsx` and `app/contact/page.tsx`
   - Update membership fees if needed in `app/membership/page.tsx`

2. **Set Up Deployment:**
   - Follow instructions in `DEPLOYMENT.md`
   - Set `CUSTOM_DOMAIN=true` secret in GitHub
   - Configure your custom domain

3. **Add Images:**
   - Place images in `public/` directory
   - Reference them as `/image-name.jpg` in your components

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### Content

All content is in the page components:
- `app/page.tsx` - Home page content
- `app/about/page.tsx` - About page content
- `app/constitution/page.tsx` - Constitution content
- `app/membership/page.tsx` - Membership information
- `app/events/page.tsx` - Events and activities
- `app/contact/page.tsx` - Contact form

## Support

For deployment help, see `DEPLOYMENT.md`.  
For general questions, see `README.md`.

