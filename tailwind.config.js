/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
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
