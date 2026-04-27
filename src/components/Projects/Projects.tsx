import { Outlet } from 'react-router-dom';
import ProjectsGroup from './ProjectsGroup/ProjectsGroup.tsx';
import projects from '../../store/projects.ts';
import styles from './projects.module.scss';

function Projects() {
    const dispProjectsGroups = projects.map(proj => <ProjectsGroup key={proj.groupId} {...proj}/>);

    return <div className={styles.container}>
        <aside>{dispProjectsGroups}</aside>
        <main><Outlet/></main>
    </div>;
}

export default Projects;