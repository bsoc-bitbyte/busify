import { createTheme } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: '#FBBC05', 
    },
    secondary: {
      main: '#4b5563',
    },
    background: {
      default: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 14,
    h1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },  
  },
});

export default Theme;