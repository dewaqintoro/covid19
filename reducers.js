import { combineReducers } from 'redux'
import * as types from './types'

// COUNTER REDUCER
const counterReducer = (state = 0, { type }) => {
  switch (type) {
    case types.INCREMENT:
      return state + 1
    case types.DECREMENT:
      return state - 1
    case types.RESET:
      return 0
    default:
      return state
  }
}

// INITIAL TIMER STATE
const initialTimerState = {
  lastUpdate: 0,
  light: false,
}

// TIMER REDUCER
const timerReducer = (state = initialTimerState, { type, payload }) => {
  switch (type) {
    case types.TICK:
      return {
        lastUpdate: payload.ts,
        light: !!payload.light,
      }
    default:
      return state
  }
}

let initialState = {
  title: "dewa",
  getCovidsList:false,
  getCovidIndo:false,
  getCovidPositif:false,
  getCovidSembuh:false,

  errorCovidsList: false,
  errorCovidIndo:false,
  errorCovidPositif:false ,
  errorCovidSembuh:false ,

}

const INITIAL_STATE_AUTH = {
  isSignedIn: null,
  userId: null,
};

const covidsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_COVIDS_LIST:
      return{
        ...state,
        getCovidsList: action.payload.data,
        errorCovidsList: action.payload.errorMessage
      }

    case types.GET_COVID_INDO:
      return{
        ...state,
        getCovidIndo: action.payload.data,
        errorCovidIndo: action.payload.errorMessage
      }

    case types.GET_COVID_POSITIF:
      return{
        ...state,
        getCovidPositif: action.payload.data,
        errorCovidPositif: action.payload.errorMessage
      }

    case types.GET_COVID_SEMBUH:
      return{
        ...state,
        getCovidSembuh: action.payload.data,
        errorCovidSembuh: action.payload.errorMessage
      }

 
    default:
      return state
  }
}
 
// AUTH REDUCER
const authReducer = (state = INITIAL_STATE_AUTH, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case types.SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
}

// COMBINED REDUCERS
const reducers = {
  counter: counterReducer,
  timer: timerReducer,
  covids: covidsReducer,
  auth: authReducer,
}

export default combineReducers(reducers)
