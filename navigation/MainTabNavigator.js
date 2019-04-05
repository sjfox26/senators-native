import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import WelcomeScreen from '../screens/WelcomeScreen';
import AuthScreen from '../screens/AuthScreen';
import SignUpScreen from '../screens/SignUpScreen';
import SenatorsListScreen from '../screens/SenatorsListScreen';
import SenatorDetailScreen from "../screens/SenatorDetailScreen";


////////////////////////////////////// WELCOME //////////////////////////////////////////////

const WelcomeStack = createStackNavigator({
  Welcome: WelcomeScreen,
});

WelcomeStack.navigationOptions = {
  tabBarLabel: 'Welcome',
  tabBarIcon: ({ focused }) => (
	<TabBarIcon
	  focused={focused}
	  name={
		Platform.OS === 'ios'
		  ? `ios-information-circle${focused ? '' : '-outline'}`
		  : 'md-information-circle'
	  }
	/>
  ),
  tabBarVisible: false,
};


//////////////////////////////////////// AUTH ////////////////////////////////////////////////

const AuthStack = createStackNavigator({
  Auth: AuthScreen,
	SignUp: SignUpScreen
});

AuthStack.navigationOptions = {
  tabBarLabel: 'Auth',
  tabBarIcon: ({ focused }) => (
	<TabBarIcon
	  focused={focused}
	  name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
	/>
  ),
  tabBarVisible: false,
};


/////////////////////////////////////// SENATORS ///////////////////////////////////////////////


const SenatorsStack = createStackNavigator(
  {
    Senators: SenatorsListScreen,
    SenatorDetailScreen: SenatorDetailScreen
  },
  {
    initialRouteName: 'Senators',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#777777',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

SenatorsStack.navigationOptions = {
  tabBarLabel: 'Senators',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  ),
  tabBarVisible: false,
};



export default createBottomTabNavigator({
	WelcomeStack,
	AuthStack,
	SenatorsStack
});


