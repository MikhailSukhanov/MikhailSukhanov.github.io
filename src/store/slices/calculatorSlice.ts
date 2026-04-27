import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
    mathExpression: string
}

const initialState: InitialState = {
    mathExpression: ''
};

const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        setMathExp(state, action) {
            state.mathExpression = action.payload;
        },
        addCharToMathExp(state, action) {
            state.mathExpression += action.payload;
        }
    }
});

export default calculatorSlice.reducer;
export const {setMathExp, addCharToMathExp} = calculatorSlice.actions;