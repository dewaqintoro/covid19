import * as types from './types'
import axios from 'axios'  
// INITIALIZES CLOCK ON SERVER
export const serverRenderClock = () => (dispatch) =>
  dispatch({
    type: types.TICK,
    payload: { light: false, ts: Date.now() },
  })

// const authAxios = axios.create({
//     headers: {
//       "content-type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"
//     }
//   }) 

 
export const getCovidsList = () => {
  return (dispatch) => {
    // axios.get('http://localhost:3004/covids') 
    // authAxios.get(`https://api.kawalcorona.com/indonesia/provinsi/`) 
    axios.get(``) 
      .then(function (response) {
        // console.log("action prov",response.data);
        dispatch({
          type: types.GET_COVIDS_LIST,
          payload: {
            data: response.data,
            errorMessage: false
          } 
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVIDS_LIST,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
} 

export const getCovidIndo = () => {
  return (dispatch) => {
    // axios.get('https://api.kawalcorona.com/indonesia/') 
    axios.get('') 


      .then(function (response) {
        // console.log("action indo",response);
        dispatch({
          type: types.GET_COVID_INDO,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVID_INDO,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}

export const getCovidPositif2 = () => {
  return (dispatch) => {
    // axios.get('https://api.kawalcorona.com/positif') 
    axios.get('') 


      .then(function (response) {
        console.log("action positif",response);
        dispatch({
          type: types.GET_COVID_POSITIF,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVID_POSITIF,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const getCovidSembuh = () => {
  return (dispatch) => {
    axios.get('https://indonesia-covid-19.mathdro.id/api') 

      .then(function (response) {
        // console.log("action sembuh",response);
        dispatch({
          type: types.GET_COVID_SEMBUH,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVID_SEMBUH,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const getCovidPositif = () => {
  return (dispatch) => {
    axios.get('https://indonesia-covid-19.mathdro.id/api/provinsi') 

      .then(function (response) {
        // console.log("provinsi",response);
        dispatch({
          type: types.GET_COVID_POSITIF,
          payload: {
            data: response.data,
            errorMessage: false
          }
        })
      })
      .catch(function (error) {
        console.log(error);
        dispatch({
          type: types.GET_COVID_POSITIF,
          payload: {
            data: false,
            errorMessage: error.message
          }
        })
      })
  }
}


export const signIn = (userId) => {
  return {
    type: types.SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: types.SIGN_OUT,
  };
};

 
 
// INITIALIZES CLOCK ON CLIENT
export const startClock = () => (dispatch) =>
  setInterval(() => {
    dispatch({ type: types.TICK, payload: { light: true, ts: Date.now() } })
  }, 1000)

// INCREMENT COUNTER BY 1
export const incrementCount = () => ({ type: types.INCREMENT })

// DECREMENT COUNTER BY 1
export const decrementCount = () => ({ type: types.DECREMENT })

// RESET COUNTER
export const resetCount = () => ({ type: types.RESET })
