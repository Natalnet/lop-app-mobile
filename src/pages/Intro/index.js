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
  BtnText
} from "./styles";

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
            <Btn onPress={this.handleCadastro}>
              <BtnText>Cadastro</BtnText>
            </Btn>
            <Btn onPress={this.handleLogin}>
              <BtnText>Entrar</BtnText>
            </Btn>
          </ButtonsView>
        </Footer>
      </Container>
    );
  }
}
