import React, { useState } from 'react';

import { Container, Header, Logo, Form, Label } from './styles';
import InputWithIcon from '../../components/InputWithIcon';
import logo from '../../assets/logo.png';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errEmail, setErrEmail] = useState('');
  const [errPassword, setErrPassword] = useState('');
  return (
    <Container>
      <Header>
        <Logo source={logo} />
      </Header>
      <Form>
        <Label>Faça login na sua conta</Label>
        <InputWithIcon
          iconName="mail"
          label="Digite o seu email"
          errMsg={errEmail}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCompleteType="email"
          autoCorrect={false}
        />
        <InputWithIcon
          iconName="lock"
          label="Digite o seu email"
          errMsg={errPassword}
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
      </Form>
    </Container>
  );
};

export default SignIn;
