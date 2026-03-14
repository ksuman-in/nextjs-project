const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/nextjs-router/:path*",
        destination: "http://localhost:3001/nextjs-router/:path*",
      },
    ];
  },
};
export default nextConfig;
