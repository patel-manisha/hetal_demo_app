import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Tabnavigator from './Tabnavigator';

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
      <NavigationContainer>
  <Tabnavigator/>
      </NavigationContainer>
    );
  };
export default RootNavigator;