import React from 'react';
import {
  Icon,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const fontSize = 32;

export default ({ currentPage }) => (
  <Footer >
    <FooterTab>
      <Button onPress={() => Actions.viewAuctions({})} active={currentPage === 'viewAuctions'}>
        <Icon name="list" style={{ fontSize }} active={currentPage === 'viewAuctions'} />
      </Button>
      <Button onPress={() => Actions.login({})} active={currentPage === 'login'}>
        <Icon name="log-in" style={{ fontSize }} active={currentPage === 'login'} />
      </Button>
      <Button onPress={() => Actions.signup({})} active={currentPage === 'signup'}>
        <Icon name="clipboard" style={{ fontSize }} active={currentPage === 'signup'} />
      </Button>
    </FooterTab>
  </Footer>
);
