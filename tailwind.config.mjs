/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "'Inter Variable', sans-serif",
        dela: "'Dela Gothic One', sans-serif",
        sans: ['"Inter Variable"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        champagne: "#E4D5D5",
        orange: "#FF6224",
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/forms")],
};
