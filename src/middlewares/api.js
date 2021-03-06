import axios from 'axios';

import {
  loginSuccess,
  SUBMIT_LOGIN,
  SUBMIT_LOGIN_PLACE,
  SUBMIT_SIGNUP_PLACE,
  SUBMIT_SIGNUP_MUSICIAN,
  SUBMIT_NEW_AD,
} from 'src/actions/user';

import {
  GET_MUSICIANS,
  getMusiciansSuccess,
  GET_BANDS,
  getBandsSuccess,
  GET_PLACES,
  getPlacesSuccess,
  GET_INSTRUMENTS,
  getInstrumentsSuccess,
} from 'src/actions/musicians';

import {
  closeModal,
  POST_INSTRUMENT,
} from 'src/actions/modalSignIn';

// import {
//   GET_ANNOUNCES
// } from 'src/actions/announces';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MUSICIANS:
      axios.get('https://music-and-friends.herokuapp.com/musicians')
        .then((response) => {
          store.dispatch(getMusiciansSuccess(response.data.results));
          localStorage.setItem('musicians', JSON.stringify(response.data.results));
        });
      next(action);
      break;
    case GET_BANDS:
      axios.get('https://music-and-friends.herokuapp.com/bands')
        .then((response) => {
          store.dispatch(getBandsSuccess(response.data.results));
          localStorage.setItem('bands', JSON.stringify(response.data.results));
        });
      next(action);
      break;
    case GET_PLACES:
      axios.get('https://music-and-friends.herokuapp.com/places')
        .then((response) => {
          store.dispatch(getPlacesSuccess(response.data.results));
          localStorage.setItem('places', JSON.stringify(response.data.results));
        });
      next(action);
      break;
    case GET_INSTRUMENTS:
      axios.get('https://music-and-friends.herokuapp.com/instruments')
        .then((response) => {
          store.dispatch(getInstrumentsSuccess(response.data.results));
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
          role: state.modalSignIn.role,
        },
      };
      console.log(loginRequest);
      axios(loginRequest)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', response.data.id);
          localStorage.setItem('role', response.data.role);
          store.dispatch(loginSuccess());
          store.dispatch(closeModal());
        });
      break;
    }
    case SUBMIT_LOGIN_PLACE: {
      const state = store.getState();
      const loginRequest = {
        method: 'POST',
        url: 'https://music-and-friends.herokuapp.com/signin/place',
        data: {
          email: state.user.email,
          password: state.user.password,
          role: state.modalSignIn.role,
        },
      };
      console.log(loginRequest);
      axios(loginRequest)
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', response.data.id);
          localStorage.setItem('role', response.data.role);
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
        });
      break;
    }
    case POST_INSTRUMENT: {
      const state = store.getState();
      const id = localStorage.getItem('user');
      const loginRequest = {
        method: 'POST',
        url: `https://music-and-friends.herokuapp.com/musicians/${id}`,
        data: {
          instrument: state.modalSignIn.instrumentValue,
        },
      };
      console.log(loginRequest);
      axios(loginRequest)
        .then((response) => {
          console.log(response);
        });
      break;
    }

    case SUBMIT_NEW_AD: {
      const state = store.getState();
      const id = localStorage.getItem('user');
      const signUpRequest = {
        method: 'POST',
        url: `https://localhost:3001/newads/users/${id}`,
        data: {
          category: state.newAd.userSelected,
          style: state.newAd.styleName,
          instrument: state.newAd.instrumentName,
          title: state.newAd.title,
          description: state.newAd.content,
        },
      };
      axios(signUpRequest)
        .then((response) => {
          console.log(response);
        });
      break;
    }
    // case GET_ANNOUNCES: {
    //   axios.get('https://music-and-friends.herokuapp.com/announces')
    //     .then((response) => {
    //       store.dispatch(getAnnounces(response.data.results));
    //     });
    //   next(action);
    //   break;
    // }

    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
