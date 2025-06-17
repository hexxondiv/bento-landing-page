import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import Careers from "./pages/Careers";
import UserDownload from "./pages/downloadLinks/UserDownload";
import VendorDownload from "./pages/downloadLinks/VendorDownload";
import RiderDownload from "./pages/downloadLinks/RiderDownload";
import FaqFage from "./pages/FaqFage";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'pageview',
      page_path: location.pathname + location.search,

    });
  }, [location.pathname, location.search]);

  return (
    <Router>
      <Header />

      <ScrollToTop >  {/* Add ScrollToTop to listen for route changes */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TaC />} />
          <Route path="/cancellation-policy" element={<CancellationPolicy />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/faqs" element={<FaqFage />} />

          <Route path="/download" element={<UserDownload />} />
          <Route path="/vendor/download" element={<VendorDownload />} />
          <Route path="/rider/download" element={<RiderDownload />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </ScrollToTop>
      <Footer />
    </Router>


  )
}

export default App;
