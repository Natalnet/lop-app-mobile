import React, { Component } from "react";
import { Text, View } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, styles, InputBox } from "./styles";

import { Button, Icon, List, ListItem } from "react-native-ui-kitten";

import { colors } from "../../styles/mainStyles";

import turmas from "../../dataTemp/turmas";

export default class BuscarTurmas extends Component {
  state = {
    search: ""
  };

  renderBtn = style => <Button style={style}>Ver Turma</Button>;

  onChangeSearchText = search => {
    this.setState({ search });
  };

  renderIcon = style => {
    const iconName = "search";
    return <Icon {...style} name={iconName} />;
  };
  onIconPress = () => {};

  renderTurma = ({ item }) => (
    <ListItem
      title={`${item.nome}`}
      description={`${item.criada}`}
      accessory={this.renderBtn}
    />
  );

  render() {
    const { search } = this.state;
    return (
      <Container>
        <InputBox
          icon={this.renderIcon}
          size='small'
          placeholder='Pesquisar Turma'
          value={search}
          onChangeText={this.onChangeSearchText}
        />
        <List style={styles.list} data={turmas} renderItem={this.renderTurma} />
      </Container>
    );
  }
}
