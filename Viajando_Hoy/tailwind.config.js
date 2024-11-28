/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // Revisa si esta ruta es correcta
  theme: {
    extend: {
      fontFamily: {
        'bebas': ['Bebas Neue', 'sans-serif'],
        'edu-arrows': ['Edu AU VIC WA NT Arrows', 'serif'],
        'edu-pre': ['Edu AU VIC WA NT Pre', 'serif'],
        'oswald': ['Oswald', 'sans-serif'],
        'onest': ['Onest', 'sans-serif'],
      },
      brightness: {
        '175': '1.75',
        '200': '2',
      }
    },
  },
  plugins: [],
}
