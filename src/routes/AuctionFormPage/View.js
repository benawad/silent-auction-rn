import React from 'react';
import {
  Container,
  Content,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Right,
} from 'native-base';
import { Actions } from 'react-native-router-flux';

import AuctionForm from '../../components/AuctionForm';
import TabBarLayout from '../../components/TabBarLayout';

export default ({ requestCreateAuction }) => (
  <Container>
    <Container>
      <Content>
        <Header>
          <Left>
            <Button onPress={() => Actions.viewAuctions({})} transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Add Auction</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <AuctionForm requestCreateAuction={requestCreateAuction} />
      </Content>
    </Container>
    <TabBarLayout />
  </Container>
);
