import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.scss';
import Root from './components/Root/Root.tsx';
import AboutMe from './components/AboutMe/AboutMe.tsx';
import Contacts from './components/Contacts/Contacts.tsx';
import Links from './components/Links/Links.tsx';
import Projects from './components/Projects/Projects.tsx';

const router = createBrowserRouter([{
	path: '/', element: <Root/>,
	children: [
		{
			path: '/projects', element: <Projects/>,
			children: []
		},
		{path: '/about', element: <AboutMe/>},
		{path: '/links', element: <Links/>},
		{path: '/contacts', element: <Contacts/>}
	]
}]);

function App() {
	return <RouterProvider router={router}/>;
}

export default App;