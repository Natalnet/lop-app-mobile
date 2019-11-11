import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { colors } from '../styles/mainStyles';

import Intro from '../pages/Intro';
import Login from '../pages/Login';
import DrawerNav from './DrawerNav';

const LoginNav = createAppContainer(
  createStackNavigator(
    {
      Intro,
      Login,
      Home: {
        screen: DrawerNav,
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
