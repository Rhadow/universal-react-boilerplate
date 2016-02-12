import React, { Component } from 'react';
import { render } from 'react-dom';

class TestComponent extends Component {
	render() {
		return (
			<div>Test</div>
		);
	}
}

render(<TestComponent />, document.getElementById('root'));