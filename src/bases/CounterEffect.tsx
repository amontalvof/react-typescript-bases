import { useEffect, useState } from 'react';

const MAXIMUM_COUNT = 10;

const CounterEffect = () => {
    const [counter, setCounter] = useState(5);

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
    }, [counter]);

    return (
        <>
            <h1>CounterEffect: {counter}</h1>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

export default CounterEffect;
