import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { accountReducer, profileReducer, recipeReducer } from '../reducers';

var store;

export default {

  configureStore: () => {

    const reducers = combineReducers({
      account: accountReducer,
      profile: profileReducer,
      recipe: recipeReducer
    });

    store = createStore(
      reducers,
      applyMiddleware(thunk)
    );

    return store;

  },

  currentStore: () => {
    return store;
  }

}