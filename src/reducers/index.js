import { combineReducers } from 'redux';

import modalSignInReducer from './modalSignIn';
import navReducer from './nav';
import userReducer from './user';
import musiciansReducer from './musicians';
import signMusician from './signMusician';
import search from './searchpage';


// combineReducers permet de découper notre état et nos reducers
// en plusieurs "tranches" aka SLICES
// ici nous avons deux tranches : recipes et user
const rootReducer = combineReducers({
  modalSignIn: modalSignInReducer,
  nav: navReducer,
  user: userReducer,
  musicians: musiciansReducer,
  signMusician: signMusician,
  search: search,
});

export default rootReducer;