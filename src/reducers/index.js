import { combineReducers } from 'redux';

import modalSignInReducer from './modalSignIn';
import navReducer from './nav';
import userReducer from './user';
import musiciansReducer from './musicians';
import sign from './sign';
import search from './searchpage';
import myAds from './myAds';
import newAd from './newAd';


// combineReducers permet de découper notre état et nos reducers
// en plusieurs "tranches" aka SLICES
// ici nous avons deux tranches : recipes et user
const rootReducer = combineReducers({
  modalSignIn: modalSignInReducer,
  nav: navReducer,
  user: userReducer,
  musicians: musiciansReducer,
  sign: sign,
  search: search,
  myAds: myAds,
  newAd: newAd,

});

export default rootReducer;
