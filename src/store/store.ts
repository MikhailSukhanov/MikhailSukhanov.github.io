import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import {
    themeAndLangReducer,
    contactsReducer,
    projectsReducer,
    calculatorReducer,
    notepadReducer
} from './slices';

export const rootReducer = combineReducers({
    themeAndLang: themeAndLangReducer,
    contacts: contactsReducer,
    projects: projectsReducer,
    calculator: calculatorReducer,
    notepad: notepadReducer
});

const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;