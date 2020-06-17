import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import palette from "./app/config/palette";
import RootStack from "./app/routes/RootStack";
import AboutScreen from "./app/screens/AboutScreen";
import CovidScreen from "./app/screens/CovidScreen";
import OpinionScreen from "./app/screens/OpinionScreen";

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
        <Drawer.Screen
          name="About Us"
          options={{ drawerLabel: "\tAbout Us" }}
          component={AboutScreen}
        />
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: "\tHome" }}
          component={RootStack}
        />
        <Drawer.Screen
          name="COVID-19"
          options={{ drawerLabel: "\tCOVID-19" }}
          component={CovidScreen}
        />
        <Drawer.Screen
          name="Opinion Pieces"
          options={{ drawerLabel: "\tOpinion Pieces" }}
          component={OpinionScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
