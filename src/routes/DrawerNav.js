import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from '../pages/Home';

const DrawerNav = createAppContainer(
  createDrawerNavigator({
    Home,
  })
);

export default DrawerNav;
