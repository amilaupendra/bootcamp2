import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeCsup from './components/HomeCsup';
import NavCsup from './components/NavCsup';
import NewBlogCsup from './components/NewBlogCsup';
import BlogCsup from './components/BlogCsup';
import AboutCsup from './components/AboutCsup';
import RegCsup from './components/RegCsup';

function App() {
	return (
		<Router>
			<NavCsup />
			<Switch>

				<Route path="/create">
					<NewBlogCsup />
				</Route>

				<Route path="/posts/:id">
					<BlogCsup />
				</Route>

				<Route path="/about">
					<AboutCsup />
				</Route>

				<Route path="/reg">
					<RegCsup />
				</Route>

				<Route  path="/">
					<HomeCsup />
				</Route>

			</Switch>
		</Router>
	);
}

export default App;
