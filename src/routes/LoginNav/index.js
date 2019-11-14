import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, FotoNameView, FotoView, NameText, MenuBtn } from './styles';

import { colors } from '../../styles/mainStyles';

import Intro from '../../pages/Intro';
import Login from '../../pages/Login';
import DrawerNav from '../DrawerNav';

const LoginNav = createAppContainer(
  createStackNavigator(
    {
      Intro,
      Login,
      Home: {
        screen: DrawerNav,
        navigationOptions: ({ navigation }) => ({
          header: (
            <Container>
              <FotoNameView>
                <FotoView />
                <NameText>{navigation.getParam('name')}</NameText>
              </FotoNameView>
              <MenuBtn onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" color={colors.sec1} size={32} />
              </MenuBtn>
            </Container>
          ),
        }),
        // navigationOptions: ({ navigation }) => ({
        //   title: navigation.getParam('name'),
        // }),
      },
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.prim1,
        },
        headerTintColor: colors.sec1,
      },
    }
  )
);

export default LoginNav;
