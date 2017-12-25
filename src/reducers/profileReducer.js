import constants from '../constants';

var initialState = {
  profileMap: {}
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state);

  switch(action.type){
    // case constants.PROFILES_RECEIVED:
    //   console.log('PROFILES_RECEIVED: ' + JSON.stringify(action.payload));
    //   updated['all'] = action.payload;
    //   return updated;

    case constants.PROFILE_CREATED:
      console.log('PROFILE_CREATED: ' + JSON.stringify(action.payload));
      updated['all'].push(action.payload);
      return updated;

    case constants.PROFILE_RECEIVED:
      console.log('PROFILE_RECEIVED: ' + JSON.stringify(action.payload));
      return updated;

    default:
      return updated;
  }
}