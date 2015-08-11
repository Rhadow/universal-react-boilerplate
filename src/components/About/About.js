import './_About.scss';
import React, { Component } from 'react';

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
