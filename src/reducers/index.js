import { combineReducers } from 'redux';
import todoReducer from './todoReducers';

const allReducers = combineReducers({
    todoReducer: todoReducer
});

export default allReducers;