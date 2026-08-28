import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true }, // disables server image optimization
  trailingSlash: true,
};

export default nextConfig;
