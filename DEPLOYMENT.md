# Deployment Guide

This guide explains how to deploy the Brihottor Mymensinghbashi USA Inc. website to GitHub Pages with a custom domain.

## Prerequisites

- A GitHub repository
- A custom domain name
- Access to your domain's DNS settings

## Step-by-Step Deployment

### 1. Set Up GitHub Secret

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Name: `CUSTOM_DOMAIN`
5. Value: `true`
6. Click **Add secret**

### 2. Configure GitHub Pages

1. In your repository, go to **Settings** → **Pages**
2. Under **Source**, select **Deploy from a branch**
3. Under **Custom domain**, enter your domain name (e.g., `www.yourdomain.com` or `yourdomain.com`)
4. Check **Enforce HTTPS** (recommended)
5. GitHub will automatically create a CNAME file

### 3. Configure DNS

You have two options for DNS configuration:

#### Option A: CNAME Record (Recommended for subdomains)

1. Go to your domain registrar's DNS settings
2. Add a CNAME record:
   - **Name**: `www` (or your subdomain)
   - **Value**: `your-username.github.io`
   - **TTL**: 3600 (or default)

#### Option B: A Records (For root domain)

1. Go to your domain registrar's DNS settings
2. Add the following A records (all pointing to GitHub Pages):
   - **Name**: `@` (or leave blank for root domain)
   - **Value**: `185.199.108.153`
   - **TTL**: 3600
   
   Repeat for these IPs:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

### 4. Enable GitHub Actions

1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Save changes

### 5. Deploy

1. Push your code to the `main` branch:
   ```bash
   git add .
   git commit -m "Initial deployment"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build the Next.js site
   - Deploy to the `gh-pages` branch
   - Make your site available at your custom domain

3. Monitor the deployment:
   - Go to **Actions** tab in your repository
   - Click on the latest workflow run
   - Watch for any errors

### 6. Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit your custom domain
3. Check that the site loads correctly
4. Verify HTTPS is working (if enabled)

## Troubleshooting

### Site Not Loading

- **Check DNS propagation**: Use tools like `dig` or online DNS checkers
- **Verify CNAME/A records**: Ensure they're correctly configured
- **Check GitHub Pages settings**: Verify custom domain is set correctly
- **Wait for propagation**: DNS changes can take up to 48 hours

### Build Failures

- **Check GitHub Actions logs**: Look for specific error messages
- **Verify Node.js version**: Ensure compatibility
- **Check dependencies**: Run `npm install` locally to verify

### Custom Domain Not Working

- **Verify CNAME file**: Should exist in `gh-pages` branch root
- **Check DNS settings**: Ensure records are correct
- **Wait for SSL certificate**: GitHub automatically provisions SSL, may take time

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
# Build the site
npm run build

# The output will be in the 'out' directory
# Copy contents to gh-pages branch and push
```

## Updating the Site

Simply push changes to the `main` branch. The GitHub Actions workflow will automatically rebuild and redeploy.

## Support

For issues or questions:
- Check GitHub Actions logs
- Review Next.js documentation
- Contact the organization's technical team

