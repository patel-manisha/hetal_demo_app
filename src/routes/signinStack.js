import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DesignDemo from '../screen/designDemo';
import VerticalFlatListDemo from '../screen/verticalFlatListDemo';
import { MyTabStack } from './tabStack';

const LoggedInStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const TransitionScreenOptions = {
    //...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: false,
  };
  
// signin stack
export const SignedInStack = props => {
    return (
      <LoggedInStack.Navigator
        initialRouteName={'TabStack'}
        screenOptions={TransitionScreenOptions}>
         <Stack.Screen name="TabStack" component={MyTabStack} />
        {/* <Stack.Screen name="DrawerStack" component={DrawerStack} /> */}
        <Stack.Screen name="verticalFlatListScreen"component={VerticalFlatListDemo}/>
        <Stack.Screen name="designDemo" component={DesignDemo} />
    
      </LoggedInStack.Navigator>
    );
  };

 
