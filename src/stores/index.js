import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';


const sliderState = {
  value: 0
};

// Combined State
export const initialState = {
  sliderVal: sliderState
};


export const actionTypes = {
  ADD: 'ADD',
  REMOVE: 'REMOVE'
};

// REDUCERS
export const sliderReducer = (state = sliderState, action) => {
  switch (action.type) {
    case 'REMOVE':
      return Object.assign({}, state, {
        value: 0
      })
    case 'ADD':
      const newState = Object.assign({}, state, {
        value: action.val
      })
      return newState;

    default: return state;
  }
}

const reducer = combineReducers({sliderVal: sliderReducer});
// ACTIONS

export const addSliderValue = (val) => dispatch => {
  return dispatch({ type: actionTypes.ADD, val });
}
// eslint-disable-next-line
export const initStore = (initialState = initialState, req) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
}
