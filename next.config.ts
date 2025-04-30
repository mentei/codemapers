import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
       // ✅ add this
      // ✅ no "https://" prefix
    ],
  },
};

export default nextConfig;
