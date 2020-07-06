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
import Loader from "../components/Loader";
import * as Font from "expo-font";
class Screen extends Component {
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
        <ScrollView style={{ flexGrow: 1 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              marginLeft: 5,
              marginRight: 5,
            }}
          >
            {environment.CATEGORYACCESS.map((c) => (
              <TouchableOpacity
                style={{ marginBottom: 5 }}
                onPress={() =>
                  navigation.navigate("Home", {
                    totalArticles: this.props.route.params.totalArticles.filter(
                      (a) =>
                        a.category ==
                        environment.CATEGORIES[this.transformCategory(c)]
                    ),
                    filter: environment.CATEGORIES[this.transformCategory(c)],
                  })
                }
                key={environment.CATEGORIES[this.transformCategory(c)]}
              >
                <ImageBackground
                  source={this.state[this.transformCategory(c)]}
                  style={styles.backgroundImage}
                >
                  <View
                    style={{
                      backgroundColor: "#808080aa",
                      width: 190,
                      height: 185,
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
export default class TopicsScreen extends Component {
  state = {
    assetsLoaded: false,
  };
  async componentDidMount() {
    await Font.loadAsync({
      crimsonTextRegular: require("../assets/fonts/CrimsonText-Regular.ttf"),
      crimsonTextItalic: require("../assets/fonts/CrimsonText-Italic.ttf"),
    });
    this.setState({ assetsLoaded: true });
  }
  render() {
    const { navigation } = this.props;
    const { route } = this.props;
    const { assetsLoaded } = this.state;
    return assetsLoaded ? (
      <Screen route={route} navigation={navigation} />
    ) : (
      <Loader />
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: environment.TOP_MARGIN,
    backgroundColor: "#fff",
  },
  topBar: {
    top: 10,
    height: 120,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.background,
  },
  titletext: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "crimsonTextRegular",
    margin: 20,
    color: "red",
  },
  backgroundImage: {
    flex: 1,
    tintColor: "#000000aa",
    alignSelf: "stretch",
    width: null,
  },
});
