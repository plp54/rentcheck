import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  // Pour supporter les routes API avec export static
  // Les API routes ne fonctionneront qu'en mode serveur
  // Pour Cloudflare Pages, il faudra utiliser des Functions
};

export default nextConfig;
