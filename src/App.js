import React from 'react';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Main from './components/Main';
import About from './components/About';
import AppNavbar from './components/AppNavbar';

import 'bootswatch/yeti/bootstrap.css';

class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<AppNavbar/>
					<Route exact path="/" component={Main}/>
					<Route path="/about" component={About}/>
					<Route path="/search/:scramble" component={Main}/>
				</div>
			</Router>
		)
	}
}

export default App;
