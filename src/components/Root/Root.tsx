import { NavLink, Outlet } from "react-router-dom";
import ThemeAndLang from "../ThemeAndLang/ThemeAndLang";

function Root() {
    return <>
        <header>
            <h1>Имя Фамилия</h1>
            <nav>
                <ul>
                    <li><NavLink to="/projects">Проекты</NavLink></li>
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