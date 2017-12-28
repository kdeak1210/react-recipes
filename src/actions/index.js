import constants from '../constants';
import { APIManager } from '../utils';

const getRequest = (path, params, actionType) => {
  return (dispatch) => // No curly brace wrap here, So can return the PROMISE
    APIManager.get(path, params)
    .then((response) => {
      if (response.confirmation != 'success')
        throw new Error(response.message)

      const payload = response.results || response.result || response.user;
      
      dispatch({
        type: actionType,
        payload,
        params       
      })
    })
    .catch(err => { throw err })  // propagate error down the chain
}

const postRequest = (path, params, actionType) => {
  return (dispatch) => 
    APIManager.post(path, params)
    .then((response) => {
      if (response.confirmation != 'success')        
        throw new Error(response.message) // (also thrown on duplicate username/email)
      
      const payload = response.results || response.result || response.user;      

      dispatch({
        type: actionType,
        payload,
        params
      })
    })
    .catch(err => { throw err }) // propagate error down the chain
}

const putRequest = (path, params, actionType) => {
  return (dispatch) => 
    APIManager.put(path, params)
    .then(response => {
      if (response.confirmation != 'success')
        throw new Error(response.message);

      const payload = response.results || response.result || response.user;

      dispatch({
        type: actionType,
        payload,
        params
      })
    })
    .catch(err => { throw err }) // propagate error down the chain 
}

const deleteRequest = (path, params, actionType) => {
  return (dispatch) => 
    APIManager.delete(path, params)
    .then(response => {
      if (response.confirmation != 'success')
        throw new Error(response.message);

      const payload = response.results || response.result || response.user;

      dispatch({
        type: actionType,
        payload,
        params
      })
    })
    .catch(err => { throw err }) // propagate error down the chain
}

export default {

  createRecipe: (params) => {
    return (dispatch) => {
      return dispatch(postRequest('/api/recipe', params, constants.RECIPE_CREATED));
    }
  },

  createComment: (params) => {
    return (dispatch) => {
      return dispatch(postRequest('/api/comment', params, constants.COMMENT_CREATED));
    }
  },

  fetchComments: (params) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/comment', params, constants.COMMENTS_RECEIVED));
    }
  },
  
  fetchRecipes: (params) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/recipe', params, constants.RECIPES_RECEIVED));
    }
  },

  fetchRecipeById: (id) => {
    return (dispatch) => {
      return dispatch(getRequest(`/api/recipe/${id}`, null, constants.RECIPE_RECEIVED));
    }
  },

  fetchProfileRecipes: (params) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/recipe', params, constants.PROFILE_RECIPES_RECEIVED));
    }
  },

  fetchProfile: (params) => {
    return (dispatch) => {
      return dispatch(getRequest('/api/profile', params, constants.PROFILE_RECEIVED));
    }
  },

  updateProfile: (id, updated) => {
    return (dispatch) => {
      return dispatch(putRequest(`/api/profile/${id}`, updated, constants.PROFILE_UPDATED));
    }
  },

  deleteRecipe: (id) => {
    return (dispatch) => {
      return dispatch(deleteRequest(`/api/recipe/${id}`, null, constants.RECIPE_DELETED));
    }
  },

  checkCurrentUser: () => {
    return (dispatch) => {
      return dispatch(getRequest('/account/currentuser', null, constants.USER_LOGGED_IN));
    }
  },

  register: (credentials) => {
    return (dispatch) => {
      return dispatch(postRequest('/account/register', credentials, constants.PROFILE_CREATED));
    }
  },

  login: (credentials) => {
    return (dispatch) => {
      return dispatch(postRequest('/account/login', credentials, constants.USER_LOGGED_IN));
    }
  },

  logout: () => {
    return (dispatch) => {
      return dispatch(getRequest('/account/logout', null, constants.USER_LOGGED_OUT));
    }
  },
  
}