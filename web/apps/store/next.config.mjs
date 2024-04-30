// NOTE: this whole package is bugged and once they fix this we can remove this workaround
// eslint-disable-next-line import/no-unresolved
import vercelToolbar from '@vercel/toolbar/plugins/next';
import { withSentryConfig } from '@sentry/nextjs';
import bundleAnalyzer from '@next/bundle-analyzer';
// eslint-disable-next-line import/no-unresolved
import million from 'million/compiler';

const millionConfig = {
    auto: { rsc: true },
};
const isProd = process.env.NODE_ENV === 'production';
/** @type {import("next").NextConfig} */
const nextConfig = {
    async headers() {
        return !isProd
            ? [
                {
                    // allow CORS only on dev for admin site to get monaco files
                    source: '/min/vs/(.*)',
                    headers: [
                        { key: 'Access-Control-Allow-Origin', value: '*' },
                        { key: 'Access-Control-Allow-Methods', value: 'GET' },
                    ],
                },
            ]
            : [];
    },
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        });
        return config;
    },
    reactStrictMode: true,
    typescript: {
        ignoreBuildErrors: false,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    transpilePackages: ['@store/ui'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'uploadthing.com',
            },
            {
              protocol: 'https',
              hostname: 'cdn.discordapp.com'
            },
            {
              protocol: 'https',
              hostname: 'web.poecdn.com'
            },
            {
              protocol: 'https',
              hostname: 'placehold.co'
            },
            {
              protocol: 'https',
              hostname: 'cdn.cloudflare.steamstatic.com'
            },
            {
              protocol: 'https',
              hostname: 'cdn.discordapp.com/avatars'
            }
        ],
    },
    swcMinify: true,
};
const withBundleAnalyzer = bundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
});
const withVercelToolbar = vercelToolbar();

export default withSentryConfig(withSentryConfig(million.next(withSentryConfig(
// NOTE: this whole package is bugged and once they fix this we can remove this workaround
// @ts-ignore
withBundleAnalyzer(withVercelToolbar(nextConfig)),
{
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
silent: true,

org: 'wildbase',
project: 'store',
},
{
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
transpileClientSDK: true,

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,
},
), millionConfig), {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
silent: true,
org: "wildbase",
project: "store",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
transpileClientSDK: true,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors.
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
}), {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
silent: true,
org: "wildbase",
project: "store",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
transpileClientSDK: true,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors.
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});
