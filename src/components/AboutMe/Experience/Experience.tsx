import { Fragment } from 'react';
import { type IExperience } from '../../../store/personalData.ts';
import styles from './experience.module.scss';

function Experience({period, organization, position, responsibilities}: IExperience) {
    const dispResps = responsibilities.map((resp, ind) => <Fragment key={ind}>{resp}<br/></Fragment>);

    return <div className={styles.container}>
        <p><span>Период работы:</span> {period}</p>
        <p><span>Организация:</span> {organization}</p>
        <p><span>Должность:</span> {position}</p>
        <p><span>Обязанности и достижения:</span> {dispResps}</p>
    </div>
}

export default Experience;