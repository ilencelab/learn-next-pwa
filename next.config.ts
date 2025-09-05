import withPWA from "next-pwa";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = withPWA({
  dest: "public",
  disable: !isProd, // 开发环境关掉，生产开启
})({
  reactStrictMode: true,
});

export default nextConfig;
