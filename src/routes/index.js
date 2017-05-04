import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import Signup from './Signup';
import ViewAuctions from './ViewAuctions';
import AuctionFormPage from './AuctionFormPage';
import AuthRequired from '../components/AuthRequired';

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} hideNavBar />
      <Scene key="signup" component={Signup} hideNavBar />
      <Scene key="viewAuctions" component={AuthRequired(ViewAuctions)} initial hideNavBar />
      <Scene key="auctionFormPage" component={AuthRequired(AuctionFormPage)} hideNavBar />
    </Scene>
  </Router>
);
