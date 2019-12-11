import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Ide from "../pages/Ide";
import SelecaoLinguagem from "../pages/SelecaoLinguagem";

const IdeNav = createAppContainer(
  createStackNavigator(
    {
      SelecaoLinguagem,
      Ide
    },
    {
      defaultNavigationOptions: {
        header: null
      }
    }
  )
);

export default IdeNav;
