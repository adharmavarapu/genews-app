import React, { Component } from "react";

import { createStackNavigator } from "@react-navigation/stack";
import TopicsScreen from "../screens/TopicsScreen";
import RootStack from "./RootStack";
const { default: HomeScreen } = require("../screens/HomeScreen");
const { default: ArticleScreen } = require("../screens/ArticleScreen");

export default class TopicsStack extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Explore"
      >
        <Stack.Screen name="Home" component={RootStack} />
        <Stack.Screen
          name="Explore"
          component={TopicsScreen}
          initialParams={{
            totalArticles: this.props.route.params.totalArticles,
          }}
        />
      </Stack.Navigator>
    );
  }
}
