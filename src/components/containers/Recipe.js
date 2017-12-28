import React, { Component } from 'react';
import { FullRecipe } from '../presentation';
import { connect } from 'react-redux';
import actions from '../../actions';
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
    })
    .then(result => {
      if (result.value) {
        swal('Deleted!', 'Your recipe has been deleted.', 'success');
      } else if (result.dismiss === 'cancel'){
        swal('Cancelled', 'Your recipe remains intact.', 'error');
      }
    });
  }

  render(){
    const { id } = this.props.match.params;
    const recipe = this.props.recipe.fullDetail[id];
    const { user } = this.props;
       
    return(
      <div>
        { (user && recipe && (user.id == recipe.author.id))
          ? <i style={{color:'maroon'}} className="fa fa-trash-o fa-3x"></i>
          : ''
        }
        { (recipe == null)
          ? ''
          : <FullRecipe
              recipe={recipe}
              showDelete={true}
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
    fetchRecipeById: (id) => dispatch(actions.fetchRecipeById(id))
  }
}

export default connect(stateToProps, dispatchToProps)(Recipe)