import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import NewPostScreen from './screens/NewPostScreen';

const Stack = createStackNavigator()

const screenOptions = {
  headerShown: false
}

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='LoginScreen'
      screenOptions={screenOptions}
    >
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default SignedInStack