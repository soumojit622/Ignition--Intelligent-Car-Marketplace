/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ymqpkygmownybanldbpq.supabase.co",
      },
      {
        protocol: "https",
        hostname: "wbrautjkkfzklfxnpyiw.supabase.co",
      },
      {
        protocol: "https",
        hostname: "crwjzdnqiarwjjmumyyc.supabase.co",
      },
    ],
  },
};

export default nextConfig;
