import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#008cff",
        transluscentWhite: "#ffffffb5",
        body: "#F7F7F7",
        textGrey: "#a4a4a4",
      },
    },
  },
  plugins: [],
};
export default config;
