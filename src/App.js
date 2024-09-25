import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
// import Contact from "./pages/Contact";
// import Teams from "./pages/Terms";
// import PrivacyPolicy from './pages/PrivacyPolicy';
// import CookiesPage from "./pages/CookiesPage"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import ScrollToTop from './components/ScrollToTop';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TaC from "./pages/TaC";
import CancellationPolicy from "./pages/CancellationPolicy";
import RefundPolicy from "./RefundPolicy";
import AboutUsPage from "./pages/AboutUsPage";


function App() {

  return (
    <Router>
      <Header />
      <ScrollToTop >  {/* Add ScrollToTop to listen for route changes */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help-and-support" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TaC />} />
        <Route path="/cancellation-policy" element={<CancellationPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      </ScrollToTop>
      <Footer />
    </Router>


  )
}

export default App;
