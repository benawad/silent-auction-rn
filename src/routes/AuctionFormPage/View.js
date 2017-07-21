import React from 'react';
import { Container, Header, Left, Button, Icon, Title, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

import AuctionForm from '../../components/AuctionForm';
import TabBarLayout from '../../components/TabBarLayout';

export default ({
  requestUpdateAuction,
  requestCreateAuction,
  title,
  create = true,
  id,
  auctionName,
  current_price,
}) =>
  <Container>
    <Container>
      <Header>
        <Left>
          <Button onPress={() => Actions.viewAuctions({})} transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Title>
          {title}
        </Title>
        <Right />
      </Header>
      <AuctionForm
        initialValues={{
          name: auctionName || '',
          price: `${current_price || ''}`,
        }}
        requestCreateAuction={auction =>
          create ? requestCreateAuction(auction) : requestUpdateAuction({ auction, id })}
      />
    </Container>
    <TabBarLayout />
  </Container>;
