import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'src/reducers/index';

import logMiddleware from 'src/middlewares/log';
import apiMiddleware from 'src/middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, apiMiddleware, thunk),
);

const store = createStore(reducer, enhancers);

export default store;
