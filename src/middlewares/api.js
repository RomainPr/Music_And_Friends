import axios from 'axios';

import {
  loginSuccess,
  SUBMIT_LOGIN,
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
      axios.get('http://localhost:3001/')
        .then((response) => {
          store.dispatch(getMusiciansSuccess(response.data.results[0]));
        });
      next(action);
      break;
    case GET_BANDS:
      axios.get('http://localhost:3001/')
        .then((response) => {
          store.dispatch(getBandsSuccess(response.data.results[1]));
        });
      next(action);
      break;
    case GET_PLACES:
      axios.get('http://localhost:3001/')
        .then((response) => {
          store.dispatch(getPlacesSuccess(response.data.results[2]));
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
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
