import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import palette from "../config/palette";
import RootStack from "../routes/RootStack";
import AboutScreen from "../screens/AboutScreen";
import CovidScreen from "../screens/CovidScreen";
import environment from "../config/environment";
import TopicsScreen from "../screens/TopicsScreen";
import TopicsStack from "../routes/TopicsStack";
import * as rssParser from "react-native-rss-parser";
const cheerio = require("react-native-cheerio");

export default class InitialNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = { totalArticles: props.totalArticles };
  }
  render() {
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
            name="Home"
            options={{ drawerLabel: "\tHome" }}
            initialParams={{
              totalArticles: this.state.totalArticles,
              filter: -1,
            }}
            component={RootStack}
          />
          <Drawer.Screen
            name="Explore"
            options={{ drawerLabel: "\tExplore" }}
            initialParams={{
              totalArticles: this.state.totalArticles,
            }}
            component={TopicsStack}
          />
          <Drawer.Screen
            name="Updates"
            options={{ drawerLabel: "\tUpdates" }}
            component={CovidScreen}
          />
          <Drawer.Screen
            name="About Us"
            options={{ drawerLabel: "\tAbout Us" }}
            component={AboutScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}
