import { createMuiTheme } from "@material-ui/core/styles";

// general base theme, Change to your liking...
const theme = createMuiTheme({
  palette: {
    color: {
      red: "#CC3333",
      lightBlue: "#69aca9",
      lightYellow: " #FFFFF0",
      blue: "#4671a2",
      blueHover: "#6280a3",
      lightGreen: "#b7cb59",
      green: "#81bb48",
      purple: "#8a63a9",
      pink: "#bf5b7b",
      offWhite: "#f7f7f7",
      coolBlue: "#0080ff",
      coolBlueHover: "#3696f5",
    },
    primary: {
      main: "#0080ff",
      hover: "#3696f5",
    },
  },
});

export default theme;
