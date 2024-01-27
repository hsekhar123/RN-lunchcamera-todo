import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../../screens/mainScreen/MainScreen';
import AddData from '../../screens/addData/AddData';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen name="Home" component={MainScreen} />
      <Stack.Screen name="AddData" component={AddData} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
