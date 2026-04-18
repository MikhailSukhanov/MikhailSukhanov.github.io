import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    theme: 'dark' | 'light',
    language: 'ru' | 'en'
}

const initialState: InitialState = {
    theme: 'dark',
    language: 'ru'
};

const themeAndLangSlice = createSlice({
    name: 'themeAndLang',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === 'dark' ? 'light' : 'dark';
        },
        toggleLanguage(state) {
            state.language = state.language === 'ru' ? 'en' : 'ru';
        }
    }
});

export default themeAndLangSlice.reducer;
export const {toggleTheme, toggleLanguage} = themeAndLangSlice.actions;