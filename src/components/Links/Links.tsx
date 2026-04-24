import styles from './links.module.scss';
import { githubLink, kaggleLink, codepenLink } from '../../store/personalData.ts';

function Links() {
    return <main className={styles.container}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/github.svg"/>
            <span>GitHub</span>
        </a>
        <a href={codepenLink} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/codepen.svg" className={styles.icon}/>
            <span>CodePen</span>
        </a>
        <a href={kaggleLink} target="_blank" rel="noopener noreferrer">
            <img src="src/assets/kaggle.svg" className={styles.icon}/>
            <span>Kaggle</span>
        </a>
    </main>;
}

export default Links;