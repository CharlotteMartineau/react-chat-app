import { blueGrey, teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = {
  spacing: 8,
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      light: teal[100],
      main: teal[500],
      dark: teal[700],
    },
    secondary: {
      light: blueGrey[50],
      main: blueGrey[200],
      dark: blueGrey[700],
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
};

const muiTheme = createTheme(theme);
export default muiTheme;
