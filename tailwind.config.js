/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6',
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a'
          },
          olive: {
            50: '#f7f8ef',
            100: '#edf0d3',
            200: '#dde3aa',
            300: '#c6cf7a',
            400: '#b0bd54',
            500: '#96a83a',
            600: '#75852c',
            700: '#596523',
            800: '#47511e',
            900: '#3c451c'
          }
        }
      }
    },
  },
  plugins: [],
}
