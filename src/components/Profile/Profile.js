import React, { Component } from 'react';

if (process.env.BROWSER) {
	require('./_Profile.scss');
}

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
