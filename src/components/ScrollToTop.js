import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap styles

function ScrollToTop({ children }) {
  const { pathname } = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    setIsLoading(true);
    setFadeClass("fade-in");
    

    // Simulate a delay for loading (e.g., 1 second)
    const timer = setTimeout(() => {
      setFadeClass("fade-out"); // Start fading out the spinner

      // Wait for the fade-out to complete before hiding the spinner
      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);
      }, 500); // Fade out duration (adjust as needed)

      return () => clearTimeout(fadeOutTimer);
    }, 1000); // Initial loading delay

    return () => clearTimeout(timer);
  }, [pathname]);
  
  useEffect(() => {
    if(isLoading)return;
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);
  },[isLoading])

  if (isLoading) {
    return (
      <div className={`loading-spinner-container ${fadeClass}`}>
        {/* Bootstrap 5 spinner */}
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return children;
}

export default ScrollToTop;
