import {useEffect, useState} from "react";
import {throttle, debounce} from 'lodash';

export const useScroll = () => {

    const [scrollY, setScrollY] = useState(window.scrollY);

    const listener = () => {
        setScrollY( prev => window.scrollY);
      };
    
    useEffect(() => {
        
        const scrollDebounce = () => debounce(listener, 300);
        // const scrollThrottle = () => throttle(listener, 300);
        window.addEventListener("scroll", scrollDebounce());

        return () => {
            window.removeEventListener("scroll", scrollDebounce());
        };

    },[]);

    return scrollY
};