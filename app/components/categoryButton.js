import React, { Component } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text, View, StyleSheet, Image } from "react-native";
import palette from "../config/palette";

export default class CategoryButton extends Component {
  state = {
    active: this.props.isActive,
  };
  handleToggle = () => {
    this.props.onClick();
    this.setState({ active: this.props.isActive });
  };
  render() {
    return (
      <React.Fragment>
        <View style={{ borderColor: palette.subtle, borderTopWidth: 1 }} />
        <TouchableOpacity onPress={() => this.handleToggle()}>
          <View style={styles.category}>
            <Text
              style={{
                color: palette.accent,
                marginLeft: 20,
                textAlignVertical: "center",
              }}
            >
              {this.props.element}
            </Text>
            <View style={{ justifyContent: "center" }}>
              <Image
                style={{
                  marginRight: 20,
                  width: 15,
                  height: 15,
                  opacity: this.props.isActive ? 1 : 0,
                }}
                source={require("../assets/checkMark.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    width: "100%",
    height: 50,
    justifyContent: "space-between",
  },
});
