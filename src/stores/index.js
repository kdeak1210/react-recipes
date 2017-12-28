import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import { 
  accountReducer, 
  commentReducer, 
  profileReducer, 
  recipeReducer 
} from '../reducers';

var store;

export default {

  configureStore: () => {

    const reducers = combineReducers({
      account: accountReducer,
      comment: commentReducer,
      profile: profileReducer,
      recipe: recipeReducer,
      form: formReducer         // redux-form
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