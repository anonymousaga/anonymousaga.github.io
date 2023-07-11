/** @type {import('tailwindcss').Config} */


// tailwind.config.js
const colors = require('tailwindcss/colors')


module.exports = {
    theme: {
        extend: {
            colors: {
                   //just add this below and your all other tailwind colors willwork
                ...colors
            }
        },
        content: [
            "./src/**/*.{html,js,svelte,ts}",
            "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
          ],
        
          plugins: [
            require('flowbite/plugin')
          ],
        
          darkMode: 'class',
    
}
}
