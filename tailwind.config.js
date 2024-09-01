/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef2f4",
          100: "#fde6e9",
          200: "#fbd0d9",
          300: "#f7aab9",
          400: "#f27a93",
          500: "#e63f66",
          600: "#d42a5b",
          700: "#b21e4b",
          800: "#951c45",
          900: "#801b40",
          950: "#470a1f",
        },
        secondary: {
          50: "#f7f8f8",
          100: "#edeef1",
          200: "#d8dbdf",
          300: "#b6bac3",
          400: "#8e95a2",
          500: "#6b7280",
          600: "#5b616e",
          700: "#4a4e5a",
          800: "#40444c",
          900: "#383a42",
          950: "#25272c",
        },
      },
    },
  },
  plugins: [],
};
