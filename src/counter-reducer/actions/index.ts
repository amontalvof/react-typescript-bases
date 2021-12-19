export type TCounterAction =
    | { type: 'increaseBy'; payload: { value: number } }
    | { type: 'reset' };

export const doReset = (): TCounterAction => ({
    type: 'reset',
});

export const doIncreaseBy = (value: number): TCounterAction => ({
    type: 'increaseBy',
    payload: { value },
});
