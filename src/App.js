import React from 'react';

import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';

import Search from './views/Search';
import About from './views/About';
import AppNavbar from './components/AppNavbar';

import 'bootswatch/yeti/bootstrap.css';

class App extends React.Component {

	render() {
		return (
			<Router>
				<div>
					<AppNavbar/>
					<Route exact path="/" component={Search}/>
					<Route path="/about" component={About}/>
					<Route path="/search/:scramble" component={Search}/>
				</div>
			</Router>
		)
	}
}

export default App;
