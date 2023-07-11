/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/html/utils/withMT");

// tailwind.config.js
const colors = require('tailwindcss/colors')


module.exports = {
    theme: {
        extend: {
            colors: {
                   //just add this below and your all other tailwind colors willwork
                ...colors
            }
        }
    },

    
},
  
module.exports = withMT({
    content: ["./index.html"],
    theme: {
      extend: {},
    },
    plugins: [],
  });