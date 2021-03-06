import React from 'react';
import packageProps from '../../package.json';

export default class About extends React.Component {
	render() {
		return (
			<div className="container">
				<h2>WordFinder {packageProps.version}</h2>
				<p>Developed by Todd Dukart</p>
				<p><a href="https://github.com/tdukart/wordfinder">GitHub</a></p>
			</div>
		)
	}
}