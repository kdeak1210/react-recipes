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
    const { type } = this.props;
    const recipes = (type == 'public')
    ? this.props.recipe.all || []
    : this.props.recipe.userRecipes[this.props.username] || [];

    return(
      <div>
        { (type == 'user')
          ? <h3>{this.props.username} has submitted {recipes.length} recipes</h3>
          : ''
        }
        { recipes.map((recipe, i) => {
          const { id, author, title, image, description, timestamp } = recipe;
          return (
            <article className="box excerpt" key={id}>
              <FeedPreview
                id={id}
                author={author.username}
                title={title}
                image={image}
                description={description}
                timestamp={timestamp}
              />
            </article>
          )
        })}
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