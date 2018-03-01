import React, { Component } from 'react';
import { RecipeForm } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';
import swal from 'sweetalert2';
import { withRouter } from 'react-router-dom';

class CreateRecipe extends Component {

  submitRecipe(recipe){
    //console.log(`Before adding author: ${JSON.stringify(recipe)}`)  
    const author = {
      id: this.props.user.id,
      username: this.props.user.username
    };
    recipe['author'] = author;

    this.props.createRecipe(recipe)
    .then(response => {
      swal('Thank you', 'Your recipe has submitted successfully', 'success');
      this.props.history.push('/');
    })
    .catch(err => alert(err));
  }
  
  render(){
    return(
      <div>
        <h3>Submit a New Recipe to the Site</h3>
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

const dispatchToProps = (dispatch) => {
  return {
    createRecipe: (params) => dispatch(actions.createRecipe(params))
  }
}

export default withRouter(connect(stateToProps, dispatchToProps)(CreateRecipe));