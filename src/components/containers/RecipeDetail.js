import React, { Component } from 'react';
import { FullRecipe } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';

class RecipeDetail extends Component {

  componentDidMount(){
    this.fetchRecipe();
  }

  fetchRecipe(){
    const { id } = this.props.match.params;    
    if (this.props.recipe.map[id] != null){
      return;
    }

    this.props.fetchRecipeById(id)
    .catch(err => alert(err))
  }

  render(){
    const { id } = this.props.match.params;
    const recipe = this.props.recipe.map[id];
   
    return(
      <div>
        { (recipe == null)
          ? ''
          : <FullRecipe
              author={recipe.author.username}
              title={recipe.title}
              image={recipe.image}
              description={recipe.description}
              steps={recipe.steps}
            />
        }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    recipe: state.recipe
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchRecipeById: (id) => dispatch(actions.fetchRecipeById(id))
  }
}

export default connect(stateToProps, dispatchToProps)(RecipeDetail)