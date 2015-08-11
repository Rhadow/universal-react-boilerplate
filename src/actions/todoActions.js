import {
	TODO_CREATE,
	TODO_DESTROY
} from '../constants/ActionTypes.js';

export function addTodo(text) {
	return {
		type: TODO_CREATE,
		text
	};
}

export function deleteTodo(id) {
	return {
		type: TODO_DESTROY,
		id
	};
}
