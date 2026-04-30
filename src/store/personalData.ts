export interface ILanguages {
    ru: string,
    en: string
}

export interface IExperience {
    period: ILanguages,
    organization: ILanguages,
    position: ILanguages,
    responsibilities: ILanguages[]
};

export interface IEducation {
    degree: ILanguages,
    university: ILanguages,
    year: number,
    specialty: ILanguages
};

export const experience: IExperience[] = [
    {
        period: {ru: 'Декабрь 2023 - Июль 2025', en: 'December 2023 - July 2025'},
        organization: {ru: 'ООО "Ласмарт"', en: 'Lasmart LLC'},
        position: {ru: 'Разработчик программного обеспечения', en: 'Software developer'},
        responsibilities: [
            {
                ru: `Занимался полным циклом работы с данными: от проектирования архитектуры БД и реализации бизнес-логики на SQL до построения аналитической отчетности. Разрабатывал и оптимизировал хранимые процедуры, представления и процессы ETL для интеграции данных из систем заказчика. Настраивал многомерные OLAP-кубы.
Разрабатывал интерактивные дашборды и отчеты в SSRS, Power BI и Apache Superset (более 40). Сопровождал внедренные решения: анализировал обращения пользователей и оперативно дорабатывал функционал.`,
                en: `I handled the full data cycle: from database architecture design and SQL business logic implementation to analytical reporting. I developed and optimized stored procedures, views, and ETL processes for integrating data from the client's systems. I configured multidimensional OLAP cubes.
I developed interactive dashboards and reports in SSRS, Power BI, and Apache Superset (more than 40). I supported the implemented solutions: I analyzed user requests and quickly improved functionality.`
            },
            {
                ru: 'В рамках проекта SpacePlanner развивал функциональность БД и активно взаимодействовал с командой фронтенд-разработки для обеспечения корректной визуализации и передачи данных',
                en: 'As part of the SpacePlanner project, I developed the database functionality and actively interacted with the front-end development team to ensure correct visualization and data transfer'
            }
        ]
    }
];

export const education: IEducation[] = [
    {
        degree: {ru: 'Магистр', en: 'Master'},
        university: {ru: 'Санкт-Петербургский государственный университет', en: 'Saint Petersburg State University'},
        year: 2025,
        specialty: {ru: 'Системный анализ и управление', en: 'System Analysis and Control'}
    },
    {
        degree: {ru: 'Бакалавр', en: 'Bachelor'},
        university: {ru: 'Санкт-Петербургский государственный морской технический университет', en: 'Saint Petersburg State Marine Technical University'},
        year: 2023,
        specialty: {ru: 'Управление в технических системах', en: 'Control in Technical Systems'}
    }
];

export const githubLink: string = 'https://github.com/MikhailSukhanov';
export const codepenLink: string = 'https://codepen.io/MikhailS55';
export const kaggleLink: string = 'https://www.kaggle.com/mikhailsukhanov55/code';
export const mail: string = 'MikhailSukhanov55@yandex.ru';
export const name: ILanguages = {ru: 'Михаил Суханов', en: 'Mikhail Sukhanov'};