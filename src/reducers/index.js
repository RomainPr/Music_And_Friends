import { combineReducers } from 'redux';

import modalSignInReducer from './modalSignIn';
import navReducer from './nav';

// combineReducers permet de découper notre état et nos reducers
// en plusieurs "tranches" aka SLICES
// ici nous avons deux tranches : recipes et user
const rootReducer = combineReducers({
  modalSignIn: modalSignInReducer,
  nav: navReducer,
});

export default rootReducer;
