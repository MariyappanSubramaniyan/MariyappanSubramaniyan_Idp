import { createTheme } from "@mui/material";

export const theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: "Gilroy",
    fontWeightBold: 600,
    h2: {
      fontSize: "24px",
      lineHeight: "100%",
      letterSpacing: "-0.5%",
      color: "#E8E7F0",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "19px",
      letterSpacing: "0%",
    },
  },
  palette: {
    text: {
      primary: "#E8E7F0",
      secondary: "#A5A5A6", 
    },
    background: {
      default: "#28272B",
      paper: "#262529", 
    },
    secondary: {
      main: "#B4A9FF",
    },
    grey: {
      900: "#262529", 
      800: "#28272B", 
    },
  },
});
