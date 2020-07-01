import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
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
        <View
          style={[
            this.props.isStart
              ? styles.start
              : this.props.isEnd
              ? styles.end
              : styles.middle,
            {
              backgroundColor: this.props.isActive
                ? palette.accent
                : palette.background,
            },
          ]}
        >
          <TouchableOpacity onPress={() => this.handleToggle()}>
            <View style={styles.category}>
              <Text
                style={{
                  color: this.props.isActive
                    ? palette.background
                    : palette.accent,
                  textAlign: "center",
                  textAlignVertical: "center",
                }}
              >
                {this.props.element}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  category: {
    flexDirection: "row",
    width: 120,
    height: 40,
    justifyContent: "center",
  },
  start: {
    borderWidth: 1,
    borderColor: palette.subtle,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  middle: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: palette.subtle,
  },
  end: {
    borderWidth: 1,
    borderColor: palette.subtle,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
});
