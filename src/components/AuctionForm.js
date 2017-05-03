import React from 'react';
import {
  Form,
  Item,
  Input,
  Button,
  Text,
  InputGroup,
  Icon,
} from 'native-base';
import { Field, reduxForm, SubmissionError } from 'redux-form';

import DatePicker from './DatePicker';

const renderField = ({ input: { onChange, ...restInput }, keyboardType, placeholder, secureTextEntry, meta: { touched, error } }) => (
  <InputGroup error={!!(touched && error)}>
    <Input
      placeholder={placeholder}
      keyboardType={keyboardType}
      autoCapitalize="none"
      onChangeText={onChange}
      {...restInput}
      secureTextEntry={secureTextEntry}
    />
    { touched && error && <Icon name="ios-close-circle" style={{ color: 'red' }} /> }
  </InputGroup>
);

const dateField = ({ input: { onChange } }) => (
  <DatePicker onDateChange={date => onChange(date)} />
);


const onSubmit = ({ name = '', price = '', date='' }, requestCreateAuction) => {
  const errors = {};
  let isError = false;

  if (date.trim() === '') {
    errors.date = 'required';
    isError = true;
  }

  if (name.trim() === '') {
    errors.name = 'required';
    isError = true;
  }

  if (price.trim() === '') {
    errors.price = 'required';
    isError = true;
  }

  if (isNaN(price)) {
    errors.price = 'expected number';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(errors);
  } else {
    requestCreateAuction({
      name,
      current_price: price,
      expiration_date: date,
    });
  }
};

const createAuction = ({ handleSubmit, requestCreateAuction }) => (
  <Form style={{ marginTop: 20 }}>
    <Item>
      <Field
        name="name"
        placeholder="Name"
        component={renderField}
      />
    </Item>
    <Item>
      <Field
        name="price"
        placeholder="Starting Price"
        component={renderField}
        keyboardType="decimal-pad"
      />
    </Item>
    <Item last>
      <Field
        name="date"
        component={dateField}
      />
    </Item>
    <Button
      style={{ marginTop: 50, marginRight: 10, marginLeft: 10 }}
      onPress={handleSubmit(field => onSubmit(field, requestCreateAuction))}
      block
    >
      <Text>Submit</Text>
    </Button>
  </Form>
);

export default reduxForm({
  form: 'createAuction',
})(createAuction);
