import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Products from './pages/Products';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Chargers from './pages/Chargers';
import ProductPage from './pages/ProductPage';
import CarChargers from './pages/CarChargers';
import Projectors from './pages/Projectors';
import DataCable from './pages/DataCable';
import CurrencyCountingMachine from './pages/CurrencyCountingMachine';
import PowerBanks from './pages/PowerBanks';
import AdminDashboard from './pages/AdminDashboard';
import OEM from './pages/OEM';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/chargers" element={<Chargers/>} />
          <Route path="/car-chargers" element={<CarChargers/>} />
          <Route path="/data-cables" element={<DataCable/>} />
          <Route path="/projectors" element={<Projectors/>} />
          <Route path="/currency-counting-machine" element={<CurrencyCountingMachine/>} />
          <Route path="/power-banks" element={<PowerBanks/>} />
          <Route path="/product-page" element={<ProductPage/>} />
          <Route path="/oem" element={<OEM/>} />
          <Route path="/myra-admin" element={<AdminDashboard/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;