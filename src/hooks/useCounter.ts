import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

const MAXIMUM_COUNT = 10;

const useCounter = () => {
    const [counter, setCounter] = useState(5);
    const counterElement = useRef<HTMLHeadingElement>(null);

    const handleClick = () => {
        setCounter((prev) => Math.min(prev + 1, MAXIMUM_COUNT));
    };

    useEffect(() => {
        if (counter < MAXIMUM_COUNT) {
            return;
        }
        console.log(
            '%cThe maximum value was reached',
            'color: red; background-color: black'
        );

        const timeline = gsap.timeline();
        timeline
            .to(counterElement.current, {
                y: -10,
                duration: 0.2,
                ease: 'ease.out',
            })
            .to(counterElement.current, {
                y: 0,
                duration: 1,
                ease: 'bounce.out',
            });
    }, [counter]);

    return {
        counter,
        elementToAnimate: counterElement,
        handleClick,
    };
};

export default useCounter;
