const { withSentryConfig } = require("@sentry/nextjs");

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  sentry: {
    hideSourceMaps: true,
  },
  redirects: async () =>
    Promise.resolve([
      {
        source: "/:path*",
        destination: "https://www.adsgames.net/assets/:path*",
        permanent: true,
        basePath: false,
      },
    ]),
};

module.exports = withSentryConfig(nextConfig, { silent: true });
