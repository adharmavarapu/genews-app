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
        <Stack.Screen
          name="Home"
          component={MainScreen}
          initialParams={{
            totalArticles: this.props.route.params.totalArticles,
            filter: this.props.route.params.filter,
          }}
        />
        <Stack.Screen
          name="Article"
          options={{ headerShown: true }}
          component={ArticleScreen}
        />
      </Stack.Navigator>
    );
  }
}
