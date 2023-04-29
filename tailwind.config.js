/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // Backgrounds Colors
        'bg-page': '#222222',
        'bg-footer': '#252525',
        'bg-box': '#333333',
        // Weird Text
        'medium-text': '#AAAAAA',
        'bg-text': '#F5F5F5',
        // Borders
        'box-border': '#444444',
        // Color text
        'text-color': '#D5D5D5',
        // Icons color
        'icon-color': '#2196F3',
        // Nav-link
        'disabled': '#B8B8B8',

      }
    },
  },
  plugins: [],
}

