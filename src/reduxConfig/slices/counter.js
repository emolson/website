import { createSlice } from 'redux-starter-kit'

const counterSlice = createSlice({
    slice: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1
    }
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;