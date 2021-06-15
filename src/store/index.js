import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import logMiddleware from 'src/middlewares/log';
import apiMiddleware from 'src/middlewares/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware, apiMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
