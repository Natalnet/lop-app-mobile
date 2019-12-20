import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import { Text } from "react-native";

import HomeTurma from "../pages/HomeTurma";
import ParticipantesTurma from "../pages/ParticipantesTurma";
import ListaExerciciosTurma from "../pages/ListaExerciciosTurma";

import { Icon } from "react-native-ui-kitten";

export const HomeIcon = style => <Icon name='home' {...style} />;
export const PeopleIcon = style => <Icon name='people' {...style} />;

const TurmaTabNav = createBottomTabNavigator(
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
    defaultNavigationOptions: {
      header: <Text>Turma 1</Text>
    }
  }
);

export default createAppContainer(TurmaTabNav);
