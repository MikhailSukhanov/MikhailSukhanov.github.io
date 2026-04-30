import { createContext, useContext } from 'react';
import { type ILanguages } from '../personalData';

export const LanguageContext = createContext<keyof ILanguages>('ru');
export const useLanguage = () => useContext(LanguageContext);