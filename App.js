import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import palette from "./app/config/palette";
import RootStack from "./app/routes/RootStack";
import AboutScreen from "./app/screens/AboutScreen";
import CovidScreen from "./app/screens/CovidScreen";
import environment from "./app/config/environment";
import TopicsScreen from "./app/screens/TopicsScreen";
import TopicsStack from "./app/routes/TopicsStack";

export default class App extends Component {
  state = {
    totalArticles: [
      {
        date: "June 7, 2020",
        author: "",
        category: environment.CATEGORIES["Politics"],
        desc: `
      There are many videos of protests concerning the Black Lives Matter movement circulating on social media. Within these, there are very beautiful moments, but there are also many videos of violence, particularly ones incited by police officers. 

      One that was particularly disturbing and caught the attention of several on social media was a video of a police officer pushing down a 75-year-old man. The most unsettling part was police officers just walking past him while he was lying on the ground, even when it was clear that people were shouting, “he is bleeding out of his ear.” 
          
      This incident took place in Buffalo, NY, after a protest. As a result, two officers have been suspended without pay. The older man was taken to the hospital and he is said to be in "stable but serious condition, suffering from a laceration and potentially a concussion.” 
          
      Originally, Buffalo Police were not clear nor forthcoming on the matter, claiming that “one person was injured when he tripped and fell.” Despite the video evidence showcasing the man was pushed by a police officer. While this specific incident drew "fire" on social media, many examples of police misconduct and abuse towards protestors have been coming to light that only further illustrates the massive problem of police brutality facing the United States.`,
        title: "Elderly Man Pushed by Police Officer at Buffalo Protest",
        img:
          "https://img1.wsimg.com/isteam/ip/4848b3e2-cc88-458c-b9a2-7182cf136840/reuters_com_2020_newsml_RC2E3H9GH3D5.jpg/:/rs=w:1280",
      },
      {
        date: "June 7, 2020",
        desc: "",
        category: environment.CATEGORIES["Money"],
        author: "",
        title: "Women-Managed Hedge Funds Outperform Male Counterparts",
        img:
          "https://img1.wsimg.com/isteam/stock/DjrYVQG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
      },
      {
        date: "June 5, 2020",
        desc: "",
        category: environment.CATEGORIES["World"],
        author: "",
        title: 'The US to possibly revoke Hong Kong\'s "special trade status"',
        img:
          "https://img1.wsimg.com/isteam/stock/lbQyE1m/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
      },
      {
        date: "June 6, 2020",
        category: environment.CATEGORIES["Art&Culture"],
        desc: "",
        author: "",
        title: "Kanye West's Generous Donation",
        img:
          "https://img1.wsimg.com/isteam/ip/4848b3e2-cc88-458c-b9a2-7182cf136840/200605-Kanye-West-900x506.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
      },
    ],
  };
  transformCategory(str) {
    if (str === "BLM") {
      return str;
    } else if (str.includes("&")) {
      var array = str.split("&");
      return (
        this.transformCategory(array[0]) +
        "&" +
        this.transformCategory(array[1])
      );
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
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
