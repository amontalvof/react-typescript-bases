import { useReducer } from 'react';

interface ICounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: ICounterState = {
    counter: 10,
    previous: 10,
    changes: 10,
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
    switch (action.type) {
        case 'reset':
            return {
                counter: 0,
                changes: 0,
                previous: 0,
            };

        default:
            return state;
    }
};

const CounterReducer = () => {
    const [{ counter }, dispatch] = useReducer(reducer, INITIAL_STATE);

    const handleClick = () => {
        dispatch({ type: 'reset' });
    };

    return (
        <>
            <h1>Counter Reducer: {counter}</h1>
            <button onClick={handleClick}>+1</button>
        </>
    );
};

export default CounterReducer;
