import React from 'react';
import Dashboard from './containers/Dashboard';
import CharacterView from './containers/CharacterView';
import Navbar from './components/Navbar';
import { API_BASE_URL, RoutesPaths } from './constants';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { createClient, Provider } from 'urql';

const client = createClient({
  url: API_BASE_URL,
});

export default function App() {
  return (
    <Provider value={client}>
      <Router>
        <div className="App">
          <CssBaseline />
          <Navbar />
          <Switch>
            <Route path={RoutesPaths.CHARACTER_PATH} component={CharacterView} exact={true} />
            <Route path={RoutesPaths.HOME_PATH} component={Dashboard} />
            <Redirect to={RoutesPaths.HOME_PATH} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
