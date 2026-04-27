import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../store/store.ts";
import { getProjectPathFromId } from "../../store/projects.ts";
import ThemeAndLang from '../ThemeAndLang/ThemeAndLang.tsx';

function Root() {
    const location = useLocation();
    const isHomePage: boolean = location.pathname === '/';
    const selectedProjectId: string | null = useAppSelector(state => state.projects.selectedProjectId);
    const projectsPath: string = selectedProjectId ? getProjectPathFromId(selectedProjectId) : '/projects';

    return <>
        <header>
            <h1 data-home={isHomePage}>
                {isHomePage ? 'Имя Фамилия' : <NavLink to="/">Имя Фамилия</NavLink>}
            </h1>
            <p data-home={isHomePage}>Frontend Developer | React • TypeScript • Redux • Node.js</p>
            <nav data-home={isHomePage}>
                <ul>
                    <li><NavLink to={projectsPath}>Проекты</NavLink></li>
                    <li><NavLink to="/about">Обо мне</NavLink></li>
                    <li><NavLink to="/links">Ссылки</NavLink></li>
                    <li><NavLink to="/contacts">Контакты</NavLink></li>
                </ul>
            </nav>
            <ThemeAndLang/>
        </header>
        <Outlet/>
    </>;
}

export default Root;