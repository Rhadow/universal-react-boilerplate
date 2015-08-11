import './_App.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
	render() {
		return (
			<div className="app-wrapper">
			    <nav className="app-navigation">
			        <Link to="/profile">Profile</Link>
			        <Link to="/about">About</Link>
			    </nav>
				<main className="app-content">
				    {this.props.children}
				</main>
			</div>
		);
	}
}

export default App;
