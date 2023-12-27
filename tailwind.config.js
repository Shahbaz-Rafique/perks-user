/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: 
        
      {
        colors: {
            'primary-color': '#552501',
            'primary-color-variant': {
                100: '#a8aac2',
                200: '#4858ff',
                300: '#55f3c7',
                400:"#3f50ff"
            },
            'secondary-color': '#A54805',
            'secondary-color-light': '#a5a8ff',
        },
    },
  },
  plugins: [],
}

