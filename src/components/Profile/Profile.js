import './_Profile.scss';
import React, { Component } from 'react';

class Profile extends Component {
	_onClickHandler() {
		console.log('profile clicked');
	}
	render() {
		return (
			<div onClick={this._onClickHandler}>
			    Profile
			</div>
		);
	}
}

export default Profile;
