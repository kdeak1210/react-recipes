import React, { Component } from 'react';
import { RecipeForm } from '../presentation';
import { connect } from 'react-redux';

class CreateRecipe extends Component {
  constructor(){
    super();
    this.state = {
      recipe: {
        author: {
          id: '',
          username: ''
        },
        title: '',
        image: '',
        description: '',
        steps: []
      }
    }
  }

  updateRecipe(recipe){
    console.log(recipe);
  }

  submitRecipe(recipe){
    console.log(`Before adding author: ${JSON.stringify(recipe)}`)
    
    const author = {
      id: this.props.user.id,
      username: this.props.user.username
    }

    recipe['author'] = author;
    console.log(`After adding author: ${JSON.stringify(recipe)}`);
  }
  
  render(){
    return(
      <div>
        <RecipeForm onSubmit={this.submitRecipe.bind(this)} />
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account.user
  }
}

// const dispatchToProps = (dispatch) => {
//   return {
//     createRecipe: (params) => dispatch(actions.createRecipe(params))
//   }
// }

export default connect(stateToProps)(CreateRecipe)