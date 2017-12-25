import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './stores';
import { Home, CurrentUser, ProfileInfo } from './components/layout';
import { CreateRecipe } from './components/containers';

class App extends Component {
  render(){
    return(
      <Provider store={ store.configureStore() }>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/currentuser' component={CurrentUser} />
            <Route path='/currentuser/create' component={CreateRecipe} />
            <Route path='/profile/:username' component={ProfileInfo} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));