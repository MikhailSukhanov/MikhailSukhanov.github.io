import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store.ts';
import { setSelectedProjectId, toggleSelectedGroupId } from './slices';

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
            {id: '1.1', name: 'Калькулятор', path: '/projects/calculator'},
            {id: '1.2', name: 'Блокнот', path: '/projects/notepad'}
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

export function getProjectPathFromId(id: string): string {
    for (let projGroup of projects) {
        for (let proj of projGroup.projects) {
            if (proj.id === id) {
                return proj.path;
            }
        }
    }
    return '/';
}

export const useDirectProjectLink = () => {
    const storedProjectId: string | null = useAppSelector(state => state.projects.selectedProjectId);
    const dispatch = useAppDispatch();
    const isProcessing = useRef(false);

    return function setProjectIdsFromDirectLink(path: string): void {
        if (storedProjectId || isProcessing.current) return;

        for (let projGroup of projects) {
            const projectData: IProject | undefined = projGroup.projects.find(proj => proj.path === path);
    
            if (projectData) {
                isProcessing.current = true;
                dispatch(setSelectedProjectId(projectData.id));
                dispatch(toggleSelectedGroupId(projGroup.groupId));
                return;
            }
        }
    }
}