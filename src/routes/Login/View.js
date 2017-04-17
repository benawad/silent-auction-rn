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

const onSubmit = ({ email='', password='' }, requestLogin) => {
  let errors = {};
  let isError = false;

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
    requestLogin({ password, email });
  }
}

const login = ({ handleSubmit, requestLogin }) => (
  <Container>
    <Content>
      <Form style={{ marginTop: 20 }}>
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
          onPress={handleSubmit((field) => onSubmit(field, requestLogin))}
          block>
            <Text>Login</Text>
        </Button>
      </Form>
    </Content>
  </Container>
);

export default reduxForm({
  form: 'login',
})(login);
