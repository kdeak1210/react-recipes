import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './stores';

import { 
  Home, 
  UserDashboard, 
  ProfileDisplay, 
  RecipeDisplay 
} from './components/layout';

class App extends Component {
  render(){
    return(
      <Provider store={ store.configureStore() }>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/currentuser' component={UserDashboard} />
            <Route path='/profile/:username' component={ProfileDisplay} />
            <Route path='/recipe/:id' component={RecipeDisplay} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));