import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import LoginComponent from './modules/Login/LoginComponent';
import UsersComponent from './modules/Users/UsersComponent';

import history from './history';
const URLS = {
  LOGIN: '/',
  USERS: '/users'
}
class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route
              path={URLS.LOGIN}
              exact
              component={LoginComponent}
            />
            <Route
              path={URLS.USERS}
              component={UsersComponent}
            />
          </Switch>
        </ThemeProvider>
      </Router>
    )
  }
}

export default App;
