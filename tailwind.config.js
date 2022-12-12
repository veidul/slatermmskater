/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://i.ibb.co/kQCKMkT/67404170-2865317693495245-3021206530037907456-n.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
