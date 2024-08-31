/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ndjockcodes.com",
        port: "",
        pathname: "/images/*",
      },
    ],
  },
};

export default nextConfig;
