/** @type {import('tailwindcss').Config} */


// tailwind.config.js
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  theme: {
    /*
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
    },*/
    extend: {
      
      
      colors: {
        //just add this below and your all other tailwind colors willwork
        ...colors
      },

      transitionProperty: {
        'spacing': 'margin, padding',
        
      },
    },
    content: [
      "./*.{html,js,svelte,ts}",
      "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
    ],

    plugins: [
      require('flowbite/plugin')
    ],

    darkMode: 'class',

  },
  experimental: {
    optimizeUniversalDefaults: true
  }
}
