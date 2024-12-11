/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        christmas: ["Home Christmas", "sans-serif"],
        poppins: ["Poppins", "serif"],
        prompt: ["Prompt", "sans-serif"],
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [],
  },
}


