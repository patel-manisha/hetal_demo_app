

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Loginpage from '../screen/login';
import SignupScreen from '../screen/signup';
const AuthStack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();


const TransitionScreenOptions = {
    //...TransitionPresets.SlideFromRightIOS, // This is where the transition happens
    headerShown: false,
  };
  
  
  // signout stack
  export const SignedOutStack = props => {
    return (
      <AuthStack.Navigator screenOptions={TransitionScreenOptions}>
         <Stack.Screen name="Login" component={Loginpage} />
        <Stack.Screen name="Signup" component={SignupScreen} />
      </AuthStack.Navigator>
    );
  };
  