import './_App.scss';
import React, { Component } from 'react';
import { Link } from 'react-router';

class App extends Component {
	render() {
		return (
			<div
			    className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--overlay-drawer-button">
				<div className="mdl-layout__drawer">
				    <span className="mdl-layout-title">Title</span>
				    <nav className="mdl-navigation">
				      <Link className="mdl-navigation__link" to="/profile">Profile</Link>
				      <Link className="mdl-navigation__link" to="/about">About</Link>
				    </nav>
				</div>
				<main className="mdl-layout__content">
				    <div className="page-content">
				        {this.props.children}
				    </div>
				</main>
			</div>
		);
	}
}

export default App;
