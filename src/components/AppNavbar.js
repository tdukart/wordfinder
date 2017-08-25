import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

export default class AppNavbar extends React.Component {
	render() {
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Word Finder</Link>
						{/*WordFinder*/}
					</Navbar.Brand>
					<Navbar.Toggle/>
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer exact to="/">
							<NavItem eventKey={1}>
								Home
							</NavItem>
						</LinkContainer>
						<LinkContainer to="/search">
							<NavItem eventKey={3}>
								Search
							</NavItem>
						</LinkContainer>
						<LinkContainer exact to="/about">
							<NavItem eventKey={2}>
								About
							</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)

	}
}