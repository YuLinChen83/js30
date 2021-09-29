// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html', './src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderWidth: {
        20: '20px',
      },
      borderRadius: {
        circle: '50%',
      },
      transitionTimingFunction: {
        clock: 'cubic-bezier(0.1, 2.7, 0.58, 1)',
      },
      boxShadow: {
        clock:
          '0 0 0 4px rgb(0,0,0,0.03), inset 0 0 0 3px #EFEFEF, inset 0 0 10px rgb(0,0,0,0.6), 0 0 10px rgba(0,0,0,0.2)',
        'clock-inner': '-4px -4px #eee inset',
      },
    },
  },
  plugins: [],
};
