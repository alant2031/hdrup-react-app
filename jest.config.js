/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
	preset: "ts-jest",
	roots: ["./src"],
	transform: {
		"^.+\\.tsx?$": ["ts-jest", { diagnostics: { ignoreCodes: ["TS151001"] } }],
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	testEnvironment: "jsdom",
	transformIgnorePatterns: ["node_modules/(?!(.*\\.mjs$|pdfjs-dist))"],
	moduleNameMapper: {
		"\\.(css|less|scss|sass|svg)$": "identity-obj-proxy",
	},
};
