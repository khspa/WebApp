import { combineReducers } from 'redux';
import { NavigateReducer, 
         DateRefreshReducer, 
         UserConfigReducer, 
         ResetTimeLineReducer,
         PaymentReducer} from './Reducers';

const allReducers = combineReducers({
    page:NavigateReducer,
    calender:DateRefreshReducer,
    user:UserConfigReducer,
    timeline:ResetTimeLineReducer,
    payment: PaymentReducer
})

export default allReducers