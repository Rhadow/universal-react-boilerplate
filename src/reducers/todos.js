import { List } from 'immutable';
import {
	TODO_CREATE,
	TODO_DESTROY
} from '../constants/ActionTypes.js';

const defauleState = new List();

export default function(state = defauleState, action) {
    switch (action.type) {
        case TODO_CREATE:
            return state.concat(action.text);
        case TODO_DESTROY:
            return state.delete(action.id);
        default:
            return state;
    }
};
