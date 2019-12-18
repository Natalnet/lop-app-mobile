import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TurmaTabNav from "./TurmaTabNav";

const TurmaNav = createAppContainer(
  createStackNavigator(
    {
      TurmaTabNav: {
        screen: TurmaTabNav
      }
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default TurmaNav;
