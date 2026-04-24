import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import themeAndLangReducer from './slices/themeAndLangSlice.ts';
import contactsReducer from './slices/contactsSlice.ts';
import projectsReducer from './slices/projectsSlice.ts';

const store = configureStore({
    reducer: {
        themeAndLang: themeAndLangReducer,
        contacts: contactsReducer,
        projects: projectsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;