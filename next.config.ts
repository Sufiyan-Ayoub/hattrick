import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async rewrites() {
		return [
			{ source: "/@/:method*/:action*", destination: "http://localhost:3001/@/:method*/:action*" },
			{ source: "/@/:method*", destination: "http://localhost:3001/@/:method*" }
		]
	},
	typedRoutes: true,
	reactCompiler: true,
	cleanDistDir: true,
  	poweredByHeader: false,
	sassOptions: {
		silenceDeprecations: ['legacy-js-api', 'import'],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
		reactRemoveProperties: true,
	},
	productionBrowserSourceMaps: false,
	reactStrictMode: false,
  	typescript: { ignoreBuildErrors: true },
}

export default nextConfig;
