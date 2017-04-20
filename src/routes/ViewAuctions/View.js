import React from 'react';
import { Content, Card, CardItem, Text, Body, Icon } from 'native-base';

import { socket, socketApp } from '../../modules';

const auction = ({ name, current_price, expiration_date, seller_username, top_bidder }, i) => (
  <Card key={i}>
      <CardItem header>
          <Text>{name}</Text>
      </CardItem>
      <CardItem>
          <Text style={{fontSize: 50}}>${ current_price }</Text>
      </CardItem>
      <CardItem>
          <Text style={{fontSize: 20}}>{ expiration_date }</Text>
      </CardItem>
      <CardItem>
          <Text>Seller: { seller_username }</Text>
      </CardItem>
      <CardItem>
          <Text>Top Bidder: { top_bidder }</Text>
      </CardItem>
  </Card>
);

export default class ViewAuctions extends React.Component {

  componentWillMount() {
    socketApp.service('auctions').on('created', auction => this.props.auctionCreated(auction));
    this.props.requestAuctions();
  }

  render () {
    const { auctions=[] } = this.props;
    return (
      <Content>
        {
          auctions.map(auction)
        }
      </Content>
    );
  }
}

