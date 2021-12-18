import { useReducer } from 'react';

interface ICounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: ICounterState = {
    counter: 0,
    previous: 0,
    changes: 0,
};

type CounterAction =
    | {
          type: 'increaseBy';
          payload: { value: number };
      }
    | {
          type: 'reset';
      };

const reducer = (
    state: ICounterState,
    action: CounterAction
): ICounterState => {
    const { counter, changes } = state;
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0,
            };
        case 'increaseBy':
            return {
                counter: counter + action.payload.value,
                changes: changes + 1,
                previous: counter,
            };
        default:
            return state;
    }
};

const CounterReducer = () => {
    const [counterState, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleReset = () => {
        dispatch({ type: 'reset' });
    };

    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } });
    };

    return (
        <>
            <h1>Counter Reducer:</h1>
            <pre>{JSON.stringify(counterState, null, 2)}</pre>
            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
            <button onClick={handleReset}>Reset</button>
        </>
    );
};

export default CounterReducer;
