import { useReducer } from 'react';
import { doIncreaseBy, doReset } from './actions';
import { ICounterState } from './interfaces';
import { reducer } from './state/reducer';

const INITIAL_STATE: ICounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

const CounterReducer = () => {
    const [counterState, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch(doReset());
    };

    const increaseBy = (value: number) => {
        dispatch(doIncreaseBy(value));
    };

    return (
        <>
            <h1>Counter Reducer Segmented:</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

export default CounterReducer;
