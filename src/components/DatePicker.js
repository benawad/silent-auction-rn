import React, { Component } from 'react';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {
  Content,
  Text,
  Button,
} from 'native-base';
import moment from 'moment';

export default class DatePicker extends Component {
  state = {
    isDateTimePickerVisible: false,
    selectedDate: '',
  };

  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

  handleDatePicked = (date) => {
    this.hideDateTimePicker();
    const mDate = moment(date);
    this.props.onDateChange(mDate.format());
    this.setState({
      selectedDate: mDate.format('MMMM Do YYYY, h:mm:ss a'),
    });
  };

  render() {
    return (
      <Content>
        <Button
          onPress={this.showDateTimePicker}
          style={{ marginTop: 10, marginRight: 15, marginBottom: 10 }}
          block
        >
          <Text>{ this.state.selectedDate ? this.state.selectedDate : 'Select Date'}</Text>
        </Button>
        <DateTimePicker
          mode="datetime"
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </Content>
    );
  }
}
