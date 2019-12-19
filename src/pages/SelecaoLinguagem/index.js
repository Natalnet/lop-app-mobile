import React, { Component } from "react";

import { styles, Container, LanguageBtn, List, Info } from "./styles";

const linguagens = [
  { id: "00", title: "javascript" },
  { id: "01", title: "C++" }
];

export default class SelecaoLinguagem extends Component {
  handleSelectLanguage = language => {
    const { navigation } = this.props;
    navigation.navigate("Ide", { language });
  };

  renderItem = ({ item }) => (
    <LanguageBtn
      style={styles.button}
      status='info'
      onPress={() => this.handleSelectLanguage(item.title)}
    >
      {item.title}
    </LanguageBtn>
  );

  render() {
    return (
      <Container>
        <Info category='h6'>
          Selecione a linguagem para resolver este exercício
        </Info>
        <List
          data={linguagens}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </Container>
    );
  }
}
