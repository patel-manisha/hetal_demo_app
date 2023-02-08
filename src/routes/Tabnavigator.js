import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screen/Home';
import Browse from '../screen/Browse';
import Library from '../screen/Library';
import StatusBar from '../screen/Statusbardemo.js';

const Tab = createBottomTabNavigator();

const Tabnavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Statusbardemo" component={StatusBar} />

    </Tab.Navigator>
  );
};

export default Tabnavigator;