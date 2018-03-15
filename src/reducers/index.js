import { combineReducers } from 'redux'

const initialAmountState = { value: 0 };
function amountReducer(state = initialAmountState, action) {
  return { ...state, value: action.value }
}

const AppReducer = combineReducers({
  amountReducer
});

export default AppReducer
