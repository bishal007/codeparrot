// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          blue: {
            900: '#091133',
            700: '#505f98',
          },
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
  