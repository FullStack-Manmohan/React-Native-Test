import React, {useState, useMemo, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../Screens/SignIn";


const Stack = createNativeStackNavigator();

const DashboardStack = (props) => {
  return (
      <Stack.Navigator
          screenOptions={{
              headerShown: false
          }}
      >
          {/*<Stack.Screen name="Splash" component={SplashScreen} />*/}
          <Stack.Screen name="SignIn" component={SignInScreen} />

      </Stack.Navigator>
  );
}

const AppNavigator = (props) => {


  return (
      <NavigationContainer>
          <DashboardStack/>
      </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  drawerStyle: {
    width: '70%',
    elevation: 30,
    shadowOpacity: 5,
    borderBottomWidth: 1,
  },
});
export default AppNavigator;
