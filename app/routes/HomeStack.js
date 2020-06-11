import React, { Component } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { ThemeProvider } from "@react-navigation/native";
const { default: MainScreen } = require("../screens/MainScreen");
const { default: ArticleScreen } = require("../screens/ArticleScreen");

export default class HomeStack extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Article" component={ArticleScreen} />
      </Stack.Navigator>
    );
  }
}
