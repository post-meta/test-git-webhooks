export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://test-git-webhooks.vercel.app/sitemap.xml',
  }
}