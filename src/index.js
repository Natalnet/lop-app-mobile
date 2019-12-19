import React from "react";
import "./config/ReactotronConfig";
import { StatusBar } from "react-native";
import LoginNav from "./routes/LoginNav";
import { colors } from "./styles/mainStyles";

import { mapping, light as lightTheme } from "@eva-design/eva";
import {
  ApplicationProvider,
  Layout,
  Text,
  IconRegistry
} from "react-native-ui-kitten";

import { EvaIconsPack } from "@ui-kitten/eva-icons";

const App: () => React$Node = () => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
      <StatusBar backgroundColor={colors.prim1} />
      <LoginNav />
    </ApplicationProvider>
  </React.Fragment>
);

export default App;
