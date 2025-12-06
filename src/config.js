/**
 * Configuration settings for the XpertRF website
 */

export const config = {
  // API Configuration
  api: {
    baseURL: process.env.API_BASE_URL || 'https://api.XpertRF.com',
    timeout: 10000,
    retries: 3,
  },

  // Feature Flags
  features: {
    enableAnalytics: true,
    enableCookieConsent: true,
    enableLazyLoading: true,
    enableServiceWorker: false,
  },

  // SEO Configuration
  seo: {
    defaultTitle: 'XpertRF Semiconductor, IoT Systems and Cloud Connectivity',
    titleTemplate: '%s | XpertRF',
    defaultDescription: 'XpertRF Corporation is a high-performance semiconductor, IoT systems and Cloud connectivity service provider.',
    siteUrl: 'https://www.XpertRF.com',
    twitterHandle: '@XpertRFCorp',
  },

  // Social Media
  social: {
    twitter: 'https://twitter.com/XpertRFCorp',
    linkedin: 'https://www.linkedin.com/company/XpertRF-corporation',
    facebook: 'https://www.facebook.com/XpertRFCorp',
    youtube: 'https://www.youtube.com/user/XpertRFCorporation',
  },

  // Performance
  performance: {
    imageOptimization: true,
    lazyLoadImages: true,
    prefetchLinks: true,
    compressionLevel: 9,
  },

  // Development
  dev: {
    debug: process.env.NODE_ENV === 'development',
    showPerformanceMetrics: false,
  },
};

export default config;
