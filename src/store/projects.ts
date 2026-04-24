interface IProject {
    id: string,
    name: string,
    path: string
}

export interface IProjectsGroup {
    groupId: string,
    groupName: string,
    projects: IProject[]
}

const projects: IProjectsGroup[] = [
    {
        groupId: '1',
        groupName: 'Инструменты',
        projects: [
            {id: '1.1', name: 'Инструмент 1', path: '/projects/tool1'},
            {id: '1.2', name: 'Инструмент 2', path: '/projects/tool2'}
        ]
    },
    {
        groupId: '2',
        groupName: 'Игры',
        projects: [
            {id: '2.1', name: 'Игра 1', path: '/projects/game1'},
            {id: '2.2', name: 'Игра 2', path: '/projects/game2'}
        ]
    }
];

export default projects;