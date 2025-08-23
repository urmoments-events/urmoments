import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
// Set repo name for GitHub Pages project sites
const repo = "urmoments"; // TODO: change if repository name differs

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  trailingSlash: true,
};

export default nextConfig;
