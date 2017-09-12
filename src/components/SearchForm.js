import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, Button, InputGroup, Glyphicon } from 'react-bootstrap';

export default class SearchForm extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			scramble: this.props.scramble,
		};
	}

	static get propTypes() {
		return {
			scramble: PropTypes.string.isRequired,
			onSubmit: PropTypes.func.isRequired,
		}
	}

	handleChange( event ) {
		this.setState( { scramble: event.target.value } );
	}

	handleSubmit( event ) {
		event.preventDefault();
		this.props.onSubmit( this.state.scramble );
	}

	clear() {
		this.setState( { scramble: '' } );
	}

	render() {
		let handleSubmit = this.handleSubmit.bind( this );
		let handleChange = this.handleChange.bind( this );

		return (
			<div className="container search-form">
				<Form onSubmit={handleSubmit}>
					<FormGroup>
						<ControlLabel>
							Scramble
						</ControlLabel>
						<InputGroup>
							<FormControl
								type="text"
								value={this.state.scramble}
								placeholder="Enter scramble"
								onChange={handleChange}
								autoComplete="off"
							/>
							<InputGroup.Button>
								<Button>
									<Glyphicon glyph="remove-circle" onClick={this.clear.bind( this )}/>
								</Button>
								<Button bsStyle="primary" type="submit">
									<Glyphicon glyph="search"/>
								</Button>
							</InputGroup.Button>
						</InputGroup>
					</FormGroup>
				</Form>
			</div>
		);
	}
}