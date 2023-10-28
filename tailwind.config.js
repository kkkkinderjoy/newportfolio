/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js,ts}" ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'spin': 'spin 10s linear infinite',
      },
      
    },
  },
  plugins: [],
}

