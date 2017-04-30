import React from 'react';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';
import { Content, Card, CardItem, Text, Body, Icon } from 'native-base';

import { socket, socketApp } from '../../modules';

const auction = ({ name, current_price, timeLeft, seller_username, top_bidder }, i) => (
  <Card key={i}>
    <CardItem header>
      <Text>{name}</Text>
    </CardItem>
    <CardItem>
      <Text style={{ fontSize: 50 }}>${ current_price }</Text>
    </CardItem>
    <CardItem>
      <Text style={{ fontSize: 20 }}>{ timeLeft }</Text>
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
    socketApp.service('auctions').on('created', a => this.props.auctionCreated(a));
    this.props.requestAuctions();
  }

  componentDidMount() {
    this.setInterval(
      () => this.props.updateTime(),
      1000,
    );
  }

  render() {
    const { auctions = [] } = this.props;
    return (
      <Content>
        {
          auctions.map(auction)
        }
      </Content>
    );
  }
}

reactMixin(ViewAuctions.prototype, TimerMixin);
