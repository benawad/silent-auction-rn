import React from 'react';
import TimerMixin from 'react-timer-mixin';
import reactMixin from 'react-mixin';
import { Platform } from 'react-native';
import {
  List,
  ListItem,
  Left,
  Right,
  Item,
  Picker,
  Button,
  Segment,
  Container,
  Fab,
  Content,
  Card,
  CardItem,
  Text,
  Icon,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';

import { socketApp } from '../../modules';
import TabBarLayout from '../../components/TabBarLayout';
import AnimatedIcon from '../../components/AnimatedIcon';

const auction = (
  { id, name, current_price, timeLeft, seller, top_bidder },
  i,
  userId,
  requestBid,
  removeAuction,
) =>
  <Card key={i}>
    <CardItem header>
      <Left>
        <Text>
          {name}
        </Text>
      </Left>
      {userId === seller.id &&
        <Right>
          <Icon
            onPress={() =>
              Actions.auctionFormPage({
                title: 'Update Auction',
                create: false,
                id,
                auctionName: name,
                current_price,
              })}
            name="create"
            style={{ fontSize: 48 }}
          />
          <Icon onPress={() => removeAuction(id)} name="close" style={{ fontSize: 48 }} />
        </Right>}
    </CardItem>
    <CardItem>
      <Left>
        <Text style={{ fontSize: 50 }}>
          ${current_price}
        </Text>
      </Left>
    </CardItem>
    <CardItem>
      <Left>
        <List
          renderRow={t =>
            <Text>
              {t}
            </Text>}
        >
          <ListItem>
            <Text style={{ fontSize: 20 }}>
              {timeLeft}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Seller: {seller.username}
            </Text>
          </ListItem>
          <ListItem>
            <Text>
              Top Bidder: {top_bidder.username}
            </Text>
          </ListItem>
        </List>
      </Left>
      <Right>
        <AnimatedIcon onPress={() => requestBid(id)} />
      </Right>
    </CardItem>
  </Card>;

export default class ViewAuctions extends React.Component {
  componentWillMount() {
    const auctionsService = socketApp.service('auctions');
    auctionsService.on('created', a => this.props.auctionCreated(a));
    auctionsService.on('patched', a => this.props.auctionUpdated(a));
    auctionsService.on('removed', a => this.props.auctionDeleted(a));
    this.props.requestAuctions();
  }

  componentDidMount() {
    this.setInterval(() => this.props.updateTime(), 1000);
  }

  render() {
    let { auctions = [], segment, picker } = this.props;

    if (segment === 'complete') {
      auctions = _.filter(auctions, ['timeLeft', 'complete']);
    } else if (segment === 'open') {
      auctions = _.filter(auctions, a => a.timeLeft !== 'complete');
    }

    if (picker === 'lTimeLeft') {
      auctions = _.sortBy(auctions, 'mTime');
    } else if (picker === 'mTimeLeft') {
      auctions = _.reverse(_.sortBy(auctions, 'mTime'));
    } else if (picker === 'hBid') {
      auctions = _.reverse(_.sortBy(auctions, 'current_price'));
    } else if (picker === 'lBid') {
      auctions = _.sortBy(auctions, 'current_price');
    }

    const segmentMarginTop = Platform.OS === 'ios' ? 15 : 0;

    return (
      <Container>
        <Container>
          <Segment style={{ marginTop: segmentMarginTop }}>
            <Button
              onPress={() => this.props.changeActiveSegment('open')}
              active={this.props.segment === 'open'}
              first
            >
              <Text>Open</Text>
            </Button>
            <Button
              onPress={() => this.props.changeActiveSegment('both')}
              active={this.props.segment === 'both'}
            >
              <Text>Both</Text>
            </Button>
            <Button
              onPress={() => this.props.changeActiveSegment('complete')}
              active={this.props.segment === 'complete'}
              last
            >
              <Text>Complete</Text>
            </Button>
          </Segment>
          <Picker
            mode="dropdown"
            selectedValue={this.props.picker}
            onValueChange={v => this.props.changePick(v)}
          >
            <Item label="Least time left" value="lTimeLeft" />
            <Item label="Most time left" value="mTimeLeft" />
            <Item label="Highest bid" value="hBid" />
            <Item label="Lowest bid" value="lBid" />
          </Picker>
          <Content>
            {auctions.map((a, i) =>
              auction(a, i, this.props.user.id, this.props.requestBid, this.props.removeAuction),
            )}
          </Content>
          <Fab
            containerStyle={{ marginLeft: 10 }}
            style={{ backgroundColor: '#5067FF' }}
            onPress={() => Actions.auctionFormPage({ title: 'Add Auction' })}
          >
            <Icon name="md-add" />
          </Fab>
        </Container>
        <TabBarLayout currentPage="viewAuctions" />
      </Container>
    );
  }
}

reactMixin(ViewAuctions.prototype, TimerMixin);
