import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      "50": "#fef2f4",
      "100": "#fde6e9",
      "200": "#fbd0d9",
      "300": "#f7aab9",
      "400": "#f27a93",
      "500": "#e63f66",
      "600": "#d42a5b",
      "700": "#b21e4b",
      "800": "#951c45",
      "900": "#801b40",
      // "950": "#470a1f",
      main: "#e63f66", // main color for primary
      contrastText: "#ffffff", // text color against primary color
    },
    secondary: {
      50: "#f6f7f9",
      100: "#eceef2",
      200: "#d5d9e2",
      300: "#b1bbc8",
      400: "#8695aa",
      500: "#64748b",
      600: "#526077",
      700: "#434e61",
      800: "#3a4252",
      900: "#343a46",
      //   950: "#23272e",
      main: "#64748b", // main color for secondary
      contrastText: "#ffffff", // text color against secondary color
    },
    warning: {
      main: "#ffa726",
      contrastText: "#000000",
    },
    success: {
      main: "#4caf50",
      contrastText: "#ffffff",
    },
    error: {
      main: "#e11d3f", // Similar to primary[600]
      contrastText: "#ffffff",
    },
    background: {
      default: "#f6f7f9",
      paper: "#ffffff",
    },
  },
  typography: {
    // You can customize typography here if needed
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default theme;
