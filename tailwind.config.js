/** @type {import('tailwindcss').Config} */


// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  mode: 'jit',
  theme: {
    
    screens: {
      'sm': '40rem',
      // => @media (min-width: 640px) { ... }

      'md': '42.5rem',
      // => @media (min-width: 680px) { ... }

      'lg': '64rem',
      // => @media (min-width: 1024px) { ... }

      'xl': '80rem',
      // => @media (min-width: 1280px) { ... }

      '2xl': '96rem',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: { 
        "arrow": ['Murecho'],
    },
      //backgroundOpacity: ['active'],
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
      //require('flowbite/plugin'),
      //require('tailwind-scrollbar')({ nocompatible: true }),
    ],

    //darkMode: 'class',

  }//,
  //experimental: {
  // optimizeUniversalDefaults: true
  //}
}
