/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable Just-In-Time compilation
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          100: '#32324f',
          200:  '#000322' 
        },
        primary:'#ff6363',
        secondary: {
          100: '#e2e2d5',
          200: '#888883'
        },
      },
      fontFamily: {
        body: 'Nunito',
      }
    },
  },
  plugins: [],
}

