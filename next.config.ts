import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    // output: 'export',
    // reactCompiler: true,
    // trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'stasqdevxtqofioowtoi.supabase.co',
                port: '',
                pathname: '/storage/v1/object/public/**',
            },
        ],
    },
};

export default nextConfig;
