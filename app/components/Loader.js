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

export default class Loader extends Component {
  render() {
    return Platform.OS == "ios" ? (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    ) : null;
  }
}
