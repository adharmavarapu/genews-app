import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./app/routes/HomeStack";
import palette from "./app/config/palette";
import RootStack from "./app/routes/RootStack";

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContentOptions={{
          labelStyle: { color: palette.accent },
          activeBackgroundColor: palette.subtle,
        }}
      >
        <Drawer.Screen name="Home" component={RootStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
