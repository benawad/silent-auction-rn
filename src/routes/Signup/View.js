import React, { Component } from 'react';
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

const renderField = ({ input: { onChange, ...restInput }, placeholder, secureTextEntry, meta: { touched, error } }) => (
  <InputGroup error={touched && error ? true : false}>
    <Input 
      placeholder={placeholder} 
      autoCapitalize='none'
      onChangeText={onChange}
      {...restInput}
      secureTextEntry={secureTextEntry}
      />
    { touched && error && <Icon name='ios-close-circle' style={{color:'red'}}/> } 
  </InputGroup>
)

const onSubmit = ({ username='', email='', password='' }, requestSignup) => {
  let errors = {};
  let isError = false;

  if (username.trim() === '') {
    errors.username = 'required';
    isError = true;
  }

  if (email.trim() === '') {
    errors.email = 'required';
    isError = true;
  }

  if (password.trim() === '') {
    errors.password = 'required';
    isError = true;
  }

  if (isError) {
    throw new SubmissionError(errors);
  } else {
    requestSignup({ username, password, email });
  }
}

const signup = ({ handleSubmit, requestSignup }) => (
  <Container>
    <Content>
      <Form style={{ marginTop: 20 }}>
        <Item>
            <Field
              name='username'
              placeholder='Username'
              component={renderField} />
        </Item>
        <Item>
            <Field
              name='email'
              placeholder='Email'
              component={renderField} />
        </Item>
        <Item last>
            <Field
              name='password'
              placeholder='Password'
              component={renderField}
              secureTextEntry />
        </Item>
        <Button 
          style={{ marginTop: 50, marginRight: 10, marginLeft: 10 }} 
          onPress={handleSubmit((field) => onSubmit(field, requestSignup))}
          block>
            <Text>Sign up</Text>
        </Button>
      </Form>
    </Content>
  </Container>
);

export default reduxForm({
  form: 'signup',
})(signup);
