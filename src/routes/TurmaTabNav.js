<<<<<<< HEAD
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from "react-navigation-tabs";
// import React from "react";
// import { Text } from "react-native";

// import HomeTurma from "../pages/HomeTurma";
// import ParticipantesTurma from "../pages/ParticipantesTurma";
// import ListaExerciciosTurma from "../pages/ListaExerciciosTurma";

// import { Icon } from "react-native-ui-kitten";

// export const HomeIcon = style => <Icon name="home" {...style} />;
// export const PeopleIcon = style => <Icon name="people" {...style} />;

// const TurmaTabNav = createBottomTabNavigator(
//   {
//     Home: {
//       screen: HomeTurma
//     },
//     Participantes: {
//       screen: ParticipantesTurma
//     },
//     Exercicios: {
//       screen: ListaExerciciosTurma
//     }
//   },
//   {
//     defaultNavigationOptions: {
//       header: <Text>Turma 1</Text>
//     }
//   }
// );

// export default createAppContainer(TurmaTabNav);

import React from "react";
import { createAppContainer, SafeAreaView } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon
} from "react-native-ui-kitten";
import { StyleSheet } from "react-native";
import { colors } from "../styles/mainStyles";
=======
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Text } from "react-native";
>>>>>>> desenvolvimento

import HomeTurma from "../pages/HomeTurma";
import ParticipantesTurma from "../pages/ParticipantesTurma";
import ListaExerciciosTurma from "../pages/ListaExerciciosTurma";

<<<<<<< HEAD
export const HomeIcon = style => (
  <Icon name="home" style={styles.icon} {...style} />
);
export const PeopleIcon = style => <Icon name="people" {...style} />;
export const BookIcon = style => <Icon name="book" {...style} />;

// React Navigation also requires installing additional dependencies:
//
// npm i react-navigation react-navigation-tabs react-native-reanimated react-native-gesture-handler
//
// Then install it for ios:
//
// cd ios && pod install

const TabBarComponent = ({ navigation }) => {
  //let color = !isSelected ? colors.sec2 : colors.prim1;
  const onSelect = index => {
    const selectedTabRoute = navigation.state.routes[index];
    navigation.navigate(selectedTabRoute.routeName);
  };

  return (
    <SafeAreaView>
      <BottomNavigation
        selectedIndex={navigation.state.index}
        onSelect={onSelect}
        indicatorStyle={styles.indicator}
        style={styles.bottomNavigation}
      >
        <BottomNavigationTab title="Home" icon={HomeIcon} />
        <BottomNavigationTab title="Participantes" icon={PeopleIcon} />
        <BottomNavigationTab title="Exercícios" icon={BookIcon} />
      </BottomNavigation>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bottomNavigation: { backgroundColor: "white" },
  indicator: { backgroundColor: colors.prim1 },
  icon: { color: colors.err1 }
});

const TabNavigator = createBottomTabNavigator(
=======
import { Icon } from "react-native-ui-kitten";

export const HomeIcon = style => <Icon name="home" {...style} />;
export const PeopleIcon = style => <Icon name="people" {...style} />;

const TurmaTabNav = createBottomTabNavigator(
>>>>>>> desenvolvimento
  {
    Home: {
      screen: HomeTurma
    },
    Participantes: {
      screen: ParticipantesTurma
    },
    Exercicios: {
      screen: ListaExerciciosTurma
    }
  },
  {
<<<<<<< HEAD
    tabBarComponent: TabBarComponent
  }
);

export default createAppContainer(TabNavigator);
// export const TurmaTabNav = createAppContainer(TabNavigator);
=======
    defaultNavigationOptions: {
      header: <Text>Turma 1</Text>
    }
  }
);

export default createAppContainer(TurmaTabNav);
>>>>>>> desenvolvimento
