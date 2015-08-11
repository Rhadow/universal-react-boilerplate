import React, { Component } from 'react';
import { Link } from 'react-router';

if (process.env.BROWSER) {
	require('../../../assets/styles/normalize.css');
	require('./_App.scss');
}

class App extends Component {
	render() {
		return (
			<div className="app-wrapper">
			    <nav className="app-navigation">
			        <Link className="nav-item" to="/">Todo List</Link>
			        <Link className="nav-item" to="/about">About Me</Link>
			    </nav>
				<main className="app-content">
				    {this.props.children}
				</main>
			</div>
		);
	}
}

export default App;
