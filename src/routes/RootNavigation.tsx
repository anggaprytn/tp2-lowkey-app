import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from './_types';
import { fadeTransition } from './transitions';

//Authenticated Stack
import Home from '@/screens/Home';
import Map from '@/screens/Map';
import Form from '@/screens/Form';

//Bottom Tabs
import BottomTabs from './BottomTabs';

const Stack = createStackNavigator<RootStackParamList>();

const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabs'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{
          ...fadeTransition,
        }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          ...fadeTransition,
        }}
      />
      <Stack.Screen
        name="Form"
        component={Form}
        options={{
          ...fadeTransition,
        }}
      />
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          ...fadeTransition,
        }}
      />
    </Stack.Navigator>
  );
};

const RootNavigator = () => {
  return <AuthenticatedStack />;
};

export default RootNavigator;
