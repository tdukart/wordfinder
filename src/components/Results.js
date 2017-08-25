import React from 'react';
import PropTypes from 'prop-types';

import { Panel, Grid, Row, Col } from 'react-bootstrap';

export default class Results extends React.Component {
	static get propTypes() {
		return {
			matches: PropTypes.array.isRequired,
			lengths: PropTypes.array.isRequired,
		};
	}

	// componentWillReceiveProps( newProps ) {
	// 	if ( newProps.lengths !== this.props.lengths ) {
	// 		this.forceUpdate();
	// 	}
	// }

	render() {
		let matchesByLength = {};
		this.props.matches.forEach( ( match ) => {
			matchesByLength[ match.length ] = matchesByLength[ match.length ] || [];
			matchesByLength[ match.length ].push( match );
		} );

		let matchList = Object.keys( matchesByLength ).map( ( length ) => {
			if ( this.props.lengths.length !== 0 && this.props.lengths.indexOf( length ) === -1 ) {
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
			<Grid className="results">
				<Row>
					{matchList}
				</Row>
			</Grid>
		);
	}
}