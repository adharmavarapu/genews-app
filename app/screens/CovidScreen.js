import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  Image,
  Linking,
  ActivityIndicator,
  Platform,
} from "react-native";
import environment from "../config/environment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import * as Font from "expo-font";
import palette from "../config/palette";

class CovidText extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ textAlign: "center", color: "white" }}>
          The {this.props.name}!
        </Text>
      </View>
    );
  }
}

export default class CovidScreen extends Component {
  state = { assetsLoaded: false };
  async componentDidMount() {
    await Font.loadAsync({
      crimsonTextRegular: require("../assets/fonts/CrimsonText-Regular.ttf"),
    });
    this.setState({ assetsLoaded: true });
  }

  render() {
    const { navigation } = this.props;
    StatusBar.setBackgroundColor(palette.accent);
    const { assetsLoaded } = this.state;
    if (!assetsLoaded) {
      return Platform.OS == "ios" ? (
        <View style={styles.container}>
          <ActivityIndicator />
          <StatusBar barStyle="default" />
        </View>
      ) : null;
    }
    return (
      <SafeAreaView
        style={{
          marginTop: environment.TOP_MARGIN,
          flex: 1,
          backgroundColor: palette.background,
        }}
      >
        <View style={styles.topBar}>
          <View
            style={{
              alignSelf: "flex-start",
              position: "absolute",
              left: 20,
              top: 20,
            }}
          >
            <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
              <Image
                style={{ resizeMode: "contain", height: 30, width: 30 }}
                source={require("../assets/menuBlack.png")}
              />
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.titletext}>UPDATES</Text>
        </View>
        <ScrollView>
          <View style={styles.infoBox}>
            <Text style={styles.heading}>COVID-19</Text>
            <Text
              style={{
                fontFamily: Platform.OS == "ios" ? "Cochin" : "",
                fontSize: 21,
                textAlign: "center",
                top: 10,
              }}
            >
              The Covid-19 pandemic has altered life as we know it. Together, we
              share similar feelings of anxiety and sadness as we are forced to
              go into social isolation in order to protect ourselves and our
              loved ones. We know people who are ill, our graduations have been
              canceled, music festivals postponed, and school is operating via
              Zoom, all because of this virus. Members of Generation Z are the
              thought leaders of the future. Thus, it's important now, more than
              ever, to fully understand this virus and the global impact it has
              on our health and the economy. As long as COVID-19 continues to
              wreak havoc on our daily lives, we will post updates regarding the
              status of the virus. A great way to start educating yourself on
              COVID-19 is through the attached links under the IMPORTANT LINKS
              section below. These people/sites are experts on infectious
              diseases and provide useful information about updates on COVID-19
              and ways to protect yourself from the virus. To access the
              sources, you can click on the links. Happy Learning! GENEWS
            </Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.heading}>Important Links</Text>
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL(
                  "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                )
                  .then((supported) => {
                    if (!supported) {
                      console.log("Can't handle url: ");
                    } else {
                      return Linking.openURL(
                        "https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
                      );
                    }
                  })
                  .catch((err) => console.error("An error ocurred", err))
              }
            >
              The World Health Organization
            </Text>
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL(
                  "https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
                )
                  .then((supported) => {
                    if (!supported) {
                      console.log("Can't handle url: ");
                    } else {
                      return Linking.openURL(
                        "https://www.cdc.gov/coronavirus/2019-nCoV/index.html"
                      );
                    }
                  })
                  .catch((err) => console.error("An error ocurred", err))
              }
            >
              The Center for Disease Control and Prevention
            </Text>
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL(
                  "https://www.niaid.nih.gov/about/niaid-organization"
                )
                  .then((supported) => {
                    if (!supported) {
                      console.log("Can't handle url: ");
                    } else {
                      return Linking.openURL(
                        "https://www.niaid.nih.gov/about/niaid-organization"
                      );
                    }
                  })
                  .catch((err) => console.error("An error ocurred", err))
              }
            >
              The National Institute of Allergy and Infectious Diseases
            </Text>
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL("https://coronavirus.jhu.edu/map.html")
                  .then((supported) => {
                    if (!supported) {
                      console.log("Can't handle url: ");
                    } else {
                      return Linking.openURL(
                        "https://coronavirus.jhu.edu/map.html"
                      );
                    }
                  })
                  .catch((err) => console.error("An error ocurred", err))
              }
            >
              Johns Hopkins University
            </Text>
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL("https://twitter.com/ScottGottliebMD?")
                  .then((supported) => {
                    if (!supported) {
                      console.log("Can't handle url: ");
                    } else {
                      return Linking.openURL(
                        "https://twitter.com/ScottGottliebMD?"
                      );
                    }
                  })
                  .catch((err) => console.error("An error ocurred", err))
              }
            >
              Dr. Scott Gottlieb - 23rd Comissioner of the FDA
            </Text>
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL("https://www.niaid.nih.gov/about/director")
                  .then((supported) => {
                    if (!supported) {
                      console.log("Can't handle url: ");
                    } else {
                      return Linking.openURL(
                        "https://www.niaid.nih.gov/about/director"
                      );
                    }
                  })
                  .catch((err) => console.error("An error ocurred", err))
              }
            >
              Dr. Anthony Fauci - NIAID Director
            </Text>
            <Text
              style={styles.links}
              onPress={() =>
                Linking.openURL("https://twitter.com/drsanjaygupta")
                  .then((supported) => {
                    if (!supported) {
                      console.log("Can't handle url: ");
                    } else {
                      return Linking.openURL(
                        "https://twitter.com/drsanjaygupta"
                      );
                    }
                  })
                  .catch((err) => console.error("An error ocurred", err))
              }
            >
              Dr. Sanjay Gupta - CNN Chief Medical Correspondant
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: Platform.OS == "ios" ? "Cochin" : "",
  },
  fullContentView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: environment.TOP_MARGIN,
  },
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  infoBox: {
    marginTop: 10,
    marginBottom: 10,
    flexDirection: "column",
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    width: "90%",
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "rgb(254, 241, 240)",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: "red",
    borderWidth: 5,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: palette.background,
    //borderBottomWidth: 5,
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
  titletext: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "crimsonTextRegular",
    margin: 20,
    color: "red",
  },
  heading: {
    alignSelf: "center",
    textAlignVertical: "center",
    fontSize: 30,
    top: 10,
    color: palette.text,
    fontWeight: "normal",
    fontFamily: Platform.OS == "ios" ? "Cochin" : "",
    fontWeight: "bold",
  },
  links: {
    fontFamily: Platform.OS == "ios" ? "Cochin" : "",
    fontSize: 21,
    textAlign: "center",
    top: 20,
    color: palette.accent,
    textDecorationLine: "underline",
    paddingBottom: 15,
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
