import React, { Component } from "react";

import { Icon } from "react-native-ui-kitten";

import { Container, InputBox, Btn, styles } from "./styles";

export const EntrarIcon = style => <Icon name="person-done" {...style} />;
export const EyeOffIcon = style => <Icon name="eye-off" {...style} />;

export default class Login extends Component {
  state = {
    esqueceuSenha: false,
    email: "",
    senha: ""
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

  handleEntrar = () => {
    const { navigation } = this.props;
    navigation.navigate("Home", { name: "Fulano da Silva Sauro" });
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
          label="Email"
          size="small"
          status={isValidInputValue ? "primary" : "danger"}
          caption={isValidInputValue ? "" : "Invalid value"}
          value={email}
          onChangeText={this.onChangeEmailText}
        />
        <InputBox
          label="Senha"
          size="small"
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
