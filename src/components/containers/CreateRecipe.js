import React, { Component } from 'react';
import { AddStep, RecipeForm } from '../presentation';
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

  updateRecipe(field, event){
    //console.log(`Field: ${field} - ${event.target.value}`);
    let updated = Object.assign({}, this.state.recipe);
    updated[field] = event.target.value;
    this.setState({
      recipe: updated
    });
  }

  addStep(step){
    console.log(step);
  }

  submitRecipe(){
    console.log(this.state.recipe)
    //this.props.createRecipe(this.state.recipe)
  }
  
  render(){
    return(
      <div>
        <RecipeForm onSubmit={this.updateRecipe.bind(this)} />
        <br /><br /><br />
        <AddStep onSubmit={this.addStep.bind(this)}/>
        
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    user: state.account
  }
}

// const dispatchToProps = (dispatch) => {
//   return {
//     createRecipe: (params) => dispatch(actions.createRecipe(params))
//   }
// }

export default connect(stateToProps)(CreateRecipe)
// RECIPES
// {
//   author: {
//     id: '',
//     username: ''
//   },
//   title: '',
//   image: '',
//   description: '',
//   steps: [
//     {
//       description: '',
//       duration: '',
//       image: ''
//     }
//   ]
// }