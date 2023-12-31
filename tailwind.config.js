/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/../src/assets/images/logo.jpg')",
        butonHero: "url('/../src/assets/images/fondo.png')",
      },
      fontFamily: {
        Gabarito: ["Gabarito", "sans-serif"],
      },
      backgroundColor: {
        mainColor: "#5d910f",
      },
    },
  },
  plugins: [],
};
