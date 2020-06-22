import React, { Component } from "react";
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
} from "react-native";
import palette from "../config/palette";
import NewsFeed from "../components/NewsFeed";
import environment from "../config/environment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class MainScreen extends Component {
  state = {
    totalArticles: this.props.route.params.totalArticles,
    filter: this.props.route.params.filter,
  };

  handleToggle = (index) => {
    var categoriesUpdated = this.setState({
      categoriesUpdated: this.state.categories,
    });
  };

  render() {
    const { navigation } = this.props;
    StatusBar.setBackgroundColor(palette.accent);
    return (
      <SafeAreaView style={styles.fullContentView}>
        <View
          style={[
            styles.banner,
            this.state.filter === undefined
              ? styles.banner
              : { backgroundColor: palette.background },
            ,
          ]}
        >
          <TouchableWithoutFeedback
            style={{ marginLeft: 20, marginTop: 30 }}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              style={{ resizeMode: "contain", height: 30, width: 30 }}
              source={
                this.state.filter === undefined
                  ? require("../assets/menu.png")
                  : require("../assets/menuBlack.png")
              }
            />
          </TouchableWithoutFeedback>
          <View
            style={[
              styles.logo,
              this.state.filter === undefined
                ? styles.logo
                : { borderWidth: 0 },
            ]}
          >
            <Text
              style={[
                styles.heading,
                this.state.filter === undefined
                  ? styles.heading
                  : {
                      color: palette.accent,
                      textDecorationLine: "underline",
                      fontSize: 23,
                    },
              ]}
            >
              {this.state.filter == undefined
                ? "GENEWS"
                : environment.CATEGORYACCESS[this.state.filter]}
            </Text>
          </View>
          <TouchableWithoutFeedback
            style={styles.filterButton}
            onPress={() =>
              navigation.navigate("Filter", {
                categories: ["Newest", "Author", "Popular"],
                onClick: (a) => this.handleToggle(a),
              })
            }
          >
            <Text
              style={[
                styles.filterText,
                this.state.filter === undefined
                  ? styles.filterText
                  : { color: palette.text },
              ]}
            >
              Filter
            </Text>
          </TouchableWithoutFeedback>
        </View>
        <NewsFeed
          onClick={(a) => navigation.navigate("Article", a)}
          items={this.state.totalArticles}
        />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  fullContentView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  banner: {
    flexDirection: "row",
    alignItems: "center",
    alignContent: "center",
    height: 120,
    width: "100%",
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
