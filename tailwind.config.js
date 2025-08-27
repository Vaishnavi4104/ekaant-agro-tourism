/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003E17',    // Dark green
        secondary: '#6A8E4E',  // Medium green
        accent: '#B1D082',     // Light green
        brown: '#563a1e',      // Brown
        white: '#FFFFFF',      // White
        darkGrey: '#1a1a1a',   // Dark grey
        lightBackground: '#D9D9D9', // New light grey background color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23B1D082\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"%3E%3Ccircle cx=\"3\" cy=\"3\" r=\"1\"/%3E%3C/g%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
}
