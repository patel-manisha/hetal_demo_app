/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigator from './routes/Rootnavigator';
//import { AuthLoading } from './screen/AuthLoading';
//import { SignedInStack } from './routes/signinSTack';



const Stack = createNativeStackNavigator();



/* const App = () => {
  return (
    <NavigationContainer>
 
      <Stack.Navigator>
      <Stack.Screen name="Lunch" component={AuthLoading} />
      <Stack.Screen name="SignedInStack" component={SignedInStack} />
      <Stack.Screen name="SignedOutStack" component={SignedOuttack} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}; */
const App = () => {
  return (
    <>
      <StatusBar hidden />
      <RootNavigator />
    </>
  );
};

export default App; 