import './_App.scss';
import React, { Component } from 'react';

class App extends Component {
	render() {
		return (
			<div
			    className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--overlay-drawer-button">
				<div className="mdl-layout__drawer">
				    <span className="mdl-layout-title">Title</span>
				    <nav className="mdl-navigation">
				      <a className="mdl-navigation__link" href="/profile">Profile</a>
				      <a className="mdl-navigation__link" href="/about">About</a>
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
