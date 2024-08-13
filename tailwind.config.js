/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' based on your preference
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gradientStart: '#FFAF7B',
        gradientMiddle: '#D76D77',
        gradientEnd: '#3A1C71',
        customBlue: '#1B1A55',
      },
    },
  },
  plugins: [],
};
