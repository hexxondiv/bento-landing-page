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


function App() {

  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </Router>


  )
}

export default App;
