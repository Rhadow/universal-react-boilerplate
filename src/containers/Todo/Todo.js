import React, { Component } from 'react';
import { connect } from 'react-redux';

import Todo from '../../components/Todo/Todo';

function mapDispatchToProps(dispatch) {
    return {
        onIncrement: () => dispatch(increment())
    };
}

class TodoContainer extends Component {
	render() {
		return (
			<Todo />
		);
	}
}

export default connect(mapDispatchToProps)(TodoContainer);
