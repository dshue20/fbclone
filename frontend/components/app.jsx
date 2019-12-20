import React from "react";
//import LoginFormContainer from "./splash/login_form_container";
import SignupFormContainer from "./splash/signup_form_container";
import {Route} from 'react-router-dom';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import FeedContainer from "./feed/feed_container";
import UserShowContainer from './users/user_show_container';

const App = () => (
  <div>
    <AuthRoute exact path="/" component={SignupFormContainer} />
    <ProtectedRoute exact path="/feed" component={FeedContainer} />
    <ProtectedRoute path="/users/:userId" component={UserShowContainer} />
  </div>
);

export default App;