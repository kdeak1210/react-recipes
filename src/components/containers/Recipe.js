import React, { Component } from 'react';
import { FullRecipe } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';
import { withRouter } from 'react-router-dom';
import { APIManager } from '../../utils';
import swal from 'sweetalert2';

class Recipe extends Component {

  componentDidMount(){
    this.fetchRecipe();
  }

  fetchRecipe(){
    const { id } = this.props.match.params;
    if (this.props.recipe.fullDetail[id] != null){
      return;
    }

    this.props.fetchRecipeById(id)
    .catch(err => alert(err))
  }

  deleteRecipe(){
    swal({
      title: 'Delete This Recipe?',
      text: 'It will be gone forever...',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    })
    .then(result => {
      if (result.value) { 
        // The user opted to delete their recipe
        const { id } = this.props.match.params;
        this.props.deleteRecipe(id)
        .then(response => {
          swal('Deleted!', 'Your recipe has been deleted.', 'success');
          this.props.history.push('/'); // Redirects to homepage
        }) 
      } else if (result.dismiss === 'cancel'){
        swal('Cancelled', 'Your recipe remains intact.', 'error');
      }
    });
  }

  render(){
    const { id } = this.props.match.params;
    const recipe = this.props.recipe.fullDetail[id];
    const { user } = this.props;

    const shouldRenderDelete = (recipe && user && (recipe.author.id == user.id));
    return(
      <div>
        { (recipe == null)
          ? ''
          : <FullRecipe
              recipe={recipe}
              showDelete={shouldRenderDelete}
              handleDelete={this.deleteRecipe.bind(this)}
            />
        }
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    recipe: state.recipe,
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchRecipeById: (id) => dispatch(actions.fetchRecipeById(id)),
    deleteRecipe: (id) => dispatch(actions.deleteRecipe(id))
  }
}

export default withRouter(connect(stateToProps, dispatchToProps)(Recipe))