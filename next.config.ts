import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export (SSG)
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Add trailing slashes to URLs
};

export default nextConfig;
