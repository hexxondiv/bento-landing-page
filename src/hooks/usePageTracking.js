// src/hooks/usePageTracking.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const usePageTracking = () => {
    const location = useLocation();

    useEffect(() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            event: 'pageview',
            page: location.pathname + location.search,
        });
    }, [location]);

    // useEffect(() => {
    //     window.dataLayer = window.dataLayer || [];
    //     console.log(window.dataLayer);
    // }, [location]);
};

export default usePageTracking;
