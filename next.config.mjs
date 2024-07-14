import bundleAnalyzer from '@next/bundle-analyzer';
import autoCert from 'anchor-pki/auto-cert/integrations/next';
import withPlugins from 'next-compose-plugins';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: process.env.ANALYZE === 'true',
});
const withAutoCert = autoCert({ enabledEnv: 'development' });

export default withPlugins([withBundleAnalyzer, withAutoCert]);
