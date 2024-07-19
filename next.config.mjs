import bundleAnalyzer from '@next/bundle-analyzer';
import optimizeLocales from '@react-aria/optimize-locales-plugin';
import autoCert from 'anchor-pki/auto-cert/integrations/next';
import withPlugins from 'next-compose-plugins';

const withAutoCert = autoCert({ enabledEnv: 'development' });
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.plugins.push(
      optimizeLocales.webpack({
        locales: ['en-US', 'zh-TW'],
      })
    );

    return config;
  },
};

export default withPlugins([withBundleAnalyzer, withAutoCert], nextConfig);
