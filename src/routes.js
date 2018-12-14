import React from 'react';
import { Router, Redirect, IndexRoute, Route } from 'react-router';

import App from './App';
import BlogHome from './BlogHome';
import BlogPost from './BlogPost';

const Routes = (props) => (
	<Router {...props}>
		<Route path='/' component={App}>
			<IndexRoute component={BlogHome} />
			<Route path='/p/:page' component={BlogHome} />
			<Route path='/post/evan-meeks-my-portfolio' component={BlogHome} />
			<Route path='/post/:slug' component={BlogPost} />
		</Route>
	</Router>
);

export default Routes;
