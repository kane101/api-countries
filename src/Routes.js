import Home from 'pages/Home';
import Country from 'pages/Country';
import Error from 'pages/Error';

export const Routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/country/:country',
		component: Country,
	},
	{
		path: '*',
		component: Error,
	},
];
