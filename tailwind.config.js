/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display"],
        lato: ['Lato'],
        laro: ['Lora']
      },
      colors: {
        Main: {
        50: '#e6f3ff',
        100: '#c3d7ef',
        200: '#9fbcdf',
        300: '#7aa2d2',
        400: '#5587c3',
        500: '#3d6dab',
        600: '#2e5585',
        700: '#203d60',
        800: '#10243c',
        900: '#000d19',
        } 
      }
    },
  },
  plugins: [],
}

