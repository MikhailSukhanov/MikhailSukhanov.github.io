import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, vi} from 'vitest';
import { renderWithProviders } from './setupTests.tsx';
import { Notepad } from '../src/components';

beforeAll(() => {
    window.HTMLElement.prototype.scrollTo = vi.fn();
});

describe('Rendering', () => {
    it('Renders "Add" button (ru)', () => {
        renderWithProviders(<Notepad/>, {preloadedState: {themeAndLang: {
            language: 'ru',
            theme: 'dark'
        }}});
        const addBtn = screen.getByRole('button', {name: 'Добавить'});
        expect(addBtn).toBeInTheDocument();
    });

    it('Renders "Add" button (en)', () => {
        renderWithProviders(<Notepad/>, {preloadedState: {themeAndLang: {
            language: 'en',
            theme: 'dark'
        }}});
        const addBtn = screen.getByRole('button', {name: 'Add'});
        expect(addBtn).toBeInTheDocument();
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

describe('Functionality', () => {
    const user = userEvent.setup();

    it('Adds a note', async () => {
        renderWithProviders(<Notepad/>);

        const initialNotes = screen.queryAllByTestId('note-item');
        expect(initialNotes.length).toBe(0);

        const addBtn = screen.getByRole('button', {name: /(Добавить|Add)/});
        await user.click(addBtn);
        
        const updatedNotes = screen.getAllByTestId('note-item');
        expect(updatedNotes.length).toBe(1);
    });

    it('Edits a note', async () => {
        renderWithProviders(<Notepad/>);
        const newText: string = 'First note!';

        const addBtn = screen.getByRole('button', {name: /(Добавить|Add)/});
        await user.click(addBtn);

        const textarea = screen.getByRole('textbox', {name: 'Note editing'});
        await user.type(textarea, newText);

        const newNote = screen.getByTestId('note-item');
        expect(newNote).toHaveTextContent(newText);
    });
});