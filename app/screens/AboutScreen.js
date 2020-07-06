import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableWithoutFeedback,
  StatusBar,
  Platform,
} from "react-native";
import environment from "../config/environment";
import {} from "react-native-gesture-handler";
import * as Font from "expo-font";
import palette from "../config/palette";
import Loader from "../components/Loader";

class Screen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView
        style={{
          marginTop: environment.TOP_MARGIN,
          flex: 1,
          backgroundColor: palette.background,
        }}
      >
        <View style={styles.topBar}>
          <View style={{ alignSelf: "center", position: "absolute", left: 20 }}>
            <TouchableWithoutFeedback onPress={() => navigation.openDrawer()}>
              <Image
                style={{ resizeMode: "contain", height: 30, width: 30 }}
                source={require("../assets/menuBlack.png")}
              />
            </TouchableWithoutFeedback>
          </View>
          <Text style={styles.titletext}>ABOUT US</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          <View style={styles.box}>
            <Text style={styles.boxtextheader}>Who Are We?</Text>
            <Text style={styles.boxtext}>
              Have you ever started reading a news article but didn't have the
              patience or time to finish? Generation News has you covered. We
              aim to broaden news access to students by reporting current events
              in a simplified manner.{" "}
            </Text>
            <Text style={styles.boxtext}>
              GENEWS is 100% powered by students: Every article published has
              been written by someone in Gen Z.{" "}
            </Text>

            <Text style={styles.boxtext}>
              CLICK ON THE IMAGE ABOVE OUR SUMMARY if you are inclined to read
              the original story.{" "}
            </Text>

            <Text style={styles.boxtext}>
              We look forward to hearing from you!
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxtextheader}>Our Goal.</Text>
            <Text style={styles.boxtext}>
              GENEWS aims to create a community consisting of members of
              Generation Z by having a platform where they are able to update
              each other on current events.
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxtextheader}>Our Mission.</Text>
            <Text style={styles.boxtext}>
              We intend to revolutionize the way students read and write about
              current events. GENEWS is a platform that provides busy students
              with fast, unbiased answers to their pressing world affairs
              questions.
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxtextheader}>How It Works.</Text>
            <Text style={styles.boxtext}>
              To Write For GENEWS: {"\n"}1. Go to the Write 4 Us! tab and fill
              out the "Contact Us" form.{"\n"}
              2. Submit a summarized article of interest to you that is between
              75 - 250 words. {"\n"}
              3. Congrats! It's that easy to be a published writer while making
              sure Gen Z is updated on current events.
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.boxtextheader}>Our Values.</Text>
            <Text style={styles.boxtext}>
              {"\u2022"}Curiosity{"\n"}
              {"\u2022"}Debate{"\n"}
              {"\u2022"}Productivity{"\n"}
              {"\u2022"}Inclusion{"\n"}
              {"\u2022"}Community{"\n"}
              {"\u2022"}Collaboration{"\n"}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default class AboutScreen extends Component {
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

    const { assetsLoaded } = this.state;
    return assetsLoaded ? <Screen navigation={navigation} /> : <Loader />;
  } // end render
} // end class
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: palette.background,
  },
  titletext: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "crimsonTextRegular",
    margin: 20,
    color: "red",
  },

  box: {
    backgroundColor: "rgb(254, 241, 240)",
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
  },
  boxtext: {
    textAlign: "center",
    fontSize: 21,
    fontFamily: "crimsonTextRegular",
    margin: 20,
  },

  boxtextheader: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "crimsonTextRegular",
    marginBottom: 20,
    marginTop: 20,
  },
});
