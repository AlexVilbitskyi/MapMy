import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

const primary = "#2B256C";
// const secondary = "rgba(43, 37, 108, 0.56)";
const lightGreen = "rgba(34, 152, 177, 0.4)";
const strongGreen = "#2298B1";
const linearGradientForButton = "linear-gradient(90deg, #2B256C 0%, #2298B1 100%)";
const background = "#fff";
const warningLight = "rgba(253, 200, 69, .3)";
const warningMain = "rgba(253, 200, 69, .5)";
const warningDark = "rgba(253, 200, 69, .7)";

const borderWidth = 1;
const borderColor = "rgba(43, 37, 108, 0.16)";

const spacing = 8;

const theme = createMuiTheme({
  palette: {
    primary: { 
        main: primary 
    },
    secondary: { 
        main: lightGreen
    },
    common: {
        lightGreen: lightGreen,
        strongGreen: strongGreen,
        linearGradientForButton: linearGradientForButton,
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark
    },
    background: {
      default: background
    },
    spacing
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth
  },
  overrides: {
    MuiDivider: {
      root: {
        backgroundColor: borderColor,
        height: borderWidth
      }
    },
    MuiListItem: {
      divider: {
        borderBottom: `${borderWidth}px solid ${borderColor}`
      }
    },
    MuiButton: {
      containedPrimary: {
        background: linearGradientForButton,
      },
    },
  },
});

export default responsiveFontSizes(theme);