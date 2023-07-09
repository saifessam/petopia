import type { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import constants from './constants';

const theme: Theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "transparent",
          boxShadow: "none",
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: "700",
        },
      }
    },
  },
  palette: {
    primary: { main: constants.ACCENT_PRIMARY },
    secondary: { main: constants.ACCENT_SECONDARY },
    background: { default: constants.BACKGROUND_PRIMARY },
    text: { primary: constants.TEXT_PRIMARY, secondary: constants.TEXT_SECONDARY },
    info: { main: constants.BACKGROUND_PRIMARY },
  },
  typography: {
    fontFamily: "Nunito",
  },
});

export default theme;