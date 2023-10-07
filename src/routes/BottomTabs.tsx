import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '@/screens/Home';
import Map from '@/screens/Map';
import Form from '@/screens/Form';
import IconFeather from 'react-native-vector-icons/Feather';
import { Text } from '@/components';

const Tab = createBottomTabNavigator();

const TabBarIcon = ({ color, name, label }) => (
  <>
    <IconFeather name={name} color={color} size={24} />
    <Text type="medium" size={15} style={{ color }}>
      {label}
    </Text>
  </>
);

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="home" label="Home" />
          ),
        }}
      />
      <Tab.Screen
        name="Form"
        component={Form}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="file-text" label="Form" />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarShowLabel: false,
          headerShown: false,
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ color }) => (
            <TabBarIcon color={color} name="map" label="Map" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
