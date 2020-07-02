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
    sort: [true, false, false],
  };
  constructor(props) {
    super(props);
    var articlesUpdated = [...props.route.params.totalArticles];
    articlesUpdated.sort((a, b) => this.compareDates(b.date, a.date));
    this.state = {
      totalArticles: articlesUpdated,
      filter: this.props.route.params.filter,
      sort: [true, false, false],
    };
  }
  compareDates(date1, date2) {
    var date1Array = date1.split(/[\s,]+/);
    var date2Array = date2.split(/[\s,]+/);
    return (
      new Date(
        date1Array[2],
        environment.MONTHS[date1Array[0]],
        date1Array[1]
      ) -
      new Date(date2Array[2], environment.MONTHS[date2Array[0]], date2Array[1])
    );
  }
  handleToggle = (index) => {
    articlesUpdated = [...this.state.totalArticles];
    if (index == 0) {
      articlesUpdated.sort((a, b) => this.compareDates(b.date, a.date));
    } else if (index == 1) {
    } else {
      articlesUpdated.sort((a, b) => a.localeCompare(b));
    }
    sortUpdated = [false, false, false];
    sortUpdated[index] = true;
    this.setState({ sort: sortUpdated });
    this.setState({
      totalArticles: articlesUpdated,
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
            this.state.filter === -1
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
                this.state.filter === -1
                  ? require("../assets/menu.png")
                  : require("../assets/menuBlack.png")
              }
            />
          </TouchableWithoutFeedback>
          <View
            style={[
              styles.logo,
              this.state.filter === -1 ? styles.logo : { borderWidth: 0 },
            ]}
          >
            <Text
              style={[
                styles.heading,
                this.state.filter === -1
                  ? styles.heading
                  : {
                      color: palette.accent,
                      textDecorationLine: "underline",
                      fontSize: 23,
                    },
              ]}
            >
              {this.state.filter === -1
                ? "GENEWS"
                : environment.CATEGORYACCESS[this.state.filter]}
            </Text>
          </View>
          <TouchableWithoutFeedback
            style={styles.filterButton}
            onPress={() =>
              navigation.navigate("Filter", {
                activeSort: this.state.sort,
                categories: ["Newest", "Author", "Popular"],
                onClick: (a) => this.handleToggle(a),
              })
            }
          >
            <Text
              style={[
                styles.filterText,
                this.state.filter === -1
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
