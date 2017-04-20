import React from 'react';
import { Content, Card, CardItem, Text, Body, Icon } from 'native-base';

const auction = ({ name, current_price, expiration_date, seller_username, top_bidder }) => (
  <Card>
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

export default () => (
  <Content>
    { 
      auction({ 
        "name": "Blackberry",
        "current_price": "142.20",
        "expiration_date": "2016-06-21T16:00:00.000Z",
        "seller_username": "tim2",
        "top_bidder": "bob",
      })
    }
    { 
      auction({ 
        "name": "Blackberry",
        "current_price": "142.20",
        "expiration_date": "2016-06-21T16:00:00.000Z",
        "seller_username": "tim2",
        "top_bidder": "bob",
      })
    }
    { 
      auction({ 
        "name": "Blackberry",
        "current_price": "142.20",
        "expiration_date": "2016-06-21T16:00:00.000Z",
        "seller_username": "tim2",
        "top_bidder": "bob",
      })
    }
  </Content>
);

