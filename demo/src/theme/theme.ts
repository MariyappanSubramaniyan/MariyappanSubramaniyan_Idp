import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#224DFF",
    },
    grey: {
      500: "#808080",
      100: "#F2F4FC",
    },
    background: {
      default: "#F7F8FA",
    },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
  typography: {
    fontFamily: "Roboto",
    subtitle1:{
    color:"#2C2C2E"
    }
  },
});

export default theme;
