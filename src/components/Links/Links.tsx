import styles from './links.module.scss';

function Links() {
    const githubLink: string = 'https://github.com/MikhailSukhanov';
    const kaggleLink: string = 'https://www.kaggle.com/mikhailsukhanov55/code';

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