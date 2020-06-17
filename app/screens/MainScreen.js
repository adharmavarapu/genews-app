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
    categories: [
      {
        title: "Politics",
        active: true,
        articles: [
          {
            date: "June 7, 2020",
            desc: `
          There are many videos of protests concerning the Black Lives Matter movement circulating on social media. Within these, there are very beautiful moments, but there are also many videos of violence, particularly ones incited by police officers. 

          One that was particularly disturbing and caught the attention of several on social media was a video of a police officer pushing down a 75-year-old man. The most unsettling part was police officers just walking past him while he was lying on the ground, even when it was clear that people were shouting, “he is bleeding out of his ear.” 
              
          This incident took place in Buffalo, NY, after a protest. As a result, two officers have been suspended without pay. The older man was taken to the hospital and he is said to be in "stable but serious condition, suffering from a laceration and potentially a concussion.” 
              
          Originally, Buffalo Police were not clear nor forthcoming on the matter, claiming that “one person was injured when he tripped and fell.” Despite the video evidence showcasing the man was pushed by a police officer. While this specific incident drew "fire" on social media, many examples of police misconduct and abuse towards protestors have been coming to light that only further illustrates the massive problem of police brutality facing the United States.
              
          - Jaclyn Paston`,
            title: "Elderly Man Pushed by Police Officer at Buffalo Protest",
            img:
              "https://img1.wsimg.com/isteam/ip/4848b3e2-cc88-458c-b9a2-7182cf136840/reuters_com_2020_newsml_RC2E3H9GH3D5.jpg/:/rs=w:1280",
          },
        ],
      },
      {
        title: "Economics",
        active: true,
        articles: [
          {
            date: "June 7, 2020",
            desc: "",
            title: "Women-Managed Hedge Funds Outperform Male Counterparts",
            img:
              "https://img1.wsimg.com/isteam/stock/DjrYVQG/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
          },
        ],
      },
      {
        title: "World",
        active: true,
        articles: [
          {
            date: "June 5, 2020",
            desc: "",
            title:
              'The US to possibly revoke Hong Kong\'s "special trade status"',
            img:
              "https://img1.wsimg.com/isteam/stock/lbQyE1m/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
          },
        ],
      },
      {
        title: "Arts&Culture",
        active: true,
        articles: [
          {
            date: "June 6, 2020",
            desc: "",
            title: "Kanye West's Generous Donation",
            img:
              "https://img1.wsimg.com/isteam/ip/4848b3e2-cc88-458c-b9a2-7182cf136840/200605-Kanye-West-900x506.webp/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280",
          },
        ],
      },
      {
        title: "BLM",
        active: true,
        articles: [],
      },
      {
        title: "Finance",
        active: true,
        articles: [],
      },
    ],
  };
  handleToggle = (index) => {
    const categoriesUpdated = [...this.state.categories];
    categoriesUpdated[index].active = !categoriesUpdated[index].active;
    this.setState({ categoriesUpdated: this.state.categories });
  };

  render() {
    const { navigation } = this.props;
    StatusBar.setBackgroundColor(palette.accent);
    return (
      <SafeAreaView style={styles.fullContentView}>
        <View style={styles.banner}>
          <TouchableWithoutFeedback
            style={{ marginLeft: 20, marginTop: 30 }}
            onPress={() => navigation.openDrawer()}
          >
            <Image
              style={{ resizeMode: "contain", height: 30, width: 30 }}
              source={require("../assets/menu.png")}
            />
          </TouchableWithoutFeedback>
          <View style={styles.logo}>
            <Text style={styles.heading}>GENEWS</Text>
          </View>
          <TouchableWithoutFeedback
            style={styles.filterButton}
            onPress={() =>
              navigation.navigate("Filter", {
                categories: this.state.categories,
                onClick: (a) => this.handleToggle(a),
              })
            }
          >
            <Text style={styles.filterText}>Filter</Text>
          </TouchableWithoutFeedback>
        </View>
        <NewsFeed
          onClick={(a) => navigation.navigate("Article", a)}
          items={this.state.categories}
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
    /** 
    textDecorationLine: "underline",
    */
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
