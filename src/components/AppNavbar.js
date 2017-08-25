import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class AppNavbar extends React.Component {
	render() {
		return (
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
		)

	}
}