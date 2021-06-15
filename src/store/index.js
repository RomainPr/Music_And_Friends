import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';

import logMiddleware from 'src/middlewares/log';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(logMiddleware),
);

const store = createStore(reducer, enhancers);

export default store;
