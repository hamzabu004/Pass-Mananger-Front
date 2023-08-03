/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
        colors: {
            'windows-back': "#121117",
            'main-back': "#24232b",
            'text-clr': "#FFB300"
        },
        fontFamily:{
            'roboto': ['Roboto Mono', 'Monospace']
        }
    },
  },
  plugins: [],
}

