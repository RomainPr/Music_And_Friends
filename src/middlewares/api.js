import axios from 'axios';

import {
  loginSuccess,
  SUBMIT_LOGIN,
  SUBMIT_SIGNUP_PLACE,

} from 'src/actions/user';

import {
  GET_MUSICIANS,
  getMusiciansSuccess,
  GET_BANDS,
  getBandsSuccess,
  GET_PLACES,
  getPlacesSuccess,
} from 'src/actions/musicians';

import {
  closeModal,
} from 'src/actions/modalSignIn';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MUSICIANS:
      axios.get('http://localhost:3001/musicians')
        .then((response) => {
          store.dispatch(getMusiciansSuccess(response.data.results));
        });
      next(action);
      break;
    case GET_BANDS:
      axios.get('http://localhost:3001/bands')
        .then((response) => {
          store.dispatch(getBandsSuccess(response.data.results));
        });
      next(action);
      break;
    case GET_PLACES:
      axios.get('http://localhost:3001/places')
        .then((response) => {
          store.dispatch(getPlacesSuccess(response.data.results));
        });
      next(action);
      break;
    case SUBMIT_LOGIN: {
      const state = store.getState();
      const loginRequest = {
        method: 'POST',
        url: 'http://localhost:3001/signin/user',
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      };
      axios(loginRequest)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          store.dispatch(loginSuccess());
          store.dispatch(closeModal());
        });
      break;
    }
    case SUBMIT_SIGNUP_PLACE: {
      const state = store.getState();
      const signUpRequest = {
        method: 'POST',
        url: 'http://localhost:3001/sign/place',
        data: {
          // firstname: state.sign.firstname,
          // lastname: state.sign.lastname,
          name: state.sign.placeName,
          description: state.sign.description,
          city: state.sign.city,
          adress: state.sign.adress,
          phone: state.sign.phone,
          zipcode: state.sign.postalCode,
          email: state.sign.email,
          password: state.sign.password,
        },
      };
      axios(signUpRequest)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          store.dispatch(loginSuccess());
          store.dispatch(closeModal());
        });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
