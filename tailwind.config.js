import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    maxWidth:{
      Container:"1280px"
    },
    fontFamily: {
      'sans': ['DM Sans', 'sans-serif']
    },
    backgroundImage:{
      'one':"url(./src/assets/Product1.png)",
      'two':"url(./src/assets/Product2.png)",
      'three':"url(./src/assets/Product3.png)",
      'four':"url(./src/assets/Product4.png)"
    }
  },
  plugins: [],
}