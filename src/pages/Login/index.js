import React, { Component } from "react";

import { Icon } from "react-native-ui-kitten";

import { Container, InputBox, Btn, styles } from "./styles";

export const EntrarIcon = style => <Icon name='person-done' {...style} />;
export const EyeOffIcon = style => <Icon name='eye-off' {...style} />;

import api from "../../services/api";

import AsyncStorage from "@react-native-community/async-storage";

export default class Login extends Component {
  state = {
    esqueceuSenha: false,
    email: "aluno1@gmail.com",
    senha: "123456"
  };

  static navigationOptions = {
    title: "Entrar com uma conta"
  };

  onChangeEmailText = email => {
    this.setState({ email });
  };
  onChangeSenhaText = senha => {
    this.setState({ senha });
  };

  handleEntrar = async () => {
    const { navigation } = this.props;
    const { email, senha } = this.state;

    const response = await api.post("/auth/authenticate", {
      email,
      password: senha
    });
    if (response.data.user) {
      const { user, token } = response.data;

      try {
        await AsyncStorage.setItem("@token", token);
        await AsyncStorage.setItem("@user_name", user.name);
      } catch (e) {
        // saving error
      }
      navigation.navigate("Home", { user, token });
    }
  };

  isValidValue = () => {
    return true;
  };

  render() {
    const { email, senha } = this.state;
    const isValidInputValue = this.isValidValue();
    return (
      <Container>
        <InputBox
          label='Email'
          size='small'
          status={isValidInputValue ? "primary" : "danger"}
          caption={isValidInputValue ? "" : "Invalid value"}
          value={email}
          onChangeText={this.onChangeEmailText}
        />
        <InputBox
          label='Senha'
          size='small'
          icon={EyeOffIcon}
          status={isValidInputValue ? "primary" : "danger"}
          caption={isValidInputValue ? "" : "Invalid value"}
          value={senha}
          onChangeText={this.onChangeSenhaText}
          secureTextEntry={true}
        />
        <Btn
          icon={EntrarIcon}
          onPress={this.handleEntrar}
          textStyle={styles.BtnText}
        >
          Entrar
        </Btn>
      </Container>
    );
  }
}
