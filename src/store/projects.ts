import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from './store.ts';
import { setSelectedProjectId, toggleSelectedGroupId } from './slices';
import { type ILanguages } from './personalData.ts'; 

interface IProject {
    id: string,
    name: ILanguages,
    path: string
}

export interface IProjectsGroup {
    groupId: string,
    groupName: ILanguages,
    projects: IProject[]
}

const projects: IProjectsGroup[] = [
    {
        groupId: '1',
        groupName: {ru: 'Инструменты', en: 'Tools'},
        projects: [
            {id: '1.1', name: {ru: 'Калькулятор', en: 'Calculator'}, path: '/projects/calculator'},
            {id: '1.2', name: {ru: 'Блокнот', en: 'Notepad'}, path: '/projects/notepad'}
        ]
    },
    {
        groupId: '2',
        groupName: {ru: 'Игры', en: 'Games'},
        projects: [
            {id: '2.1', name: {ru: 'Игра 1', en: 'Game 1'}, path: '/projects/game1'},
            {id: '2.2', name: {ru: 'Игра 2', en: 'Game 2'}, path: '/projects/game2'}
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