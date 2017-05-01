import React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Button,
  Text,
  InputGroup,
  Icon,
} from 'native-base';
import { Field, reduxForm, SubmissionError } from 'redux-form';

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

const onSubmit = ({ name = '', price = '' }, requestCreateAuction) => {
  const errors = {};
  let isError = false;

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
    console.log(price);
    console.log(name);
    // requestCreateAuction({ price, name });
  }
};

const createAuction = ({ handleSubmit, requestCreateAuction }) => (
  <Container>
    <Content>
      <Form style={{ marginTop: 20 }}>
        <Item>
          <Field
            name="name"
            placeholder="Name"
            component={renderField}
          />
        </Item>
        <Item last>
          <Field
            name="price"
            placeholder="Starting Price"
            component={renderField}
            keyboardType="decimal-pad"
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
    </Content>
  </Container>
);

export default reduxForm({
  form: 'createAuction',
})(createAuction);
