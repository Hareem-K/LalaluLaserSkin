import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';
import ServiceDetail from './pages/ServiceDetail';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import ConcernPage from './pages/concerns/ConcernPage';

function App() {
  return (
    <AuthProvider>
      <BookingProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:serviceId" element={<ServiceDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book" element={<BookNow />} />
                <Route path="/services/products" element={<ProductList />} />
                <Route path="/services/products/:productId" element={<ProductDetail />} />
                <Route path="/concerns/:slug" element={<ConcernPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;