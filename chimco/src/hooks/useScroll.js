import {useEffect, useState} from "react";

const scrollX = window.scrollX
const scrollY = window.scrollY

export const useScroll = () => {
    const [scrollPosition, setScrollPosition] = useState({scrollX, scrollY});
    const onScroll = () => {
        const scrollX = window.scrollX
        const scrollY = window.scrollY
        setScrollPosition({scrollX, scrollY})
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll)
        return() => window.removeEventListener("scroll", onScroll)
    },[]);
    return scrollPosition
};