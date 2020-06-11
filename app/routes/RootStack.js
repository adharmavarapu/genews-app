import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import FilterScreen from "../screens/FilterScreen";

export default class RootStack extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        mode="modal"
      >
        <Stack.Screen name="Main" component={HomeStack} />
        <Stack.Screen name="Filter" component={FilterScreen} />
      </Stack.Navigator>
    );
  }
}
