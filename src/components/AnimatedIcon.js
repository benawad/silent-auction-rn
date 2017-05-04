import React from 'react';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'native-base';

export default class AnimatedIcon extends React.Component {
  render() {
    return (
      <Animatable.View ref="view">
        <Icon
          onPress={() => {
            this.refs.view.bounce(800);
            this.props.onPress();
          }} 
          name="logo-bitcoin"
          style={{ color: 'green', fontSize: 90, marginBottom: 30, marginRight: 60 }}
        />
      </Animatable.View>
    );
  }
}
