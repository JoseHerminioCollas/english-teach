import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/english-teach", // must match your repo name
  images: { unoptimized: true }, // disables server image optimization
};

export default nextConfig;
