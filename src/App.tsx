import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.scss';
import { useAppSelector } from './store/store.ts';
import { LanguageContext } from './store/context/LanguageContext.ts';
import {
	Root,
	AboutMe,
	Contacts,
	Links,
	Projects,
	Calculator,
	Notepad
} from './components';

const router = createBrowserRouter([{
	path: '/', element: <Root/>,
	children: [
		{
			path: '/projects', element: <Projects/>,
			children: [
				{path: '/projects/calculator', element: <Calculator/>},
				{path: '/projects/notepad', element: <Notepad/>}
			]
		},
		{path: '/about', element: <AboutMe/>},
		{path: '/links', element: <Links/>},
		{path: '/contacts', element: <Contacts/>}
	]
}]);

function App() {
	const lang = useAppSelector(state => state.themeAndLang.language);

	return <LanguageContext.Provider value={lang}>
		<RouterProvider router={router}/>
	</LanguageContext.Provider>;
}

export default App;