/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/First.jpg')",
        'Blog1': "url('./src/assets/Blog1.png')",
        'Blog2': "url('./src/assets/Blog2.png')",
        'Blog3': "url('./src/assets/Blog3.png')",
      }
    },
  },
  plugins: [],
}

