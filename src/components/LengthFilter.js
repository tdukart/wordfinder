import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup, Glyphicon } from 'react-bootstrap';

export default class LengthFilter extends React.Component {
	static get defaultProps() {
		return {
			minLength: 2,
			maxLength: 8,
			selectedLengths: []
		}
	}

	static get propTypes() {
		return {
			minLength: PropTypes.number,
			maxLength: PropTypes.number,
			selectedLengths: PropTypes.array,
			onChange: PropTypes.func.isRequired,
		}
	}

	render() {
		const buttons = [];
		const handleButtonClick = ( length ) => {
			let newState = this.props.selectedLengths.slice( 0 );
			if ( newState.indexOf( length ) > -1 ) {
				newState = newState.filter( ( lengthUnderTest ) => (length !== lengthUnderTest) );
			} else {
				newState.push( length );
				newState.sort();
			}

			this.props.onChange( newState );
		};

		const clearFilter = () => {
			this.props.onChange( [] );
		};

		for ( let i = this.props.minLength; i <= this.props.maxLength; i++ ) {
			buttons.push(
				<Button
					key={`length-${i}`}
					active={this.props.selectedLengths.indexOf( i ) > -1}
					onClick={handleButtonClick.bind( this, i )}
				>
					{i}
				</Button>
			);
		}

		return (
			<div className="container length-filter">
				<ButtonGroup>
					{buttons}
					<Button onClick={clearFilter}>
						<Glyphicon glyph="remove"/>
					</Button>
				</ButtonGroup>
			</div>
		)
	}
}