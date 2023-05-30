import {ThemeProvider, CssBaseline} from '@mui/material';
import theme from './theme';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import GoogleAuthLogin from './components/GoogleAuthLogin';
import Footer from './components/Footer/footer.tsx';
import Logo from '../src/images/iiitdmj-logo.jpg';
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
      <Footer Logo={Logo} />
    </ThemeProvider>
  );
}

export default App;
