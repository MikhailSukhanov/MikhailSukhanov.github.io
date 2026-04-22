import styles from './contacts.module.scss';
import { mail } from '../../store/personalData.ts';
import { useAppDispatch, useAppSelector } from '../../store/store.ts';
import { toggleMailCopied } from '../../store/slices/contactsSlice.ts';

function Contacts() {
    const mailCopied: boolean = useAppSelector(state => state.contacts.mailCopied);
    const dispatch = useAppDispatch();

    const copyToClipboard = async (text: string): Promise<void> => {
        try {
            await navigator.clipboard.writeText(text);
            dispatch(toggleMailCopied());
        } catch (err) {
            console.error('Ошибка копирования: ', err);
        }
    }

    return <main className={styles.container}>
        <div>
            <img src="src/assets/envelope.svg" className={styles.envelope}/>
            <span>{mail}</span>
            {mailCopied ? 
                <img src="src/assets/check.svg" className={styles.clipboard}/> :
                <img src="src/assets/clipboard.svg" className={styles.clipboard} onClick={() => copyToClipboard(mail)}/>
            }
        </div>
    </main>;
}

export default Contacts;