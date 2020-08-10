import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import agrostore from './agrostore';
import SignIn from './container/Login/signin';
import SignUp from './container/Login/signup';
import UserPage from './container/Users/userpage';
import ImgUpload from './container/Query/imgupload';
import Attendance from './container/Attendance/index';
import Query from './container/Query/index';
import Permit from './container/Permit/index';
import News from './container/News/index';
import Notification from './container/Notification/index';
import Activity from './container/Activity/index';
import Wrapper from './container/Wrapper/wrapper';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

class App extends Component {

  // constructor(props) {
  //   super(props);
  // };

  render() {
    return (
      <Provider store={agrostore}>
        <Router>
          <Switch>
          <Route exact path='/signup'>
              <Wrapper><SignUp /></Wrapper>
            </Route>
            <Route exact path='/signin'>
              <Wrapper><SignIn /></Wrapper>
            </Route>
            <Route exact path='/'>
              <Wrapper><SignIn /></Wrapper>
            </Route>
            <Route exact path='/userpage'>
              <Wrapper><UserPage /></Wrapper>
            </Route>
            <Route exact path='/imgupload'>
              <Wrapper><ImgUpload /></Wrapper>
            </Route>
            <Route exact path='/attendance'>
              <Wrapper><Attendance /></Wrapper>
            </Route>
            <Route exact path='/query'>
              <Wrapper><Query /></Wrapper>
            </Route>
            <Route exact path='/permit'>
              <Wrapper><Permit /></Wrapper>
            </Route>
            <Route exact path='/news'>
              <Wrapper><News /></Wrapper>
            </Route>
            <Route exact path='/notification'>
              <Wrapper><Notification /></Wrapper>
            </Route>
            <Route exact path='/activity'>
              <Wrapper><Activity /></Wrapper>
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  };
};

export default App;
