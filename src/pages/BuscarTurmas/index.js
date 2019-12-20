import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
// import Icon from "react-native-vector-icons/MaterialIcons";

<<<<<<< HEAD
import { Container, styles, InputBox, LoadingContainer } from "./styles";

import { Button, Icon, List, ListItem, Spinner } from "react-native-ui-kitten";
=======
import {
  Container,
  InputBox,
  LoadingContainer,
  ViewClass,
  TextClassCodeText,
  TextClassTitle,
  TextDescriptionClass,
  BtnClass,
  TextBtnClass,
  ContainerHeader
} from "./styles";

import { Button, Icon, Spinner } from "react-native-ui-kitten";
>>>>>>> desenvolvimento

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
  handleClassPress = id => {
    const { navigation } = this.props;
    navigation.navigate("Turma", { classId: id });
  };

  onChangeSearchText = search => {
    this.setState({ search });
  };

  renderIcon = style => {
    const iconName = "search";
    return <Icon {...style} name={iconName} />;
  };
  onIconPress = () => {};

  descriptionReduce = description => {
    if (description.length > 100) {
      return `${description.slice(0, 100)}...`;
    }
    return description;
  };

  render() {
    const { search, turmas, loading } = this.state;

    return (
      <Container>
        <InputBox
          icon={this.renderIcon}
          size='small'
          placeholder='Pesquisar Turma'
          value={search}
          onChangeText={this.onChangeSearchText}
        />
        {loading ? (
          <LoadingContainer>
            <Spinner status='primary' />
          </LoadingContainer>
        ) : (
          <FlatList
            data={turmas}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <ViewClass>
                <ContainerHeader>
                  <View>
                    <TextClassCodeText>{item.code}</TextClassCodeText>
                    <TextClassTitle>
                      {item.name} - {item.year}.{item.semester}
                    </TextClassTitle>
                  </View>
                  <BtnClass onPress={() => this.handleClassPress(item.id)}>
                    <TextBtnClass>Entrar</TextBtnClass>
                  </BtnClass>
                </ContainerHeader>
                <TextDescriptionClass>
                  {this.descriptionReduce(item.description)}
                </TextDescriptionClass>
              </ViewClass>
            )}
          />
        )}
      </Container>
    );
  }
}
