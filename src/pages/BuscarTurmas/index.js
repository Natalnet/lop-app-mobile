import React, { Component } from "react";
import { Text, View } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, styles, InputBox, LoadingContainer } from "./styles";

import { Button, Icon, List, ListItem, Spinner } from "react-native-ui-kitten";

import { colors } from "../../styles/mainStyles";

// import turmas from "../../dataTemp/turmas";

import api from "../../services/api";

export default class BuscarTurmas extends Component {
  state = {
    search: "",
    turmas: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const { navigation } = this.props;
    const token = navigation.getParam("token");

    var auth = {
      headers: { Authorization: "bearer " + token }
    };
    const response = await api.get("/user/class/page/1", auth);
    this.setState({ turmas: response.data.docs, loading: false });
  }
  renderBtn = style => {
    const { navigation } = this.props;
    return (
      <Button onPress={() => navigation.navigate("Turma")} style={style}>
        Ver Turma
      </Button>
    );
  };

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
      title={`${item.name}`}
      description={`${item.code} - ${item.state}`}
      accessory={this.renderBtn}
    />
  );

  render() {
    const { search, turmas, loading } = this.state;

    return (
      <Container>
        <InputBox
          icon={this.renderIcon}
          size="small"
          placeholder="Pesquisar Turma"
          value={search}
          onChangeText={this.onChangeSearchText}
        />
        {loading ? (
          <LoadingContainer>
            <Spinner status='primary' />
          </LoadingContainer>
        ) : (
          <List
            style={styles.list}
            data={turmas}
            renderItem={this.renderTurma}
          />
        )}
      </Container>
    );
  }
}
