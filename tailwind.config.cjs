/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors:{
        'secondary' : '#262626',
        'primary' : '#ffffff',
        'substitute' : '#f2f2f2',
        'insta' : '#c72587',
        'pin' : '#cb2028',
        'feed' : '#ffa500',
        'face' : '#1877f2',
        'tweet' : '#1d9bf0'
      },
    fontSize :{
        base : '18px'
    },  
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1040px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
      'ic': {'min': '800px'}
    }
  },
  plugins: [],
}
