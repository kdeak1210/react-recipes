import constants from '../constants';

var initialState = {
  all: []
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch(action.type){
    
    case constants.RECIPES_RECEIVED:
      updated['all'] = action.payload
      return updated;

    default:
      return updated;
  }
}