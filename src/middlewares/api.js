import axios from 'axios';

import {
  loginSuccess,
  SUBMIT_LOGIN,
} from 'src/actions/user';

const apiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
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
          const token = response;
          localStorage.setItem('token', token);
          store.dispatch(loginSuccess());
        });
      break;
    }
    default:
      next(action);
      break;
  }
};

export default apiMiddleware;
