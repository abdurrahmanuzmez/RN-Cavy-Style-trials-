import React from "react";
import {View, Text, StyleSheet} from "react-native";
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {LoadingScreen} from './src/screens/LoadingScreen'
import {LoginScreen} from './src/screens/LoginScreen'
import {DashboardScreen} from './src/screens/DashboardScreen'

export class App extends React.Component  {
  render() {
    return <AppNavigator />;
  }

}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
