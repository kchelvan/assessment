import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import MovieListScreen from '../screens/MovieListScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import Colors from '../constants/Colors';

const AppStackNavigator = createStackNavigator();

const HeaderMenuButton = () => (
  <TouchableOpacity activeOpacity={0.5} style={{marginRight: 20}}>
    <Entypo name="dots-three-vertical" size={14} color={Colors.Primary.white} />
  </TouchableOpacity>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <AppStackNavigator.Navigator
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <AppStackNavigator.Screen
          name="MovieListScreen"
          component={MovieListScreen}
          options={{
            ...headerStyles,
            title: 'Pop Movies',
            headerRight: HeaderMenuButton,
          }}
        />
        <AppStackNavigator.Screen
          name="MovieDetailScreen"
          component={MovieDetailScreen}
          options={{
            ...headerStyles,
            title: 'Movie details',
            headerRight: HeaderMenuButton,
            headerBackTitle: '',
          }}
        />
      </AppStackNavigator.Navigator>
    </NavigationContainer>
  );
};

const headerStyles = {
  headerStyle: {
    backgroundColor: Colors.Primary.background,
  },
  headerTitleStyle: {
    color: Colors.Primary.white,
  },
  headerTintColor: Colors.Primary.white,
};

export default AppNavigator;
