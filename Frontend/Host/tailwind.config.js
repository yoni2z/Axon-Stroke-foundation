/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lora: ["Lora"],
        Lato: ['Lato'],
      },
      colors: {
        primary: "#cc1631",
        secondary: "#949494",
        background: "#F4F5F7",
        customBlue: '#26358a',
        customRed: '#cc1631',
        button: "#26358a",
      },
    },
  },
  plugins: [],
};
