import React, { Component } from 'react';

if (process.env.BROWSER) {
	require('./_About.scss');
}

class About extends Component {
	_onClickHandler() {
		console.log('about clicked');
	}
	render() {
		return (
			<div onClick={this._onClickHandler}>
			    About
			</div>
		);
	}
}

export default About;
