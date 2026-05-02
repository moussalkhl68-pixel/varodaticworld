/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Redirect www to non-www (http and https)
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.varodaticiptv.pro",
          },
        ],
        destination: "https://varodaticiptv.pro/:path*",
        permanent: true, // 301 redirect
      },
      // Redirect http to https
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://varodaticiptv.pro/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
