/** @type {import('tailwindcss').Config} */
import withMT from '@material-tailwind/react/utils/withMT';

// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./components/**/*.{html,js}",
    "./components/*.{html,js}",
    "./pages/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
