const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/nextjs-router/:path*",
        destination: "http://localhost:3001/nextjs-router/:path*",
      },
      {
        source: "/nextjs-handler/:path*",
        destination: "http://localhost:3002/nextjs-handler/:path*",
      },
      {
        source: "/data-fetching/:path*",
        destination: "http://localhost:3003/data-fetching/:path*",
      },
    ];
  },
};
export default nextConfig;
