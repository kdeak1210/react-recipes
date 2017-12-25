import React, { Component } from 'react';
import { FeedPreview } from '../presentation';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

class Feed extends Component {

  componentDidMount(){
    //console.log('CDM - FEED');
    this.props.fetchRecipes(null);
  }

  render(){
    const recipes = this.props.recipe.all || [];

    return(
      <div>
        <h4>FEED (list of recent recipes)</h4>
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
    fetchRecipes: (params) => dispatch(actions.fetchRecipes(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Feed);