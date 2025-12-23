/** @type {import('next').NextConfig} */
const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true'
const isGitHubPages = process.env.GITHUB_PAGES === 'true' && !isCustomDomain

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGitHubPages ? '/bmbusa' : '',
  assetPrefix: isGitHubPages ? '/bmbusa' : '',
}

module.exports = nextConfig

