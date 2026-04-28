import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import {
    themeAndLangReducer,
    contactsReducer,
    projectsReducer,
    calculatorReducer,
    notepadReducer
} from './slices';

const store = configureStore({
    reducer: {
        themeAndLang: themeAndLangReducer,
        contacts: contactsReducer,
        projects: projectsReducer,
        calculator: calculatorReducer,
        notepad: notepadReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;