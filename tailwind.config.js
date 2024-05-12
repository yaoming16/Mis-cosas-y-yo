/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#010102",
        "custom-dark-blue": "#0c062e",
        "custom-purple": "#23143c",
        "custom-cyan": "#67b3b5",
        "custom-lighter-cyan": "#aed1ce",
        "custom-red": "#f31919",
      },
    },

    plugins: [require("tw-elements-react/dist/plugin.cjs")],
  },
};
