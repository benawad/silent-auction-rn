import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Login from './Login';
import Signup from './Signup';
import ViewAuctions from './ViewAuctions';
import AuctionForm from './AuctionForm';
import AuthRequired from '../components/AuthRequired';

export default () => (
  <Router>
    <Scene key="root">
      <Scene key="login" component={Login} hideNavBar />
      <Scene key="signup" component={Signup} hideNavBar />
      <Scene key="viewAuctions" component={AuthRequired(ViewAuctions)} initial hideNavBar />
      <Scene key="auctionForm" component={AuthRequired(AuctionForm)} hideNavBar />
    </Scene>
  </Router>
);
