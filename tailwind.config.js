/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
      colors: {
        'azul': '#5b9ebd',
        'azulado': '#0808ff',
        'azulejo': '#255d77',
        'azulino': '#010336',

      },
      fontSize: {
        'xxs': '1,5rem',   // 10px
        '10xl': '10rem',      // 160px
        'custom': '2rem', // 22px
      }
    },
    plugins: [daisyui],
  }
  

