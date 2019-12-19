import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import Home from "../pages/Home";
import BuscarTurmas from "../pages/BuscarTurmas";
import IdeNav from "./IdeNav";

const DrawerNav = createAppContainer(
  createDrawerNavigator({
    Home,
    BuscarTurmas
  })
);

export default DrawerNav;
