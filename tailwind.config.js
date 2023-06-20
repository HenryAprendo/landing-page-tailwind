/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
    colors: {
      // PROJECT FILO DARK
      // Primary
      'dark-blue-intro-fd': '#1C2431',
      'dark-blue-main-fd': '#181F2A',
      'dark-blue-footer-fd': '#0B1523',
      'dark-blue-testimonial-fd': '#202A3C',
      // Accent
      'cyan-fd': '#65E2D9',
      'blue-fd': '#339ECC',
      'light-red-fd': '#FF4242',
      // Neutral
      'white-fd': '#ffffff',
    },

    fontFamily: {
      sans: ['Raleway','sans-serif'],
      sans: ['Open Sans','sans-serif'],
    }

  },
  plugins: [],
}

