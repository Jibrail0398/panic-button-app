/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors:{
        'reddamkar':"#FE0000",
        'button-red-100':'#FF4141',
        'button-red-200':'#E40000',
        'input-text':'#F6F7F7'
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms'),require('@tailwindcss/typography')
],
};
