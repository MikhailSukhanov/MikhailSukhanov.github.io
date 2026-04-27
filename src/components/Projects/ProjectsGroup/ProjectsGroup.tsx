import { NavLink } from 'react-router-dom';
import styles from './projectsGroup.module.scss';
import { useAppDispatch, useAppSelector } from '../../../store/store.ts';
import { setSelectedProjectId, toggleSelectedGroupId } from '../../../store/slices';
import { type IProjectsGroup } from '../../../store/projects.ts';
import { angleBracketImg } from '../../../assets';

function ProjectsGroup({groupId, groupName, projects}: IProjectsGroup) {
    const selectedProjectId: string | null = useAppSelector(state => state.projects.selectedProjectId);
    const selectedGroupIds: string[] = useAppSelector(state => state.projects.selectedGroupIds);
    const curGroupSelected: boolean = selectedGroupIds.includes(groupId);
    const dispatch = useAppDispatch();

    const dispProjects = projects.map(proj => (
        <li key={proj.id} data-active={proj.id === selectedProjectId} onClick={() => dispatch(setSelectedProjectId(proj.id))}>
            <NavLink to={proj.path}>{proj.name}</NavLink>
        </li>
    ));

    return <div className={styles.container} data-active={curGroupSelected}>
        <div className={styles['group-name']} data-active={curGroupSelected} onClick={() => dispatch(toggleSelectedGroupId(groupId))}>
            <img src={angleBracketImg}/>
            {groupName}
        </div>
        <div className={styles['projects-wrapper']}>
            <ul>{dispProjects}</ul>
        </div>
    </div>;
}

export default ProjectsGroup;