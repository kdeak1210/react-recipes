import constants from '../constants';

var initialState = {

}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state);

  switch(action.type){
    // case constants.PROFILES_RECEIVED:
    //   console.log('PROFILES_RECEIVED: ' + JSON.stringify(action.payload));
    //   updated['all'] = action.payload;
    //   return updated;

    // case constants.PROFILE_CREATED:
    //   console.log('PROFILE_CREATED: ' + JSON.stringify(action.payload));
    //   updated['all'].push(action.payload);
    //   return updated;

    case constants.PROFILE_RECEIVED:
      //console.log('PROFILE_RECEIVED: ' + JSON.stringify(action.payload));
      updated[action.params.username] = action.payload[0];
      //console.log(updated);
      
      return updated;

    case constants.PROFILE_UPDATED:
      //console.log('PROFILE_UPDATED: ' + JSON.stringify(action.payload));
      const { username } = action.payload // profiles stored in map by username as key
      return {
        ...updated,
        [username]: action.payload
      }

    default:
      return updated;
  }
}