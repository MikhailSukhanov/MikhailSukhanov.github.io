import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    mailCopied: boolean
}

const initialState: InitialState = {
    mailCopied: false
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        toggleMailCopied(state) {
            state.mailCopied = !state.mailCopied;
        }
    }
});

export default contactsSlice.reducer;
export const { toggleMailCopied } = contactsSlice.actions;