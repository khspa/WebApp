import { combineReducers } from 'redux';
import { NavigateReducer, DateRefreshReducer, UserConfigReducer, ResetTimeLineReducer } from './Reducers';

const allReducers = combineReducers({
    page:NavigateReducer,
    calender:DateRefreshReducer,
    user:UserConfigReducer,
    timeline:ResetTimeLineReducer,
})

export default allReducers