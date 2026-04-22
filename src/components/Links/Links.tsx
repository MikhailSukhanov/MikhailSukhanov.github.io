import styles from './links.module.scss';
import { githubLink, kaggleLink } from '../../store/personalData.ts';

function Links() {
    return <main className={styles.container}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/github.svg"/>
            <span>GitHub</span>
        </a>
        <a href={kaggleLink} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/kaggle.svg" className={styles.icon}/>
            <span>Kaggle</span>
        </a>
    </main>;
}

export default Links;