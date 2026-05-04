import { type PropsWithChildren, type ReactElement } from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { rootReducer, useAppSelector, type RootState, type AppStore } from '../src/store/store.ts';
import { configureStore } from '@reduxjs/toolkit';
import { LanguageContext } from '../src/store/context/LanguageContext.ts';

interface IRenderOptions {
    preloadedState?: Partial<RootState>,
    store?: AppStore
}

function LangContextProviderHelper({children}: PropsWithChildren<{}>) {
    const lang = useAppSelector(state => state.themeAndLang.language);

    return <LanguageContext.Provider value={lang}>
        {children}
    </LanguageContext.Provider>;
}

export function renderWithProviders(
    ui: ReactElement,
    {
        preloadedState = {},
        store = configureStore({reducer: rootReducer, preloadedState}),
        ...renderOptions
    }: IRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>) {
        return (
            <Provider store={store}>
                <MemoryRouter>
                    <LangContextProviderHelper>
                        {children}
                    </LangContextProviderHelper>
                </MemoryRouter>
            </Provider>
        )
    }

    return {store, ...render(ui, { wrapper: Wrapper, ...renderOptions })};
}