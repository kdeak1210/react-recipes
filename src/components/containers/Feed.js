import React, { Component } from 'react';
import { FeedPreview } from '../presentation';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

// Can have Props type "user" or "public"

class Feed extends Component {

  componentDidMount(){
    if (this.props.type == 'public'){
      this.fetchRecipeFeed();
    }

    if (this.props.type == 'user'){
      this.fetchUserRecipes();
    }

  }

  fetchRecipeFeed(){
    if (this.props.recipe.all == null){
      this.props.fetchRecipes(null);
    }
  }

  fetchUserRecipes(){
    this.props.fetchProfileRecipes({'author.username': this.props.username});
  }

  render(){
    const recipes = (this.props.type == 'public')
    ? this.props.recipe.all || []
    : this.props.recipe.userRecipes[this.props.username] || [];

    return(
      <div>
        { (this.props.type=='public')
          ? <h4>Recent Recipes Feed</h4>
          : <h4>{this.props.username} has created {recipes.length} recipes</h4>
        }

        <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
        { recipes.map((recipe, i) => {
          const { id, author, title, image, description } = recipe;
          return (
            <li key={id}>
              <FeedPreview
                id={id}
                author={author.username}
                title={title}
                image={image}
                description={description} 
                />
            </li>
          )
        })}
        </ul>         
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
    fetchRecipes: (params) => dispatch(actions.fetchRecipes(params)),
    fetchProfileRecipes: (params) => dispatch(actions.fetchProfileRecipes(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Feed);