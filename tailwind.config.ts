/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        'mars-primary': '#EE3108',
        'mars-secondary': '#100E1D',
        navbar: '#030303',
      },
    },
    fontFamily: {
      Krona: ['Krona One', 'sans-serif'],
      Lexend: ['Lexend Exa', 'sans-serif'],
    },
  },
  plugins: [],
};
