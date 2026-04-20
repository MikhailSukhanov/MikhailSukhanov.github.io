import styles from './themeAndLang.module.scss';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import { toggleTheme, toggleLanguage } from '../../store/slices/themeAndLangSlice.ts';

function ThemeAndLang() {
    const theme = useAppSelector(state => state.themeAndLang.theme);
    const language = useAppSelector(state => state.themeAndLang.language);
    const dispatch = useAppDispatch();

    return <div className={styles.container}>
        <button onClick={() => dispatch(toggleTheme())}>
            <div className={theme === 'light' ? styles.active : ''}>☀</div>
            <div className={theme === 'dark' ? styles.active : ''}>☾</div>
        </button>
        <button onClick={() => dispatch(toggleLanguage())}>
            <div className={language === 'ru' ? styles.active : ''}>RU</div>
            <div className={language === 'en' ? styles.active : ''}>EN</div>
        </button>        
    </div>;
}

export default ThemeAndLang;