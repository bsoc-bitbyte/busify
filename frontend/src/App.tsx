import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import theme from './theme';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import GoogleAuthLogin from './components/GoogleAuthLogin';
import ValidateAuth from './components/ValidateAuth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BusSchedule from './pages/BusSchedule';
import Checkout from './pages/Checkout';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ValidateAuth />
      <CssBaseline />
      <Box margin={{xs: '2rem', md: '3rem 5rem'}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/google" element={<GoogleAuthLogin />} />
          <Route path="/bus-schedule" element={<BusSchedule />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
