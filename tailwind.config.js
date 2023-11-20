/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./components/**/*.{html,js}",
            "./pages/*.js"
          ],
  theme: {
    extend: {},
  },
  plugins: [],
})

