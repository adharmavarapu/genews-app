import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
} from "react-native";
import environment from "../config/environment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class AboutScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ marginTop: environment.TOP_MARGIN, flex: 1 }}>
        <TouchableWithoutFeedback
          style={{ marginLeft: 20, marginTop: 10 }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{ resizeMode: "contain", height: 30, width: 30 }}
            source={require("../assets/menuBlack.png")}
          />
        </TouchableWithoutFeedback>
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
              in a simplified manner. {"\n"} GENEWS is 100% powered by students:
              Every article published has been written by someone in Gen Z.{" "}
              {"\n"}CLICK ON THE IMAGE ABOVE OUR SUMMARY if you are inclined to
              read the original story. {"\n"}We look forward to hearing from
              you!
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
            <Text style={styles.boxtext}></Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },

  box: {
    backgroundColor: "rgb(254, 241, 240)",
    width: "90%",
    marginTop: 10,
  },
  boxtext: {
    textAlign: "center",
  },
});
