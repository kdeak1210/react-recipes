import constants from '../constants';

var initialState = {
  user: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state);

  switch(action.type){
    case constants.PROFILE_CREATED:
      console.log('PROFILE_CREATED: ' + JSON.stringify(action.payload));
      updated['user'] = action.payload;
      return updated;

    case constants.PROFILE_UPDATED:
      console.log('PROFILE_UPDATED: ' + JSON.stringify(action.payload));
      return updated;

    case constants.USER_LOGGED_IN:
      console.log('USER_LOGGED_IN: ' + JSON.stringify(action.payload));
      updated['user'] = action.payload;
      return updated;

    case constants.USER_LOGGED_OUT:
      console.log('USER_LOGGED_OUT: ' + JSON.stringify(action.payload));
      updated['user'] = action.payload; // should be null
      return updated;

    default:
      return updated;
  }

}