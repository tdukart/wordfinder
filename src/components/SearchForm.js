import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, ControlLabel, FormControl, Button, InputGroup } from 'react-bootstrap';


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

	render() {
		return (
			<Form onSubmit={this.handleSubmit.bind( this )}>
				<FormGroup>
					<ControlLabel>
						Scramble
					</ControlLabel>
					<InputGroup>
						<FormControl
							type="text"
							value={this.state.scramble}
							placeholder="Enter scramble"
							onChange={this.handleChange.bind( this )}
							autoComplete="off"
						/>
						<InputGroup.Button>
							<Button type="submit">
								Search
							</Button>
						</InputGroup.Button>
					</InputGroup>
				</FormGroup>
			</Form>
		);
	}
}