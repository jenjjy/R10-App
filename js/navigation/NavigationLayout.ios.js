import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import AboutScreen from '../screens/About';
import MapScreen from '../screens/Maps';
import FavesScreen from '../screens/Faves';
import ScheduleScreen from '../screens/Schedule';
import SessionScreen from '../screens/Session';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { sharedNavigationOptions } from './config';

const ScheduleStack = createStackNavigator(
  {
    Schedule: ScheduleScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const MapStack = createStackNavigator(
  {
    Map: MapScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const FavesStack = createStackNavigator(
  {
    Faves: FavesScreen,
    Session: SessionScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);
const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  }
);

// Dedicated stacks for Schedule and Faves will go here too!
export default createBottomTabNavigator(
  {
    Schedule: ScheduleStack,
    Map: MapStack,
    Faves: FavesStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Schedule') {
          iconName = `ios-calendar`;
        } else if (routeName === 'Map') {
          iconName = `ios-map`;
        } else if (routeName === 'Faves') {
          iconName = `ios-heart`;
        } else if (routeName === 'About') {
          iconName = `ios-information-circle`;
        }
        return <Ionicons name={iconName} size={30} color={tintColor} />;
      }
    }),

    tabBarOptions: {
      activeTintColor: '#fff',
      inactiveTintColor: '#999',
      labelStyle: {
        fontSize: 11,
        fontFamily: 'Montserrat',
        lineHeight: 0
      },
      style: {
        backgroundColor: '#000',
        height: 55,
        paddingTop: 8
      }
    }
  }
);
