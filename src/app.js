import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Navbar } from './components/presentation';
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
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/currentuser' component={UserDashboard} />
              <Route path='/profile/:username' component={ProfileDisplay} />
              <Route path='/recipe/:id' component={RecipeDisplay} />
            </Switch>
            </React.Fragment>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));