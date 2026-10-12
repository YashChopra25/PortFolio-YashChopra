/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // About now lives as a section on the home page
    return [{ source: "/about", destination: "/#about", permanent: true }];
  },
};

export default nextConfig;
