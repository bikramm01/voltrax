/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#28a745",
        accent: "#fdd835",
      },
      keyframes: {
        dimPulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'dim-pulse': 'dimPulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
