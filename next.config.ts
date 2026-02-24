import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // Configuration pour Cloudflare Pages
  trailingSlash: true,
};

export default nextConfig;
