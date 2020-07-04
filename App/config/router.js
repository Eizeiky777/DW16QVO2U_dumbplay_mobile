import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Transaction from '../Screens/TransactionUser';
import Discover from '../Screens/Discover';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        inactiveTintColor: 'gray',
        activeTintColor: '#EE4622',
        showLabel: false,
        tabStyle: {
          backgroundColor: '#3A3A3A',
          height: 60,
          paddingBottom: 12,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transaction"
        component={Transaction}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'wallet' : 'wallet-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      {/* 
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'account' : 'account-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}

export default Tabs;
