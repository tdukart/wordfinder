import React from 'react';

import SearchForm from './SearchForm';
import AppNavbar from './AppNavbar';
import Results from './Results';

import wordSearch from '../util/WordSearch';

export default class Main extends React.Component {
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
		let handleSearch = ( scramble ) => {
			this.setState( { scramble } );
		};

		return (
			<div className="container home">
				<AppNavbar/>
				<SearchForm
					scramble={this.state.scramble}
					onSubmit={handleSearch}
				/>
				<Results
					matches={this.state.matches}
				/>
			</div>
		);
	}
}