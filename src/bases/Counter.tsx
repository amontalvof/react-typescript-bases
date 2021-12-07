import { useState } from 'react';

type props = {
    initialValue: number;
};

const Counter = ({ initialValue = 0 }: props) => {
    const [counter, setCounter] = useState(initialValue);

    const handleClick = () => {
        setCounter((prev) => prev + 1);
    };

    return (
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

export default Counter;
