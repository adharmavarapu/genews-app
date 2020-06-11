import React, { Component } from "react";
import {
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  StyleSheet,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { ScrollView } from "react-native-gesture-handler";
import environment from "../config/environment";
import palette from "../config/palette";

export default class ArticleScreen extends Component {
  render() {
    const { route, navigation } = this.props;
    const { params } = route;
    return (
      <SafeAreaView style={styles.fullContentView}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.heading}>
            <Text style={styles.title}>{params.title}</Text>
            <Text style={styles.detailText}>
              {params.date} | {params.category}
            </Text>
          </View>
          <View style={styles.content}>
            <Image style={styles.image} source={{ uri: params.img }} />
            <Text style={styles.desc}>{params.desc}</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  fullContentView: {
    marginTop: environment.TOP_MARGIN,
    marginLeft: 9,
    marginRight: 15,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  image: {
    width: 375,
    height: 250,
    marginBottom: 5,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  detailText: {
    color: palette.detailText,
  },
  heading: {
    marginBottom: 20,
  },
  desc: {
    fontSize: 15,
  },
});
