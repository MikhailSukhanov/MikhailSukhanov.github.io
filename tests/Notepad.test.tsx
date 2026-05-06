import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeAll, vi} from 'vitest';
import { renderWithProviders } from './setupTests.tsx';
import { Notepad } from '../src/components';

beforeAll(() => {
    window.HTMLElement.prototype.scrollTo = vi.fn();
});

describe('Rendering', () => {
    it('Renders the "Add" button (ru)', () => {
        renderWithProviders(<Notepad/>, {preloadedState: {themeAndLang: {
            language: 'ru',
            theme: 'dark'
        }}});
        const addBtn = screen.getByRole('button', {name: 'Добавить'});
        expect(addBtn).toBeInTheDocument();
    });

    it('Renders the "Add" button (en)', () => {
        renderWithProviders(<Notepad/>, {preloadedState: {themeAndLang: {
            language: 'en',
            theme: 'dark'
        }}});
        const addBtn = screen.getByRole('button', {name: 'Add'});
        expect(addBtn).toBeInTheDocument();
    });

    it('Renders the search field', () => {
        renderWithProviders(<Notepad/>);
        const input = screen.getByRole('textbox', {name: 'Notes searching'});
        expect(input).toBeInTheDocument();
    });

    it('Renders the textarea', () => {
        renderWithProviders(<Notepad/>);
        const textarea = screen.getByRole('textbox', {name: 'Note editing'});
        expect(textarea).toBeInTheDocument();
    });
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

    it('Selects a note', async () => {
        const {store} = renderWithProviders(<Notepad/>, {preloadedState: {notepad: {
            selectedNoteId: null,
            searchField: '',
            notes: [{id: '1', text: ''}]
        }}});

        const note = screen.getByTestId('note-item');
        await user.click(note);
        const selectedNoteId = store.getState().notepad.selectedNoteId;
        expect(selectedNoteId).toBe('1');
    });

    it('Edits a note', async () => {
        const initialText: string = 'Cool';
        const newText: string = 'Tests';

        renderWithProviders(<Notepad/>, {preloadedState: {notepad: {
            selectedNoteId: '1',
            searchField: '',
            notes: [{id: '1', text: initialText}]
        }}});

        const note = screen.getByTestId('note-item');
        const textarea = screen.getByRole('textbox', {name: 'Note editing'});
        await user.type(textarea, newText);

        expect(note).toHaveTextContent(initialText + newText);
    });

    it('Filters notes', async () => {
        renderWithProviders(<Notepad/>, {preloadedState: {notepad: {
            selectedNoteId: null,
            searchField: '',
            notes: [{id: '1', text: 'Cool'}, {id: '2', text: 'Tests'}]
        }}});
        
        const input = screen.getByRole('textbox', {name: 'Notes searching'});
        const initialNotes = screen.getAllByTestId('note-item');
        expect(initialNotes.length).toBe(2);

        await user.type(input, 'tests');
        const filteredNotes = screen.queryAllByTestId('note-item');
        expect(filteredNotes.length).toBe(1);
    });
});