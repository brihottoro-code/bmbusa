# Brihottor Mymensinghbashi USA Inc.

A modern, responsive website for Brihottor Mymensinghbashi USA Inc., a social, non-profit organization based in New York City, New York, USA.

## 🚀 Features

- **Modern Design**: Built with Next.js 14 and Tailwind CSS for a beautiful, responsive user experience
- **Static Site Generation**: Optimized for performance with static export
- **GitHub Pages Deployment**: Automated deployment via GitHub Actions
- **Custom Domain Support**: Configured to work with custom domains
- **Accessible**: Built with accessibility best practices
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Pages

- **Home**: Overview of the organization and key objectives
- **About**: Detailed information about the organization's mission and values
- **Membership**: Membership eligibility, fees, and application process
- **Constitution**: Full constitution document
- **Events**: Annual activities and upcoming events
- **Contact**: Contact form and organization contact information

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bmbusa
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build

To build the static site:

```bash
npm run build
```

The static files will be generated in the `out` directory.

## 🚢 Deployment

### GitHub Pages with Custom Domain

This repository is configured for automatic deployment to GitHub Pages with custom domain support.

#### Setup Instructions:

1. **Set GitHub Secret**:
   - Go to your repository Settings → Secrets and variables → Actions
   - Add a new secret named `CUSTOM_DOMAIN` with value `true`

2. **Configure Custom Domain**:
   - In your repository Settings → Pages
   - Under "Custom domain", enter your domain name
   - GitHub will create a CNAME file automatically

3. **DNS Configuration**:
   - Add a CNAME record in your DNS settings pointing to `your-username.github.io`
   - Or add A records pointing to GitHub Pages IP addresses:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153

4. **Automatic Deployment**:
   - Push to the `main` branch
   - GitHub Actions will automatically build and deploy to the `gh-pages` branch
   - Your site will be available at your custom domain

### GitHub Pages without Custom Domain

If you want to use the default GitHub Pages URL (`username.github.io/repository-name`):

1. Remove or set `CUSTOM_DOMAIN` secret to `false`
2. Enable GitHub Pages in repository Settings → Pages
3. Select source: "GitHub Actions"
4. The workflow will automatically deploy to GitHub Pages

## 📝 Environment Variables

The build process uses the following environment variables:

- `CUSTOM_DOMAIN`: Set to `true` if using a custom domain, `false` otherwise
- `GITHUB_PAGES`: Automatically set by the GitHub Actions workflow

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { ... },
  accent: { ... },
}
```

### Content

- Update organization information in `app/about/page.tsx`
- Modify constitution content in `app/constitution/page.tsx`
- Edit membership details in `app/membership/page.tsx`
- Update contact information in `components/Footer.tsx` and `app/contact/page.tsx`

## 📄 License

This project is for Brihottor Mymensinghbashi USA Inc., a registered non-profit organization.

## 🤝 Contributing

This is a private organization website. For updates or changes, please contact the organization's executive committee.

## 📞 Contact

For questions or support, please visit the [Contact](/contact) page or email brihottoro@gmail.com

---

**Brihottor Mymensinghbashi USA Inc.**  
New York City, New York, USA

