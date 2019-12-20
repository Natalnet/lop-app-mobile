import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, FotoNameView, FotoView, NameText, MenuBtn } from "./styles";

import { colors } from "../../styles/mainStyles";

import Intro from "../../pages/Intro";
import Login from "../../pages/Login";
import Cadastro from "../../pages/Cadastro";
import DrawerNav from "../DrawerNav";
import IdeNav from "../IdeNav";
import TurmaTabNav from "../TurmaTabNav";
import ListQuestions from "../../pages/ListQuestions";

const LoginNav = createAppContainer(
  createStackNavigator(
    {
      Intro,
      Login,
      Cadastro,
      Ide: {
        screen: IdeNav
      },
      Turma: {
        screen: TurmaTabNav
      },
      ListQuestions,
      Home: {
        screen: DrawerNav,
        navigationOptions: ({ navigation }) => ({
          header: (
            <Container>
              <FotoNameView>
                <FotoView />
                <NameText>{navigation.getParam("user").name}</NameText>
              </FotoNameView>
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
