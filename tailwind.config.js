/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
};
