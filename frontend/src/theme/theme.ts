import createTheme from "@mui/material/styles/createTheme";

const primaryColors = {
  turquoise: '#5ACCCC',
  white: '#FFFFFF',
  steelBlue: '#335C6E',
  yellow: '#FABD33',
};

const secondaryColors = {
  turquoiseLight: '#CFFAFA',
  orangeRed: '#F76434',
  teal: '#4AA088',
  yellowDark: '#FAAD00',
  turquoiseDark1: '#53C2C2',
  orangePastel: '#FFE6DC',
  turquoiseDark2: '#28B8B8',
};

export const theme = createTheme({  
    palette: {
      primary: {
        main: primaryColors.turquoise,
        contrastText: primaryColors.white,
        dark: primaryColors.steelBlue,
        light: primaryColors.yellow,
    },
    secondary: {
      main: secondaryColors.orangeRed,
      contrastText: secondaryColors.teal,
      light: secondaryColors.turquoiseLight,
      dark: secondaryColors.yellowDark,
    },
    background: {
      default: primaryColors.white,
    },
    },
  typography: {
    fontFamily: '"Mulish", sans-serif',
  },
  components: {
    MuiCssBaseline: {
        styleOverrides: {
            '@global': {
                '@font-face': '"Mulish", sans-serif'
            }
        }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          textTransform: 'none',
          fontSize: '1rem',
          // padding: '0.75rem 1.5rem'
        }
      }
    }
  }
});