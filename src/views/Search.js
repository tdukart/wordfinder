import React from 'react';
import { Route } from 'react-router-dom';
import { Grid, Row } from 'react-bootstrap';

import SearchForm from '../components/SearchForm';
import Results from '../components/Results';
import LengthFilter from '../components/LengthFilter';

import wordSearch from '../util/WordSearch';

export default class Main extends React.Component {
	constructor( props ) {
		super( props );

		let initialScramble = '';

		// TODO: Is all this checking necessary?
		if ( this.props.match && this.props.match.params && this.props.match.params.scramble ) {
			initialScramble = this.props.match.params.scramble;
		}

		this.state = {
			scramble: initialScramble,
			matches: [],
			selectedLengths: [],
			searching: false,
		};

		if ( initialScramble ) {
			this.doSearch( initialScramble );
		}
	}

	componentWillReceiveProps( nextProps ) {
		if ( nextProps.match.params.scramble !== this.state.scramble ) {
			this.setState( {
				searching: true,
				scramble: nextProps.match.params.scramble
			} );
		}
	}

	componentWillUpdate( nextProps, nextState ) {
		if ( nextState.scramble !== this.state.scramble ) {
			this.doSearch( nextState.scramble );
		}
	}

	doSearch( scramble ) {
		let search = wordSearch( scramble );
		search.then( ( matches ) => {
			this.setState( {
				searching: false,
				matches
			} );
		} );
	}

	render() {
		const searchForm = (
			<Route render={( { history } ) => {
				const handleSearch = ( scramble ) => {
					history.push( `/search/${scramble}` );
				};

				return (
					<SearchForm
						scramble={this.state.scramble}
						onSubmit={handleSearch}
					/>
				)
			}}/>
		);

		const handleLengthFilter = ( selectedLengths ) => {
			this.setState( { selectedLengths } );
		};

		return (
			<Grid className="search-screen">
				<Row>
					{searchForm}
				</Row>
				<Row>
					<LengthFilter
						maxLength={this.state.scramble.length || 8}
						onChange={handleLengthFilter}
						{...this.state}
					/>
				</Row>
				<Row>
					<Results
						{...this.state}
					/>
				</Row>
			</Grid>
		);
	}
}