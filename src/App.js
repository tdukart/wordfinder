import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import SearchForm from './components/SearchForm';

import wordSearch from './util/WordSearch';

import 'bootswatch/yeti/bootstrap.css';

class App extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			scramble: '',
			matches: [],
		};
	}

	componentWillUpdate( nextProps, nextState ) {
		if ( nextState.scramble !== this.state.scramble ) {
			this.doSearch( nextState.scramble )
		}
	}

	doSearch( scramble ) {
		let search = wordSearch( scramble );
		console.log( search );
		search.then( ( matches ) => {
			this.setState( {
				matches: matches,
			} );
		} );
	}

	render() {
		let matchListItems = this.state.matches.map( ( match ) => (
			<li key={match}>{match}</li>) );

		let handleSearch = ( scramble ) => {
			this.setState( { scramble } );
		};

		return (
			<div className="container home">
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							{/*<Link to="/">Word Finder</Link>*/}
							WordFinder
						</Navbar.Brand>
						<Navbar.Toggle/>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav>
							{/*<LinkContainer exact to="/">*/}
							{/*<NavItem eventKey={1}>*/}
							{/*Home*/}
							{/*</NavItem>*/}
							{/*</LinkContainer>*/}
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<SearchForm
					scramble={this.state.scramble}
					onSubmit={handleSearch}
				/>
				<div className="matches">
					<ul>
						{matchListItems}
					</ul>
				</div>
			</div>
		);
	}
}

export default App;
