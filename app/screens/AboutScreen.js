import React, { Component } from "react";
import { SafeAreaView, Text, Image } from "react-native";
import environment from "../config/environment";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

export default class AboutScreen extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <SafeAreaView style={{ marginTop: environment.TOP_MARGIN }}>
        <TouchableWithoutFeedback
          style={{ marginLeft: 20, marginTop: 10 }}
          onPress={() => navigation.openDrawer()}
        >
          <Image
            style={{ resizeMode: "contain", height: 30, width: 30 }}
            source={require("../assets/menuBlack.png")}
          />
        </TouchableWithoutFeedback>
      </SafeAreaView>
    );
  }
}
