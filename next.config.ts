import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site 100% estatico: o build gera a pasta `out/`, publicada no Cloudflare Pages.
  output: "export",
  trailingSlash: true,
};
export default nextConfig;
