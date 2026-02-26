import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  compress: true,
  images: {
    unoptimized: true,
  },
  // Disable x-powered-by header for security
  poweredByHeader: false,
};

export default nextConfig;
