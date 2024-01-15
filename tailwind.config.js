/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 100s linear infinite',
      }
    },
  },
  plugins: [require('flowbite/plugin'), require("daisyui")]
}

