import styles from './links.module.scss';
import { githubLink, kaggleLink, codepenLink } from '../../store/personalData.ts';
import { githubImg, codepenImg, kaggleImg } from '../../assets';

function Links() {
    return <main className={styles.container}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <img src={githubImg}/>
            <span>GitHub</span>
        </a>
        <a href={codepenLink} target="_blank" rel="noopener noreferrer">
            <img src={codepenImg} className={styles.icon}/>
            <span>CodePen</span>
        </a>
        <a href={kaggleLink} target="_blank" rel="noopener noreferrer">
            <img src={kaggleImg} className={styles.icon}/>
            <span>Kaggle</span>
        </a>
    </main>;
}

export default Links;