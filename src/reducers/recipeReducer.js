import constants from '../constants';

var initialState = {
  all: null,
  map: {},
  userRecipes: {}
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch(action.type){
    
    case constants.RECIPES_RECEIVED:
      updated['all'] = action.payload
      return updated;

    case constants.RECIPE_RECEIVED:
      //console.log('RECIPE_RECEIVED: ' + JSON.stringify(action.payload));
      let updatedMap = Object.assign({}, updated['map']);
      updatedMap[action.payload.id] = action.payload;
      updated['map'] = updatedMap;
      
      return updated;

    case constants.RECIPE_CREATED:
      //console.log('RECIPE_CREATED: ' + JSON.stringify(action.payload));
      let list = Object.assign([], updated['all']);
      list.unshift(action.payload);
      updated['all'] = list;
      return updated;

    case constants.PROFILE_RECIPES_RECEIVED:
      //console.log('PROFILE_RECIPES_RECEIVED: ' + JSON.stringify(action.payload));
      //console.log(action.params['author.username']);    
      const username = action.params['author.username'];
      let updatedUserMap = Object.assign({}, updated['userRecipes']);
      updatedUserMap[username] = action.payload
      updated['userRecipes'] = updatedUserMap;
      console.log(updated)
      return updated;

    default:
      return updated;
  }
}