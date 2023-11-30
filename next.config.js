/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverComponentsExternalPackages: ["puppeteer-extra", "puppeteer-extra-plugin-stealth"],
	},
	exclude: ["seedData"],
}

module.exports = nextConfig
