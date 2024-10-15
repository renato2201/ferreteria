/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				pathname: "**",
			},
		],
	},
	experimental: {
		staleTimes: {
			dynamic: 0,
			static: 0,
		},
	},
};

export default nextConfig;
