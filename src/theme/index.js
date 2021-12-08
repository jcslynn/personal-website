import { createTheme, adaptV4Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: "#292929",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#f8f8f8",
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: {
      fontSize: 64,
      fontStyle: "normal",
      fontWeight: 500,
      color: "#292929",
    },
    h2: {
      fontSize: 32,
      fontStyle: "normal",
      fontWeight: 500,
      color: "#292929",
    },
    h3: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 500,
      color: "#494949",

    },
    h4: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 400,
      color: "#292929",

    },
    subtitle1: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 500,
      color: "#838383",
    },
    body1: {
      fontSize: 18,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0.25,
      color: "#565656",
    },
    body2: {
      fontSize: 24,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: 1.5,
      letterSpacing: 0.25,
      color: "#494949",
      textAlign: "center",
    },
  },
}));
export default theme;
