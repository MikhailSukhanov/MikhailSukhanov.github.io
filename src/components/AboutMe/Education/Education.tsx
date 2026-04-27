import type { IEducation } from '../../../store/personalData.ts';
import styles from './education.module.scss';

function Education({degree, university, year, specialty}: IEducation) {
    return <div className={styles.container}>
        <p><span>Квалификация:</span> {degree}</p>
        <p><span>Учебное заведение:</span> {university}</p>
        <p><span>Год окончания:</span> {year}</p>
        <p><span>Специальность:</span> {specialty}</p>
    </div>
}

export default Education;