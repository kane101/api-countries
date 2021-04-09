import { Route, Switch } from 'react-router-dom';
import { Routes } from 'Routes';
import { AppProvider } from 'Context';

function App() {
	const RoutesList = Routes.map(({ path, component }, key) => {
		return <Route exact path={path} component={component} key={key} />;
	});

	return (
		<AppProvider>
			<Switch>{RoutesList}</Switch>
		</AppProvider>
	);
}

export default App;
