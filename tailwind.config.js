const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fira Mono"],
        body: ["Fira Mono"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
});
