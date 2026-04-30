import { Fragment } from 'react';
import { type IExperience, type ILanguages } from '../../../store/personalData.ts';
import styles from './experience.module.scss';

interface IExperienceProps extends IExperience {
    lang: keyof ILanguages
}

function Experience({period, organization, position, responsibilities, lang}: IExperienceProps) {
    const dispResps = responsibilities.map((resp, ind) => <Fragment key={ind}>{resp[lang]}<br/></Fragment>);

    return <div className={styles.container}>
        <p><span>{lang === 'ru' ? 'Период работы:' : 'Working period:'}</span> {period[lang]}</p>
        <p><span>{lang === 'ru' ? 'Организация:' : 'Organization:'}</span> {organization[lang]}</p>
        <p><span>{lang === 'ru' ? 'Должность:' : 'Position:'}</span> {position[lang]}</p>
        <p><span>{lang === 'ru' ? 'Обязанности и достижения:' : 'Responsibilities and achievements:'}</span> {dispResps}</p>
    </div>
}

export default Experience;