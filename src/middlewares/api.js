import axios from 'axios';

import {
  loginSuccess,
  SUBMIT_LOGIN,
  SUBMIT_SIGNUP_PLACE,
  SUBMIT_SIGNUP_MUSICIAN,
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
          localStorage.setItem('user', response.data.user_id);
          store.dispatch(loginSuccess());
          store.dispatch(closeModal());
        });
      break;
    }
    case SUBMIT_SIGNUP_PLACE: {
      const state = store.getState();
      const signUpRequest = {
        method: 'POST',
        url: 'https://music-and-friends.herokuapp.com/sign/places',
        data: {
          firstname: state.sign.firstname,
          lastname: state.sign.lastname,
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
          console.log(response);
        });
      break;
    }
    case SUBMIT_SIGNUP_MUSICIAN: {
      const state = store.getState();
      const signUpRequest = {
        method: 'POST',
        url: 'https://music-and-friends.herokuapp.com/sign/musicians',
        data: {
          firstname: state.sign.firstname,
          lastname: state.sign.lastname,
          phone: state.sign.phone,
          city: state.sign.city,
          pseudo: state.sign.pseudo,
          description: state.sign.description,
          email: state.sign.email,
          password: state.sign.password,
        },
      };
      axios(signUpRequest)
        .then((response) => {
          console.log(response);
        });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
