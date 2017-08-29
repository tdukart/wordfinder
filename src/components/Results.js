import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Col } from 'react-bootstrap';

export default class Results extends React.Component {
	static get propTypes() {
		return {
			matches: PropTypes.array.isRequired,
			selectedLengths: PropTypes.array.isRequired,
			searching: PropTypes.bool.isRequired,
		};
	}

	// componentWillReceiveProps( newProps ) {
	// 	if ( newProps.lengths !== this.props.lengths ) {
	// 		this.forceUpdate();
	// 	}
	// }

	render() {
		if ( this.props.searching ) {
			return (
				<div>
					Searching...
				</div>
			);
		}
		
		let matchesByLength = {};
		this.props.matches.forEach( ( match ) => {
			matchesByLength[ match.length ] = matchesByLength[ match.length ] || [];
			matchesByLength[ match.length ].push( match );
		} );

		let matchList = Object.keys( matchesByLength ).map( ( length ) => {
			if ( this.props.selectedLengths.length !== 0 && this.props.selectedLengths.indexOf( Number.parseInt( length, 10 ) ) === -1 ) {
				return null;
			}

			const theseMatches = matchesByLength[ length ];
			theseMatches.sort();

			const matchListItems = theseMatches.map( ( match ) => ( <li key={match}>{match}</li>) );

			const lettersPlural = (length > 1) ? 'letters' : 'letter';
			const title = (<h2>{length} {lettersPlural}</h2>);

			return (
				<Col lg={4} md={6} sm={12} key={`matches-${length}`}>
					<Panel header={title}>
						<ul>
							{matchListItems}
						</ul>
					</Panel>
				</Col>
			)
		} );


		return (
			<div className="results">
				{matchList}
			</div>
		);
	}
}