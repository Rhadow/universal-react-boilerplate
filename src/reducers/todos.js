import { List } from 'immutable';
import {
	TODO_CREATE,
	TODO_DESTROY
} from '../constants/ActionTypes.js';

const defaultState = new List();

export default function(state = defaultState, action) {
    switch (action.type) {
        case TODO_CREATE:
            return state.concat(action.text);
        case TODO_DESTROY:
            return state.delete(action.id);
        default:
            return state;
    }
};
