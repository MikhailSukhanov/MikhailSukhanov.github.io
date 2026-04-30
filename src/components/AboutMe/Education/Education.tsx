import { type IEducation, type ILanguages } from '../../../store/personalData.ts';
import styles from './education.module.scss';

interface IEducationProps extends IEducation {
    lang: keyof ILanguages
}

function Education({degree, university, year, specialty, lang}: IEducationProps) {
    return <div className={styles.container}>
        <p><span>{lang === 'ru' ? 'Квалификация:' : 'Degree:'}</span> {degree[lang]}</p>
        <p><span>{lang === 'ru' ? 'Учебное заведение:' : 'University:'}</span> {university[lang]}</p>
        <p><span>{lang === 'ru' ? 'Год окончания:' : 'Year of Graduation:'}</span> {year}</p>
        <p><span>{lang === 'ru' ? 'Специальность:' : 'Specialization:'}</span> {specialty[lang]}</p>
    </div>
}

export default Education;