import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import FilterScreen from "../screens/FilterScreen";

export default class RootStack extends Component {
  render() {
    const Stack = createStackNavigator();
    console.log("PROPS", this.props.route.params.totalArticles);
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        mode="modal"
      >
        <Stack.Screen
          initialParams={{
            totalArticles: this.props.route.params.totalArticles,
          }}
          name="Main"
          component={HomeStack}
        />
        <Stack.Screen
          name="Filter"
          options={{ headerShown: true }}
          component={FilterScreen}
        />
      </Stack.Navigator>
    );
  }
}
