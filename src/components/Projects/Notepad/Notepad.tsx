import { useLocation } from 'react-router-dom';
import { useEffect, useRef, type ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/store.ts';
import { addNote, editNote, setSearchField } from '../../../store/slices';
import { useDirectProjectLink } from '../../../store/projects.ts';
import styles from './notepad.module.scss';
import Note from './Note/Note.tsx';

function Notepad() {
    function getSelectedText(noteId: string | null): string {
        const selectedNote = notepadState.notes.find(note => note.id === noteId);

        if (selectedNote) {
            return selectedNote.text;
        }
        return '';
    }
    
    function handleTextAreaChange(e: ChangeEvent<HTMLTextAreaElement>): void {
        const id = notepadState.selectedNoteId;

        if (id) {
            dispatch(editNote({id, text: e.target.value}))
        }
    }

    function handleAddClick(): void {
        dispatch(addNote());

        requestAnimationFrame(() => {
            if (notesListRef.current) {
                const element = notesListRef.current;
    
                element.scrollTo({
                    top: element.scrollHeight,
                    behavior: 'smooth'
                });
            }
        });
    }

    const location = useLocation();
    const dispatch = useAppDispatch();
    const setProjectIdsFromDirectLink = useDirectProjectLink();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const notesListRef = useRef<HTMLDivElement>(null);

    const notepadState = useAppSelector(state => state.notepad);
    const dispNotes = notepadState.notes
        .filter(note => note.text.toLowerCase().includes(notepadState.searchField.toLowerCase()) || notepadState.searchField === '')
        .map(note => {
            return <Note
                key={note.id}
                id={note.id}
                selectedNoteId={notepadState.selectedNoteId}
                text={note.text.length > 20 ? note.text.slice(0, 20) + '...' : note.text}
            />;
        });

    useEffect(() => {
        setProjectIdsFromDirectLink(location.pathname);
    }, []);

    useEffect(() => {
        textareaRef.current?.focus();
    }, [notepadState.selectedNoteId]);

    
    return <div className={styles.container}>
        <div className={styles.navigation}>
            <div className={styles['search-field']}>
                <input onChange={e => dispatch(setSearchField(e.target.value))} value={notepadState.searchField} placeholder="Поиск"/>
                <button onClick={() => dispatch(setSearchField(''))}>⨯</button>
            </div>
            <div ref={notesListRef} className={styles.notes}>{dispNotes}</div>
            <button onClick={handleAddClick} className={styles['add-btn']}>Добавить</button>
        </div>
        <textarea
            ref={textareaRef}
            value={getSelectedText(notepadState.selectedNoteId)}
            onChange={e => handleTextAreaChange(e)}
            disabled={!notepadState.selectedNoteId}
        />
    </div>;
}

export default Notepad;