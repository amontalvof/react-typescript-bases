import { useState } from 'react';

interface IProps {
    initialValue?: number;
}

interface ICounterState {
    counter: number;
    clicks: number;
}

const CounterBy = ({ initialValue = 5 }: IProps) => {
    const [{ counter, clicks }, setCounterState] = useState<ICounterState>({
        counter: initialValue,
        clicks: 0,
    });

    const handleClick = (value: number) => {
        setCounterState(({ clicks, counter }) => ({
            counter: counter + value,
            clicks: clicks + 1,
        }));
    };

    return (
        <>
            <h1>CounterBy: {counter}</h1>
            <h1>Clicks: {clicks}</h1>
            <button onClick={() => handleClick(1)}>+1</button>
            <button onClick={() => handleClick(5)}>+5</button>
        </>
    );
};

export default CounterBy;
