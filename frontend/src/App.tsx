import {ThemeProvider, CssBaseline} from '@mui/material';
import theme from './theme';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import GoogleAuthLogin from './components/GoogleAuthLogin';
import ValidateAuth from './components/ValidateAuth';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ValidateAuth />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="google" element={<GoogleAuthLogin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
