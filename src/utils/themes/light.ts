import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = responsiveFontSizes(
  createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          outlined: {
            backgroundColor: '#fff',
          },
        },
      },
    },
    palette: {
      background: {
        default: '#f8f8f8',
      },
      mode: 'light',
    },
    spacing: 4,
    typography: {
      button: {
        textTransform: 'none',
      },
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  }),
);

export default theme;
