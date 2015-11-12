'use strict';

import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes';

const history = createBrowserHistory();

/*
 If you recall, we created a history object via createBrowserHistory inside main.js and passed it as a prop to the <Router>. That's why this prop is available in the App.js component.
 */
ReactDOM.render(<Router history={history}>{routes}</Router>, document.getElementById('app'));
