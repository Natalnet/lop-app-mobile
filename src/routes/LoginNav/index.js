import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  Container,
  IconNameView,
  FotoView,
  NameText,
  MenuBtn,
  BackBtn
} from "./styles";

import { colors } from "../../styles/mainStyles";

import Intro from "../../pages/Intro";
import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";
import DrawerNav from "../DrawerNav";
import IdeNav from "../IdeNav";
import TurmaTabNav from "../TurmaTabNav";
import ListQuestions from "../../pages/ListQuestions";

const headerLists = (navigation, title, iconName) => (
  <Container>
    <IconNameView>
      <BackBtn onPress={() => navigation.goBack()}>
        <Icon name='arrow-back' color={colors.sec1} size={24} />
      </BackBtn>
      <Icon name={iconName} size={24} color={colors.sec1} />
      <NameText>{title.length > 30 ? `${title}...` : title}</NameText>
    </IconNameView>
  </Container>
);

const LoginNav = createAppContainer(
  createStackNavigator(
    {
      Intro,
      Login,
      Cadastro,
      Ide: {
        screen: IdeNav,
        navigationOptions: ({ navigation }) => {
          const name = navigation.getParam("questionName");

          // return { title: name.length > 30 ? `${name}...` : name };
          return {
            header: headerLists(navigation, name, "code")
          };
        }
      },
      Turma: {
        screen: TurmaTabNav,
        navigationOptions: ({ navigation }) => {
          const name = navigation.getParam("className");

          // return { title: name.length > 30 ? `${name}...` : name };
          return {
            header: headerLists(navigation, name, "class")
          };
        }
      },
      Questoes: {
        screen: ListQuestions,
        navigationOptions: ({ navigation }) => {
          const name = navigation.getParam("listName");

          // return { title: name.length > 30 ? `${name}...` : name };
          return {
            header: headerLists(navigation, name, "description")
          };
        }
      },
      Home: {
        screen: DrawerNav,
        navigationOptions: ({ navigation }) => ({
          header: (
            <Container>
              <IconNameView>
                <FotoView />
                <NameText>{navigation.getParam("user").name}</NameText>
              </IconNameView>
              <MenuBtn onPress={() => navigation.toggleDrawer()}>
                <Icon name='menu' color={colors.sec1} size={32} />
              </MenuBtn>
            </Container>
          )
        })
        // navigationOptions: ({ navigation }) => ({
        //   title: navigation.getParam('name'),
        // }),
      }
    },

    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.prim1
        },
        headerTintColor: colors.sec1
      }
    }
  )
);

export default LoginNav;
