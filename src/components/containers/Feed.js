import React, { Component } from 'react';
import { Preview } from '../presentation';
import { APIManager } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

class Feed extends Component {

  componentDidMount(){
    console.log('CDM - FEED');
    this.props.fetchRecipes(null);
    console.log(this.props.recipe.all);
    
  }

  render(){

    const recipes = this.props.recipe.all || [];

    return(
      <div>
        <h4>FEED (list of recent recipes)</h4>
        <ul style={{listStyle: 'none', paddingLeft: '0px'}}>
        { recipes.map((recipe, i) => {
          return (
            <li key={recipe.id}>
              <Preview
                author='placeholder'
                title={recipe.title} 
                image={recipe.image} 
                description={recipe.description} 
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