import type { Config } from "tailwindcss";
const colors = require("tailwindcss/colors");

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			// colors: {
			// 	...colors,
			// 	"btn-text-color": "#000",
			// 	"placeholder-color": "#333",
			// 	"para-text-color": "#111",
			// },
		},
	},
	plugins: [],
};
export default config;
