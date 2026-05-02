import { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../../store/store.ts';
import { getProjectPathFromId } from '../../store/projects.ts';
import ThemeAndLang from '../ThemeAndLang/ThemeAndLang.tsx';
import { useLanguage } from '../../store/context/LanguageContext.ts';
import { name } from '../../store/personalData.ts';

function Root() {
    const location = useLocation();
    const isHomePage: boolean = location.pathname === '/';
    const selectedProjectId: string | null = useAppSelector(state => state.projects.selectedProjectId);
    const theme: string = useAppSelector(state => state.themeAndLang.theme);
    const projectsPath: string = selectedProjectId ? getProjectPathFromId(selectedProjectId) : '/projects';
    const lang = useLanguage();
    
    useEffect(() => {
        document.body.dataset.theme = theme;
    }, [theme]);

    return <>
        <header>
            <div className="title" data-home={isHomePage}>
                <h1>
                    {isHomePage ? name[lang] : <NavLink to="/">{name[lang]}</NavLink>}
                </h1>
                <p>{`Frontend ${lang === 'ru' ? 'разработчик' : 'developer'} | React • TypeScript • Redux • Node.js`}</p>
            </div>
            <nav data-home={isHomePage}>
                <ul>
                    <li><NavLink to={projectsPath}>{lang === 'ru' ? 'Проекты' : 'Projects'}</NavLink></li>
                    <li><NavLink to="/about">{lang === 'ru' ? 'Обо мне' : 'About me'}</NavLink></li>
                    <li><NavLink to="/links">{lang === 'ru' ? 'Ссылки' : 'Links'}</NavLink></li>
                    <li><NavLink to="/contacts">{lang === 'ru' ? 'Контакты' : 'Contacts'}</NavLink></li>
                </ul>
            </nav>
            <ThemeAndLang/>
        </header>
        <Outlet/>
    </>;
}

export default Root;