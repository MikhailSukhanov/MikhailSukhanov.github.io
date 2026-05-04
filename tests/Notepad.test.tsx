import { screen } from '@testing-library/react';
import { renderWithProviders } from './setupTests.tsx';
import { Notepad } from '../src/components';

describe('Rendering', () => {
    it('Renders "Add" button (ru)', () => {
        renderWithProviders(<Notepad/>, {preloadedState: {themeAndLang: {
            language: 'ru',
            theme: 'dark'
        }}});
        const btn = screen.getByText('Добавить');
        expect(btn).toBeInTheDocument();
    });

    it('Renders "Add" button (en)', () => {
        renderWithProviders(<Notepad/>, {preloadedState: {themeAndLang: {
            language: 'en',
            theme: 'dark'
        }}});
        const btn = screen.getByText('Add');
        expect(btn).toBeInTheDocument();
    });

    it('Renders search field', () => {
        renderWithProviders(<Notepad/>);
        const input = screen.getByRole('textbox', {name: 'Notes searching'});
        expect(input).toBeInTheDocument();
    });

    it('Renders textarea', () => {
        renderWithProviders(<Notepad/>);
        const textarea = screen.getByRole('textbox', {name: 'Note editing'});
        expect(textarea).toBeInTheDocument();
    })
});