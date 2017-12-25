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

    case constants.RECIPE_CREATED:
      console.log('RECIPE_CREATED: ' + JSON.stringify(action.payload));
      let list = Object.assign([], updated['all']);
      list.unshift(action.payload);
      updated['all'] = list;
      return updated;

    default:
      return updated;
  }
}