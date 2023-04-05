import { Roboto, Montserrat } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const montserrat = Montserrat({
  weight: ['300', '400', '600', '800'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#172815',
    },
    secondary: {
      main: '#7d8c7b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h2: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
    },
    h3: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
    },
    button: {
      fontFamily: montserrat.style.fontFamily,
      fontWeight: 600,
    },
    allVariants: {
      fontFamily: roboto.style.fontFamily,
    },
  },
});

export default theme;