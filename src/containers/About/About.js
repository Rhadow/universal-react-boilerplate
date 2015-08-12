import React, { Component } from 'react';
import { connect } from 'react-redux';

import About from '../../components/About/About';

// function mapDispatchToProps(dispatch) {
//     return {
//         onIncrement: () => dispatch(increment())
//     };
// }

class AboutContainer extends Component {
	render() {
		return (
			<About />
		);
	}
}

export default connect()(AboutContainer);
