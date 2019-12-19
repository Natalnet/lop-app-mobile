import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import TurmaTabNav from "./TurmaTabNav";

const TurmaNav = createAppContainer(
  createStackNavigator(
    {
<<<<<<< HEAD
      TurmaTabNav: TurmaTabNav
=======
      TurmaTabNav: {
        screen: TurmaTabNav
      }
>>>>>>> desenvolvimento
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default TurmaNav;
