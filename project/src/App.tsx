import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4'; // Import the default export
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Chargers from './pages/Chargers';
import ProductPage from './pages/ProductPage';
import CarChargers from './pages/CarChargers';
import Projectors from './pages/Projectors';
import DataCable from './pages/DataCable';
import CurrencyCountingMachine from './pages/CurrencyCountingMachine';
import PowerBanks from './pages/PowerBanks';
import AdminDashboard from './pages/AdminDashboard';
import OEM from './pages/OEM';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Footer from './components/Footer';

// Initialize Google Analytics with your Tracking ID
ReactGA.initialize('G-SE8N29CMBL'); // Replace with your actual GA4 Tracking ID

// Component to track page views dynamically
function TrackPageView() {
  const location = useLocation();

  useEffect(() => {
    // Send a pageview event to Google Analytics whenever the route changes
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        {/* Track page views */}
        <TrackPageView />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/chargers" element={<Chargers />} />
          <Route path="/car-chargers" element={<CarChargers />} />
          <Route path="/data-cables" element={<DataCable />} />
          <Route path="/projectors" element={<Projectors />} />
          <Route path="/currency-counting-machine" element={<CurrencyCountingMachine />} />
          <Route path="/power-banks" element={<PowerBanks />} />
          <Route path="/product-page" element={<ProductPage />} />
          <Route path="/oem" element={<OEM />} />
          <Route path="/myra-admin" element={<AdminDashboard />} />
          <Route path="/terms&conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;