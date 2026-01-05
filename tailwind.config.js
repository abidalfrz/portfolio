/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['helvetica', 'arial', 'sans-serif'],
      },
      colors: {
        primary: '#171717',   
        secondary: '#525252', 
        background: '#ffffff',
        surface: '#f5f5f5',   
      }
    },
  },
  plugins: [],
}

