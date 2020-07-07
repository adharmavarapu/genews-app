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
import * as rssParser from "react-native-rss-parser";
const cheerio = require("react-native-cheerio");
import Parser from "./app/classes/Parser";
import InitialNavigation from "./app/screens/InitialNavigation";

export default class App extends Component {
  state = {
    assetsLoaded: false,
    totalArticles: [],
  };
  async parseArticle(title, date, link, content) {
    /*
    const response = await fetch(link);
    const htmlString = response.text();
    const a = cheerio.load(htmlString);
    */
    const $ = cheerio.load(content);
    return {
      date: date,
      category: environment.CATEGORIES["World"],
      desc: "",
      author: "",
      title: title,
      img: $("img")["0"]["attribs"]["src"],
    };
  }
  async componentDidMount() {
    return fetch("https://thegenews.com/blm/f.rss")
      .then((response) => response.text())
      .then(async (responseData) => {
        const rss = await rssParser.parse(responseData);
        this.setState({ rss: rss.items });
        if (this.state.rss !== undefined) {
          var copy = [];
          for (i = 0; i < this.state.rss.length; i++) {
            var element = this.state.rss[i];
            var date = element.published.split(" ").slice(1, 4).join(" ");
            copy.push(
              await this.parseArticle(
                element.title,
                date,
                element.links[0].url,
                element.content
              )
            );
          }
          this.setState({ totalArticles: copy });
          this.setState({ assetsLoaded: true });
        }
      })
      .catch(function (error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
        // ADD THIS THROW error
        throw error;
      });
  }

  render() {
    return this.state.assetsLoaded ? (
      <InitialNavigation totalArticles={this.state.totalArticles} />
    ) : null;
  }
}
