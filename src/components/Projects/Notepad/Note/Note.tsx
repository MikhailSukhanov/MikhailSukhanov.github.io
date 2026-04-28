import { type MouseEvent } from 'react';
import styles from './note.module.scss';
import { delNote, setSelectedNoteId, type INote } from "../../../../store/slices";
import { useAppDispatch } from '../../../../store/store.ts';

interface NoteProps extends INote {
    selectedNoteId: string | null
}

function Note({id, selectedNoteId, text}: NoteProps) {
    const dispatch = useAppDispatch();

    function handleDel(event: MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();
        dispatch(delNote(id));
    }

    return <div className={styles.container} data-active={id === selectedNoteId} onClick={() => dispatch(setSelectedNoteId(id))}>
        <button onClick={e => handleDel(e)}>⨯</button>
        <p>{text}</p>
    </div>
}

export default Note;