/** @type {import('next').NextConfig} */
import autoCert from 'anchor-pki/auto-cert/integrations/next';

const withAutoCert = autoCert({ enabledEnv: 'development' });
const nextConfig = {};

export default withAutoCert(nextConfig);
