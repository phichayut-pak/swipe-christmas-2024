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

module.exports.theme.extend.animation = {
  giggle: 'giggle 1s ease-in-out infinite',
};

module.exports.theme.extend.keyframes = {
  giggle: {
    '0%, 100%': { transform: 'translateX(0)' },
    '50%': { transform: 'translateX(-10px)' },
  },
};