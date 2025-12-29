import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GA_MEASUREMENT_ID = 'G-6DWQJ5038Q';

export const GoogleAnalytics = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize Google Analytics script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        script.async = true;
        document.head.appendChild(script);

        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
            window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);

        // Add to window for type safety if needed, or just suppress TS error below
        (window as any).gtag = gtag;

        return () => {
            // Cleanup script if component unmounts (optional, usually this provider stays mounted)
            document.head.removeChild(script);
        };
    }, []);

    useEffect(() => {
        // Track page views on route change
        if (typeof (window as any).gtag === 'function') {
            (window as any).gtag('config', GA_MEASUREMENT_ID, {
                page_path: location.pathname + location.search,
            });
        }
    }, [location]);

    return null;
};
