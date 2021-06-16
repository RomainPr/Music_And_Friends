import axios from 'axios';

import {
  loginSuccess,
  SUBMIT_LOGIN,
} from 'src/actions/user';

import {
  GET_MUSICIANS,
  getMusiciansSuccess,
} from 'src/actions/musicians';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MUSICIANS:
      axios.get('http://localhost:3001/musicians')
        .then((response) => {
          store.dispatch(getMusiciansSuccess(response.data.results));
        });
      next(action);
      break;
    case SUBMIT_LOGIN: {
      const state = store.getState();
      const loginRequest = {
        method: 'POST',
        url: 'http://localhost:3001/signin',
        data: {
          email: state.user.email,
          password: state.user.password,
        },
      };

      axios(loginRequest)
        .then((response) => {
          store.dispatch(loginSuccess(response));
        });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
