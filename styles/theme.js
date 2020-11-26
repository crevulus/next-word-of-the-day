import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
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
});

export default theme;
