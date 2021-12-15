import { useLayoutEffect, useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const useCounter = ({ maxCount = 1 }) => {
    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<any>(null);
    const timeline = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter((prev) => Math.min(prev + 1, maxCount));
    };

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return;
        timeline.current
            .to(elementToAnimate.current, {
                y: -10,
                duration: 0.2,
                ease: 'ease.out',
            })
            .to(elementToAnimate.current, {
                y: 0,
                duration: 1,
                ease: 'bounce.out',
            })
            .pause();
    }, []);

    useEffect(() => {
        timeline.current.play(0);
    }, [counter, maxCount]);

    return {
        counter,
        elementToAnimate,
        handleClick,
    };
};

export default useCounter;
