import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './stores';
import { Home, CurrentUser, ProfileDisplay } from './components/layout';
import { CreateRecipe, RecipeDetail } from './components/containers';

class App extends Component {
  render(){
    return(
      <Provider store={ store.configureStore() }>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/currentuser' component={CurrentUser} />
            <Route path='/currentuser/create' component={CreateRecipe} />
            <Route path='/profile/:username' component={ProfileDisplay} />
            <Route path='/recipe/:id' component={RecipeDetail} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));