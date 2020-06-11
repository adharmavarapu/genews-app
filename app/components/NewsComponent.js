import React, { Component } from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import palette from "../config/palette";
export default class NewsComponent extends Component {
  render() {
    return (
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={this.props.onClick}
      >
        <Image
          style={styles.image}
          source={{
            uri: this.props.image,
          }}
        />
        <View style={styles.textContainer}>
          <View style={styles.text}>
            <Text style={styles.details}>
              {this.props.date} | {this.props.category}
            </Text>
            <Text style={{ fontSize: 12, fontWeight: "bold" }}>
              {this.props.title}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 140,
  },
  textContainer: {
    marginLeft: 70,
    marginRight: 70,
    borderWidth: 1,
    borderColor: palette.subtle,
    width: "100%",
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  details: {
    fontSize: 10,
    marginBottom: 10,
    color: palette.detailText,
  },
});
