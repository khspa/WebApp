import { combineReducers } from 'redux';
import { NavigateReducer, DateRefreshReducer, UserConfigReducer } from './Reducers';

const allReducers = combineReducers({
    page:NavigateReducer,
    calender:DateRefreshReducer,
    user:UserConfigReducer,
})

export default allReducers