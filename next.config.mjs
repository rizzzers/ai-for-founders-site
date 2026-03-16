/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // www → non-www
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.aiforfounders.co" }],
        destination: "https://aiforfounders.co/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
