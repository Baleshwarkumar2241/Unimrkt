import {View, Text} from 'react-native';
import React from 'react';
import LoginScreen1 from './Screens/LoginScreen1';
import LoginScreen2 from './Screens/LoginScreen2';
import Home from './Screens/Home';
import SubmitScreen from './Screens/SubmitScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          component={LoginScreen1}
          name="login1"
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          component={LoginScreen2}
          name="login2"
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          component={Home}
          name="home"
          options={{headerShown: false, animation: 'fade'}}
        />
        <Stack.Screen
          component={SubmitScreen}
          name="Submit"
          options={{headerShown: false, animation: 'fade'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
