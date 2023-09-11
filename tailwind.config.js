/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        PtSans: ["PT Sans", "sans-serif"],
      },
      colors: {
        blanco: "#f2f2f2",
        AmarilloVerde: "#d9d04e",
        AmarilloCafe: "#d9c873",
        rojoRosa: "#F24444",
        AzulOscuro: "#0c3c59",
        azulOscuro: "#0b3c65",
        azulMarino: "#0a4b73",
        azulNormal: "#026ab1",
        AzulTurquesa: "#3caacb",
        azulClaro: "#a0d3f2",
        grisOscuro: "#5a5c5a",
      },
    },
  },
  plugins: [],
};
