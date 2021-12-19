import { TCounterAction } from '../actions';
import { ICounterState } from '../interfaces';

export const reducer = (
    state: ICounterState,
    action: TCounterAction
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
