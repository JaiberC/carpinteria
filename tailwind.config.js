/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        wood: {
          50:  '#fdf8f0',
          100: '#faefd9',
          200: '#f3d9a8',
          300: '#eabd72',
          400: '#e09d42',
          500: '#d4821f',
          600: '#b86716',
          700: '#964f15',
          800: '#7a4018',
          900: '#643618',
        },
      },
    },
  },
  plugins: [],
}
