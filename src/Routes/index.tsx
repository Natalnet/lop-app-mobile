import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import IconsMd from 'react-native-vector-icons/MaterialIcons';
import { ButtonExit } from './styles';

import SignIn from '../pages/SignIn';
import ExercisesScreen from '../pages/ExercisesScreen';

import { useAuth } from '../hooks/Auth';

import colors from '../styles/colors';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();
  const { name, signOut } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!name ? (
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="ExercisesScreen"
            component={ExercisesScreen}
            options={{
              headerTitle: name,
              headerTitleAlign: 'center',
              headerStyle: { backgroundColor: colors.prim1 },
              headerTintColor: colors.sec1,

              headerLeft: () => (
                <ButtonExit onPress={signOut}>
                  <IconsMd
                    name="exit-to-app"
                    size={32}
                    color={colors.danger1}
                  />
                </ButtonExit>
              ),
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
