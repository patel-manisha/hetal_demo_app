import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import GridFlatListDemo from '../screen/GridFlatDemo';
import ProfileScreenDemo from '../screen/ProfileScreenDemo';

const Tab = createBottomTabNavigator();

export const MyTabStack=()=>{
    return (
        <Tab.Navigator>
          <Tab.Screen name="gridFlatListScreen" component={GridFlatListDemo} />
          <Tab.Screen name="profilescreen" component={ProfileScreenDemo} />
        </Tab.Navigator>
      );
}


 
