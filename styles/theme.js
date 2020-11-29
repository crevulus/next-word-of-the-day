import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#006d77",
    },
    secondary: {
      main: "#e29578",
    },
    cards: {
      main: "#edf6f9",
    },
  },
  disabledButton: {
    backgroundColor: "red",
  },
  overrides: {
    MuiButton: {
      containedSecondary: {
        color: "white",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
