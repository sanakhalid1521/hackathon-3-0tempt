/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"], // Make sure to use "domains" instead of "domain"
    },
};

export default nextConfig;
