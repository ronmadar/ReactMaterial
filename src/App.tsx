import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Services from './components/Services';
// import Products from './components/Products';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/global.scss';
const Products = React.lazy(() => import('./components/Products'));

function App() {
  return (
    <Router>
      <Navbar role="navigation"  />
      <main className="main-content" role="main">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={
            <Suspense fallback={<div>Loading...</div>}>
              <Products />
            </Suspense>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<Form />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
