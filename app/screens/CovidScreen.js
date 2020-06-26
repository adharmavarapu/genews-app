import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
} from "react-native";import environment from "../config/environment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import palette from "../config/palette";


class CovidText extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Text>The {this.props.name}!</Text>
      </View>
    );
  }
}

export default class CovidScreen extends Component {
  render() {
    const { navigation } = this.props;
    StatusBar.setBackgroundColor(palette.accent);
    return (
      <SafeAreaView style={styles.fullContentView}>
        
        <TouchableWithoutFeedback
          style={{ marginLeft: 20, marginTop: 10 }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{ resizeMode: "contain", height: 30, width: 30 }}
            source={require("../assets/menuBlack.png")}
          />
        </TouchableWithoutFeedback>
        <View style={{alignItems: 'center', top: 400, marginRight:200, marginLeft:200}}>
          <CovidText name=
          "Covid-19 pandemic has altered life as we know it. Together, we share similar feelings of anxiety and sadness as we are forced to go into social isolation in order to protect ourselves and our loved ones. We know people who are ill, our graduations have been canceled, music festivals postponed, and school is operating via Zoom, all because of this virus. Members of Generation Z are the thought leaders of the future. Thus, it's important now, more than ever, to fully understand this virus and the global impact it has on our health and the economy. As long as COVID-19 continues to wreak havoc on our daily lives, we will post updates regarding the status of the virus. A great way to start educating yourself on COVID-19 is through the attached links under the IMPORTANT LINKS section below. These people/sites are experts on infectious diseases and provide useful information about updates on COVID-19 and ways to protect yourself from the virus. To access the sources, you can click on the images (or logos). Happy Learning! GENEWS" />
        </View>
        <View
          style={[
            styles.logo, 
             {borderColor: palette.background },
            styles.banner,
             {backgroundColor: palette.background },
          ]}
        ></View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: "Cochin"
  },
  fullContentView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  banner: {
    flexDirection: "row",
    height: 120,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: palette.accent,
    justifyContent: "space-between",
  },
  logo: {
    marginTop: environment.TOP_MARGIN,
    color: palette.accent,
    width: 200,
    height: 55,
    borderWidth: 2.5,
    //borderRadius: 10,
    borderColor: palette.background,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    alignSelf: "center",
    textAlignVertical: "center",
    fontSize: 30,
    color: palette.background,
    fontWeight: "bold",
  },
  categories: {
    flexDirection: "row",
    top: "5%",
    justifyContent: "space-evenly",
    marginBottom: 25,
  },
  menuSlider: {
    position: "absolute",
    backgroundColor: "#00000000",
  },
  menuIcon: {
    height: 30,
    resizeMode: "contain",
  },
  filterText: {
    color: palette.background,
    fontSize: 14,
  },
  filterButton: { marginRight: 15, marginTop: 25 },
});

