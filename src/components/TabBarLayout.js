import React from 'react';
import {
  Container,
  Icon,
  Footer,
  FooterTab,
  Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

const fontSize = 32;

export default ({ children }) => (
  <Container>
    { children.map(scene =>
        React.cloneElement(React.createElement(scene.component), { key: scene.name })) }
    <Footer >
      <FooterTab>
        <Button onPress={() => Actions.viewAuctions({})} >
          <Icon name="list" style={{ fontSize }} />
        </Button>
        <Button onPress={() => Actions.login({})} active>
          <Icon active name="log-in" style={{ fontSize }} />
        </Button>
        <Button onPress={() => Actions.signup({})}>
          <Icon name="clipboard" style={{ fontSize }} />
        </Button>
      </FooterTab>
    </Footer>
  </Container>
);
