import { createSlice, nanoid, type PayloadAction } from '@reduxjs/toolkit';

export interface INote {
    id: string,
    text: string
}

interface InitialState {
    selectedNoteId: string | null,
    searchField: string,
    notes: INote[]
}

const initialState: InitialState = {
    selectedNoteId: null,
    searchField: '',
    notes: []
};

const notepadSlice = createSlice({
    name: 'notepad',
    initialState,
    reducers: {
        addNote: {
            reducer(state, action: PayloadAction<INote>) {
                state.notes.push(action.payload)
                state.selectedNoteId = action.payload.id;
            },
            prepare() {
                return {
                    payload: {
                        id: nanoid(),
                        text: ''
                    }
                }
            }
        },
        delNote(state, action: PayloadAction<string>) {
            state.notes = state.notes.filter(note => note.id !== action.payload);

            if (state.selectedNoteId === action.payload) {
                state.selectedNoteId = null;
            }
        },
        editNote(state, action: PayloadAction<INote>) {
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return {id: note.id, text: action.payload.text};
                }
                return note;
            });
        },
        setSelectedNoteId(state, action: PayloadAction<string | null>) {
            state.selectedNoteId = action.payload;
        },
        setSearchField(state, action: PayloadAction<string>) {
            state.searchField = action.payload;
        }
    }
});

export default notepadSlice.reducer;
export const {addNote, delNote, editNote, setSelectedNoteId, setSearchField} = notepadSlice.actions;