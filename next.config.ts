import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // disables server image optimization
};

export default nextConfig;
