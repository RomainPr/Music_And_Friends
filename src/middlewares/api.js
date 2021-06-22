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
      axios.get('https://music-and-friends.herokuapp.com/musicians')
        .then((response) => {
          store.dispatch(getMusiciansSuccess(response.data.results));
        });
      next(action);
      break;
    case GET_BANDS:
      axios.get('https://music-and-friends.herokuapp.com/bands')
        .then((response) => {
          store.dispatch(getBandsSuccess(response.data.results));
        });
      next(action);
      break;
    case GET_PLACES:
      axios.get('https://music-and-friends.herokuapp.com/places')
        .then((response) => {
          store.dispatch(getPlacesSuccess(response.data.results));
        });
      next(action);
      break;
    case SUBMIT_LOGIN: {
      const state = store.getState();
      const loginRequest = {
        method: 'POST',
        url: 'https://music-and-friends.herokuapp.com/signin/user',
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
