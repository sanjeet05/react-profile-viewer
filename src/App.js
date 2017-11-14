/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
*/


import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from './Reducers/Store.js';
import { Router,Route,Switch} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import RequireAuth from './Utils/RequiredAuthentication.js'
import MainLayout from './Containers/MainLayout/MainLayout';
import LoginPage from './Components/LoginPage/LoginPage';
import PersonalInfo from './Containers/PersonalInfo/PersonalInfo';
import Address from './Containers/Address/Address';
import Education from './Containers/Education/Education';
import Experience from './Containers/Experience/Experience';
import Profile from './Containers/ProfileViewer/Profile';
import Save from './Containers/ProfileViewer/Save';
import AppTheme from './Containers/AppTheme';

const history = createBrowserHistory();

const App = () => (
<Provider store={store}>
  <MuiThemeProvider muiTheme={AppTheme}>
    <Router history={history} onUpdate={() => window.scrollTo(0, 0)}>
      <Switch>
        <Route exact path="/" component={LoginPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/save" component={Save}/>
        <MainLayout>
          <Route path="/personalinfo" component={PersonalInfo}/>
          <Route path="/address" component={Address}/>
          <Route path="/education" component={Education}/>
          <Route path="/experience" component={Experience}/>
          <Route path="/profile" component={Profile}/>
        </MainLayout>
    </Switch>
    </Router>
  </MuiThemeProvider>
</Provider>
);

export default App;
