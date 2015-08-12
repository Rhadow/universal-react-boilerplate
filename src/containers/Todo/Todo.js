import { connect } from 'react-redux';

import Todo from '../../components/Todo/Todo';

// Actions
import {
	addTodo,
	deleteTodo
} from '../../actions/todoActions';

function mapStateToProps(state) {
    return {
    	listData: state.todos.toArray()
    };
}

function mapDispatchToProps(dispatch) {
    return {
        onAddHandler: (text) => dispatch(addTodo(text)),
        onDeleteHandler: (id) => dispatch(deleteTodo(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
