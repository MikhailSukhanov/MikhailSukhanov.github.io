import styles from './links.module.scss';

function Links() {
    const githubLink = 'https://github.com/MikhailSukhanov';
    const kaggleLink = 'https://www.kaggle.com/mikhailsukhanov55/code';

    return <main className={`${styles.container} fade-in`}>
        <div className={styles.link}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <img src="src/assets/github.svg" className={styles.icon}/>
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div className={styles.link}>
            <a href={kaggleLink} target="_blank" rel="noopener noreferrer">
                <img src="src/assets/kaggle.svg" className={styles.icon}/>
            </a>
            <a href={kaggleLink} target="_blank" rel="noopener noreferrer">Kaggle</a>
        </div>
    </main>;
}

export default Links;