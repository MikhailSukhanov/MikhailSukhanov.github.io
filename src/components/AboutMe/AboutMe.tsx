import styles from './aboutMe.module.scss';
import Experience from './Experience/Experience.tsx';
import Education from './Education/Education.tsx';
import { experience, education } from '../../store/personalData.ts';
import { useLanguage } from '../../store/context/LanguageContext.ts';

function AboutMe() {
    const lang = useLanguage();
    const dispExperience = experience.map(exp => <Experience key={exp.period.ru} lang={lang} {...exp}/>);
    const dispEducation = education.map(edu => <Education key={edu.specialty.ru + edu.year} lang={lang} {...edu}/>);

    return <main className={styles.container}>
        <h2 className={styles['info-header']}>{lang === 'ru' ? 'Опыт работы' : 'Work experience'}</h2>
        <div className={styles['info-content']}>{dispExperience}</div>
        <h2 className={styles['info-header']}>{lang === 'ru' ? 'Образование' : 'Education'}</h2>
        <div className={styles['info-content']}>{dispEducation}</div>
    </main>;
}

export default AboutMe;