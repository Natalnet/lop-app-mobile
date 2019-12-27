import React, { Component } from "react";
import { Text, View, FlatList } from "react-native";
import VecIcon from "react-native-vector-icons/MaterialIcons";
import { colors } from "../../styles/mainStyles";

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
  ContainerHeader,
  ViewProfessor,
  TextProfessor,
  ViewGroupDetails,
  ViewDetail,
  TextNumberDetail
} from "./styles";

import { Icon, Spinner } from "react-native-ui-kitten";

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
    const response = await api.get("/class?myClasses=yes", auth);
    this.setState({ turmas: response.data, loading: false });
  }
  handleClassPress = (id, name, year, semester) => {
    const { navigation } = this.props;
    navigation.navigate("Turma", {
      classId: id,
      className: `${name} - ${year}.${semester}`
    });
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
                    <ViewProfessor>
                      <TextProfessor> {item.author.name}</TextProfessor>
                      <TextProfessor> {item.author.email}</TextProfessor>
                    </ViewProfessor>
                  </View>
                  <BtnClass
                    onPress={() =>
                      this.handleClassPress(
                        item.id,
                        item.name,
                        item.year,
                        item.semester
                      )
                    }
                  >
                    <TextBtnClass>Entrar</TextBtnClass>
                  </BtnClass>
                </ContainerHeader>
                <TextDescriptionClass>
                  {this.descriptionReduce(item.description)}
                </TextDescriptionClass>
                <ViewGroupDetails>
                  <ViewDetail>
                    <VecIcon name='person' size={20} color={colors.prim3} />
                    <TextNumberDetail>{item.usersCount}</TextNumberDetail>
                  </ViewDetail>
                  <ViewDetail>
                    <VecIcon
                      name='description'
                      size={20}
                      color={colors.prim3}
                    />
                    <TextNumberDetail>{item.listsCount}</TextNumberDetail>
                  </ViewDetail>
                  <ViewDetail>
                    <VecIcon name='assignment' size={20} color={colors.prim3} />
                    <TextNumberDetail>{item.testsCount}</TextNumberDetail>
                  </ViewDetail>
                  <ViewDetail>
                    <VecIcon name='group-add' size={20} color={colors.prim3} />
                    <TextNumberDetail>
                      {item.solicitationsCount}
                    </TextNumberDetail>
                  </ViewDetail>
                </ViewGroupDetails>
              </ViewClass>
            )}
          />
        )}
      </Container>
    );
  }
}
