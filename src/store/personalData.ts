export interface IExperience {
    period: string,
    organization: string,
    position: string,
    responsibilities: string[]
};

export interface IEducation {
    degree: string,
    university: string,
    year: number,
    specialty: string
};

export const experience: IExperience[] = [
    {
        period: 'Декабрь 2023 - Июль 2025',
        organization: 'ООО "Ласмарт"',
        position: 'Разработчик программного обеспечения',
        responsibilities: [
            `Занимался полным циклом работы с данными: от проектирования архитектуры БД и реализации бизнес-логики на SQL до построения аналитической отчетности. Разрабатывал и оптимизировал хранимые процедуры, представления и процессы ETL для интеграции данных из систем заказчика. Настраивал многомерные OLAP-кубы.
Разрабатывал интерактивные дашборды и отчеты в SSRS, Power BI и Apache Superset (более 40). Сопровождал внедренные решения: анализировал обращения пользователей и оперативно дорабатывал функционал.`,
            'В рамках проекта SpacePlanner развивал функциональность БД и активно взаимодействовал с командой фронтенд-разработки для обеспечения корректной визуализации и передачи данных'
        ]
    }
];

export const education: IEducation[] = [
    {
        degree: 'Магистр',
        university: 'Санкт-Петербургский государственный университет',
        year: 2025,
        specialty: 'Системный анализ и управление'
    },
    {
        degree: 'Бакалавр',
        university: 'Санкт-Петербургский государственный морской технический университет',
        year: 2023,
        specialty: 'Управление в технических системах'
    }
];

export const githubLink: string = 'https://github.com/MikhailSukhanov';
export const codepenLink: string = 'https://codepen.io/MikhailS55';
export const kaggleLink: string = 'https://www.kaggle.com/mikhailsukhanov55/code';
export const mail: string = 'MikhailSukhanov55@yandex.ru';