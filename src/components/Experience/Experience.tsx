import styles from './experience.module.scss';

import type { IExperience } from "../../store/personalData.ts";

function Experience({period, organization, position, responsibilities}: IExperience) {
    return <div className={styles.container}>
        <p><span>Период работы:</span> {period}</p>
        <p><span>Организация:</span> {organization}</p>
        <p><span>Должность:</span> {position}</p>
        <p><span>Обязанности и достижения:</span> {responsibilities}</p>
    </div>
}

export default Experience;