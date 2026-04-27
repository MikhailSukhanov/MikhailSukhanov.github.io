import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/App.scss';
import { Root, AboutMe, Contacts, Links, Projects, Calculator } from './components';

const router = createBrowserRouter([{
	path: '/', element: <Root/>,
	children: [
		{
			path: '/projects', element: <Projects/>,
			children: [
				{path: '/projects/calculator', element: <Calculator/>}
			]
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