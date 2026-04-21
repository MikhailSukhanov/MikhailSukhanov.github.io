import styles from './aboutMe.module.scss';
import Experience from '../Experience/Experience.tsx';
import Education from '../Education/Education.tsx';
import { experience, education } from '../../store/personalData.ts';

function AboutMe() {
    const dispExperience = experience.map(exp => (
        <Experience key={exp.period} period={exp.period} organization={exp.organization} position={exp.position} responsibilities={exp.responsibilities}/>
    ));
    const dispEducation = education.map(edu => (
        <Education key={edu.specialty + edu.year} degree={edu.degree} university={edu.university} year={edu.year} specialty={edu.specialty}/>
    ));

    return <main className={styles.container}>
        <h2 className={styles['info-header']}>Опыт работы</h2>
        <div className={styles['info-content']}>{dispExperience}</div>
        <h2 className={styles['info-header']}>Образование</h2>
        <div className={styles['info-content']}>{dispEducation}</div>
    </main>;
}

export default AboutMe;