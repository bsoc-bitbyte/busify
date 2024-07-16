import {ThemeProvider, CssBaseline, Box} from '@mui/material';
import theme from './theme';
import {Route, Routes, useLocation} from 'react-router-dom';
import Home from './pages/Home';
import GoogleAuthLogin from './components/GoogleAuthLogin';
import ValidateAuth from './components/ValidateAuth';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BusSchedule from './pages/BusSchedule';
import Checkout from './pages/Checkout';
import Demopage from './pages/DemoPage/demopage';
import UserProtectedRoute from './components/ProtectedRoutes';
import {Toaster} from 'react-hot-toast';
import AdminDashBoard from './pages/AdminDashBoard';
import ProfilePage from './pages/Profile';
import AdminProtectedRoute from './components/AdminProtectedRoutes';
import AdminSchedule from './pages/AdminSchedule';
import NotFoundPage from './pages/NotFoundPage';
import PricingPage from './pages/PricingPage/PricingPage';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndconditions/TermsAndConditions';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import ContactUs from './pages/ContactUs/contactUs.tsx';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  const location = useLocation();
  return (
    <>
      <ThemeProvider theme={theme}>
        <ValidateAuth />
        <CssBaseline />
        <Box margin={{xs: '1rem', md: '3rem 5rem'}}>
          {!location.pathname.startsWith('/admin') && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/google" element={<GoogleAuthLogin />} />
            <Route path="/bus-schedule" element={<BusSchedule />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about" element={<AboutUs />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route
              path="/checkout"
              element={
                <UserProtectedRoute>
                  <Checkout />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/admin/dashboard"
              element={
                <AdminProtectedRoute>
                  <AdminDashBoard />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/admin/schedule"
              element={
                <AdminProtectedRoute>
                  <AdminSchedule />
                </AdminProtectedRoute>
              }
            />
            <Route
              path="/demo-Page"
              element={
                <UserProtectedRoute>
                  <Demopage />
                </UserProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <UserProtectedRoute>
                  <ProfilePage />
                </UserProtectedRoute>
              }
            />
            <Route
              path="*"
              element={
                <UserProtectedRoute>
                  <NotFoundPage />
                </UserProtectedRoute>
              }
            />
          </Routes>
          {!location.pathname.startsWith('/admin') && <Footer />}
        </Box>
      </ThemeProvider>
      <Toaster />
    </>
  );
}

export default App;
