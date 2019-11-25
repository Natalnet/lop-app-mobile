import React, { Component } from "react";

import {
  Container,
  Header,
  Logo,
  LogoLopText,
  LogoVersionText,
  Footer,
  ButtonsView,
  Btn,
  BtnText,
  styles
} from "./styles";

import { Button, Icon } from "react-native-ui-kitten";

export const CadastroIcon = style => <Icon name="person-add" {...style} />;
export const EntrarIcon = style => <Icon name="person-done" {...style} />;

export default class Intro extends Component {
  static navigationOptions = {
    header: null
  };

  handleLogin = () => {
    const { navigation } = this.props;
    navigation.navigate("Login");
  };

  handleCadastro = () => {
    const { navigation } = this.props;
    navigation.navigate("Cadastro");
  };

  render() {
    return (
      <Container>
        <Header>
          <Logo>
            <LogoLopText>LOP</LogoLopText>
            <LogoVersionText>alpha</LogoVersionText>
          </Logo>
        </Header>
        <Footer>
          <ButtonsView>
            <Btn
              icon={CadastroIcon}
              onPress={this.handleCadastro}
              textStyle={styles.BtnText}
            >
              Cadastro
            </Btn>
            <Btn
              icon={EntrarIcon}
              onPress={this.handleLogin}
              textStyle={styles.BtnText}
            >
              Entrar
            </Btn>
          </ButtonsView>
        </Footer>
      </Container>
    );
  }
}
