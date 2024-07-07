/** @type {import('tailwindcss').Config} */


// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  mode: 'jit',
  theme: {
    
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '680px',
      // => @media (min-width: 680px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundOpacity: ['active'],
      colors: {
        //...colors
        orange: colors.orange,
      },

      transitionProperty: {
        'spacing': 'margin, padding',
        
      },
    },
    content: [
      "./*.{html,css,js}",
      "./*/*.{html,css,js}",
      "./*/*/*.{html,css,js}",
      "./*/*/*/*.{html,css,js}",
  ],

    plugins: [
      require('flowbite/plugin'),
      //require('tailwind-scrollbar')({ nocompatible: true }),
    ],

    darkMode: 'class',

  }//,
  //experimental: {
  // optimizeUniversalDefaults: true
  //}
}
