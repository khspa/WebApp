import { combineReducers } from 'redux';
import { NavigateReducer } from './Reducers';

const allReducers = combineReducers({
    page:NavigateReducer,
})

export default allReducers