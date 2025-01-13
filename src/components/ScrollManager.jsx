import React, { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollManager = () => {
    const location = useLocation();
    const navigationType = useNavigationType();
    const scrollPositions = useRef(new Map());

    useEffect(() => {
        const handleScroll = () => {
            scrollPositions.current.set(location.pathname, window.scrollY);
        };

        // Add scroll listener to continuously track position
        window.addEventListener('scroll', handleScroll);

        // If navigating back (POP), restore the scroll position
        if (navigationType === 'POP') {
            const savedPosition = scrollPositions.current.get(location.pathname) || 0;

            // Use multiple timeouts to ensure the position is restored
            // after all content and images are loaded
            setTimeout(() => {
                window.scrollTo(0, savedPosition);
            }, 0);

            setTimeout(() => {
                window.scrollTo(0, savedPosition);
            }, 100);
        } else {
            // If navigating to a new page (PUSH/REPLACE), scroll to top
            window.scrollTo(0, 0);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Save the final scroll position before unmounting
            scrollPositions.current.set(location.pathname, window.scrollY);
        };
    }, [location, navigationType]);

    return null;
};

export default ScrollManager;