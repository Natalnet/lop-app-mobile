import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Alert } from 'react-native';

import IconsMd from 'react-native-vector-icons/MaterialIcons';
import { ButtonExit } from './styles';

import SignIn from '../pages/SignIn';
import ExercisesScreen from '../pages/ExercisesScreen';
import SolveProblem from '../pages/SolveProblem';

import { useAuth } from '../hooks/Auth';

import colors from '../styles/colors';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();
  const { name, profile, signOut } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {profile !== 'ALUNO' ? (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="ExercisesScreen"
              component={ExercisesScreen}
              options={{
                headerTitle: name,
                headerTitleAlign: 'center',
                headerStyle: { backgroundColor: colors.prim1 },
                headerTintColor: colors.sec1,

                headerLeft: () => (
                  <ButtonExit
                    onPress={() =>
                      Alert.alert(
                        'Sair',
                        'Você realmente gostaria de deslogar da plataforma LOP ? ',
                        [
                          {
                            text: 'Não',
                            style: 'cancel',
                          },
                          {
                            text: 'Sim',
                            onPress: () => signOut(),
                          },
                        ],
                        { cancelable: true },
                      )
                    }
                  >
                    <IconsMd
                      name="exit-to-app"
                      size={32}
                      color={colors.danger1}
                    />
                  </ButtonExit>
                ),
              }}
            />
            <Stack.Screen
              name="SolveProblem"
              component={SolveProblem}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
