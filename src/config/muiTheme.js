import { teal } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const palette = {
  primary: {
    light: teal[100],
    main: teal[500],
    dark: teal[700],
  },
  secondary: {
    light: "#fbf9f6",
    main: "#f9f5ef",
    dark: "#f0ede8",
  },
  disabled: {
    main: "#f0ede8",
  },
};

const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none",
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        borderRadius: 8,
        "&.Mui-selected": {
          backgroundColor: palette.secondary.main,

          ":hover": {
            backgroundColor: palette.secondary.main,
          },
        },
        ":hover": {
          backgroundColor: palette.secondary.light,
        },
      },
    },
  },
  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },

    variants: [
      {
        props: { variant: "contained" },
        style: {
          backgroundColor: palette.primary.main,
        },
      },
    ],
  },
  MuiCardHeader: {
    styleOverrides: {
      root: {
        "& .MuiCardHeader-action": {
          alignSelf: "center",
        },
      },
    },
  },
  MuiPaper: {
    variants: [
      {
        props: { variant: "contained" },
        style: {
          backgroundColor: palette.secondary.main,
          borderRadius: 0,
        },
      },
    ],
  },
  MuiFilledInput: {
    styleOverrides: {
      root: {
        backgroundColor: "white",
        borderRadius: 24,
        fontSize: 14,
        border: `${palette.secondary.dark} solid 1px`,
        "&.Mui-focused": {
          backgroundColor: "white",
        },
        ":hover": {
          backgroundColor: "white",
        },
      },
    },
  },
};

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
  palette,
  components,
  typography: {
    subtitle1: {
      color: "#404040de",
      fontSize: "12px",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
    },
  },
};

const muiTheme = createTheme(theme);
export default muiTheme;
