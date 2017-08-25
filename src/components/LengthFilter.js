import React from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';

export default class LengthFilter extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			selectedLengths: []
		};
	}

	static get defaultProps() {
		return {
			minLength: 2,
			maxLength: 8,
		}
	}

	static get propTypes() {
		return {
			minLength: PropTypes.number,
			maxLength: PropTypes.number,
			onChange: PropTypes.func.isRequired,
		}
	}

	componentDidUpdate() {
		this.props.onChange( this.state.selectedLengths );
	}

	render() {
		const buttons = [];
		const handleButtonClick = ( length ) => {
			let newState = this.state.selectedLengths.slice( 0 );
			if ( newState.indexOf( length ) > -1 ) {
				newState = newState.filter( ( lengthUnderTest ) => (length !== lengthUnderTest) );
			} else {
				newState.push( length );
				newState.sort();
			}

			this.setState( { selectedLengths: newState } );
		};

		for ( let i = this.props.minLength; i <= this.props.maxLength; i++ ) {
			buttons.push(
				<Button
					key={`length-${i}`}
					active={this.state.selectedLengths.indexOf( i ) > -1}
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
				</ButtonGroup>
			</div>
		)
	}
}