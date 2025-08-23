import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// In GitHub Pages, we set NEXT_PUBLIC_BASE_PATH=/repo via workflow
const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? envBasePath : undefined,
  assetPrefix: isProd && envBasePath ? `${envBasePath}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
