import { createStackNavigator } from '@react-navigation/stack';
import StudentLandingScreen from '../screens/StudentLandingScreen'; 


const Stack = createStackNavigator();

// https://reactnavigation.org/docs/stack-navigator/

export function Stack1() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
	  name="StudentLanding" 
	  component={StudentLandingScreen}/>
      
    </Stack.Navigator>
  );
}