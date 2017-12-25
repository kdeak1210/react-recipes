import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { accountReducer, profileReducer, recipeReducer } from '../reducers';
import { reducer as formReducer } from 'redux-form'

var store;

export default {

  configureStore: () => {

    const reducers = combineReducers({
      account: accountReducer,
      profile: profileReducer,
      recipe: recipeReducer,
      form: formReducer
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