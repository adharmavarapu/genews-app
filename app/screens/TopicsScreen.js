import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ImageBackground,
} from "react-native";
import environment from "../config/environment";
import palette from "../config/palette";
export default class TopicsScreen extends Component {
  state = {
    BLM: require("../assets/BLM.jpg"),
    Politics: require("../assets/POLITICS.jpg"),
    Money: require("../assets/MONEY.jpg"),
    Finance: require("../assets/FINANCE.jpg"),
    World: require("../assets/WORLD.jpg"),
    "Art&Culture": require("../assets/ART.jpg"),
    Opinion: require("../assets/OPINION.png"),
    "Covid-19": require("../assets/COVID-19.jpg"),
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
    const { navigation } = this.props;
    const styles = StyleSheet.create({
      container: {
        marginTop: environment.TOP_MARGIN,
        backgroundColor: "#fff",
      },
      topBar: {
        top: 10,
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: palette.background,
      },
      titletext: {
        textAlign: "center",
        fontSize: 25,
        margin: 20,
        color: "red",
      },
      backgroundImage: {
        flex: 1,
        alignSelf: "stretch",
        width: null,
      },
    });
    return (
      <SafeAreaView styles={styles.container}>
        <View style={styles.topBar}>
          <View style={{ alignSelf: "center", position: "absolute", left: 20 }}>
            <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
              <Image
                style={{ resizeMode: "contain", height: 30, width: 30 }}
                source={require("../assets/menuBlack.png")}
              />
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.titletext}>EXPLORE</Text>
        </View>
        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            {environment.CATEGORYACCESS.map((c) => (
              <TouchableOpacity
                key={environment.CATEGORIES[this.transformCategory(c)]}
              >
                <ImageBackground
                  source={this.state[this.transformCategory(c)]}
                  style={styles.backgroundImage}
                >
                  <View
                    style={{
                      width: 190,
                      height: 190,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      style={{
                        color: palette.background,
                        fontWeight: "bold",
                        fontSize: 24,
                      }}
                    >
                      {c}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
