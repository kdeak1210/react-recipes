import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './stores';
import { Home, CurrentUser, ProfileInfo } from './components/layout';

class App extends Component {
  render(){
    return(
      <Provider store={ store.configureStore() }>
        <Router>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/currentuser' component={CurrentUser} />
            <Route path='/profile/:username' component={ProfileInfo} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));