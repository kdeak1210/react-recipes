import constants from '../constants';

var initialState = {

}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state);

  switch(action.type){
    case constants.COMMENTS_RECEIVED:
      //console.log('COMMENTS_RECEIVED: ' + JSON.stringify(action));
      updated[action.params.recipe] = action.payload;      
      return updated;

    case constants.COMMENT_CREATED:
      //console.log('COMMENT_CREATED: ' + JSON.stringify(action));      
      const { recipe } = action.params;
      let updatedList = Object.assign([], updated[recipe]);
      updatedList.push(action.payload);
      updated[recipe] = updatedList;
      return updated;

    default:
      return updated;
  }
}