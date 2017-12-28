import constants from '../constants';

var initialState = {
  all: null,      // List of all the recipes (for public feed)
  fullDetail: {}, // keys as recipe IDs, values = full detail
  userRecipes: {} // keys as usernames, values = all of a user's reicpes
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch(action.type){
    
    case constants.RECIPES_RECEIVED:
      updated['all'] = action.payload
      return updated;

    case constants.RECIPE_RECEIVED: {
      //console.log('RECIPE_RECEIVED: ' + JSON.stringify(action.payload));
      let updatedMap = Object.assign({}, updated['fullDetail']);
      updatedMap[action.payload.id] = action.payload;
      updated['fullDetail'] = updatedMap; 
      return updated;
    }

    case constants.RECIPE_CREATED: {
      //console.log('RECIPE_CREATED: ' + JSON.stringify(action.payload));
      let list = Object.assign([], updated['all']);
      list.unshift(action.payload);
      updated['all'] = list;

      // now add to the userRecipes map, for username key of creator
      const { username } = action.payload.author;
      let updatedMap = Object.assign({}, updated['userRecipes']);
      let updatedList = Object.assign([], updatedMap[username]);
      updatedList.unshift(action.payload);
      updatedMap[username] = updatedList;
      updated['userRecipes'] = updatedMap;

      return updated;
    }

    case constants.PROFILE_RECIPES_RECEIVED: {
      //console.log('PROFILE_RECIPES_RECEIVED: ' + JSON.stringify(action.payload));
      const username = action.params['author.username'];
      let updatedMap = Object.assign({}, updated['userRecipes']);
      updatedMap[username] = action.payload
      updated['userRecipes'] = updatedMap;
      return updated;
    }

    case constants.RECIPE_DELETED: {
      console.log('RECIPE_DELETED: ' + JSON.stringify(action.payload));
      /**
       * TODO: Implement this Reducer!!! Below: action.payload
       * 
       RECIPE_DELETED: {
        "author": {
            "username":"chefjohn",
            "id":"5a41654c5f5f212faef37fbe"
        },
        "title":"to be removed",
        "image":"",
        "description":"fdsfsdfsdfsdf",
        "steps":
          [
            {
              "_id":"5a44b6e768548a191944ac9c",
              "timestamp":"2017-12-28T09:16:34.536Z",
              "image":"",
              "duration":"gshhh",
              "directions":"dfgsd"
            },
            {
              "_id":"5a44b6e768548a191944ac9b",
              "timestamp":"2017-12-28T09:16:34.536Z",
              "image":"",
              "duration":"ssss",
              "directions":"ds"
            }
          ],
          "timestamp":"2017-12-28T09:16:34.537Z",
          "id":"5a44b6e768548a191944ac9a"
        } 
       * */
      
      return updated;
    }

    default:
      return updated;
  }
}