import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import environment from "../config/environment";
import {} from "react-native-gesture-handler";
import palette from "../config/palette";
import CategoryButton from "../components/categoryButton";

export default class FilterScreen extends Component {
  state = {
    activeStates: this.props.activeSort,
  };
  handleClick = (p, c) => {
    this.props.onClick(c);
    var updatedCategoryStates = [false, false, false];
    updatedCategoryStates[c] = true;
    this.setState({ activeStates: updatedCategoryStates });
  };
  render() {
    return (
      <View style={styles.fullContentView}>
        <View style={styles.heading}>
          <Text
            style={{
              color: palette.text,
              textAlignVertical: "center",
              fontWeight: "bold",
            }}
          >
            Sort By
          </Text>
        </View>
        <View style={{ marginLeft: 20, flexDirection: "row" }}>
          {this.props.categories.map((c) => (
            <CategoryButton
              key={c}
              isEnd={
                this.props.categories.indexOf(c) ==
                this.props.categories.length - 1
              }
              isStart={this.props.categories.indexOf(c) == 0}
              isActive={
                this.state.activeStates[this.props.categories.indexOf(c)]
              }
              element={c}
              onClick={() =>
                this.handleClick(this.props, this.props.categories.indexOf(c))
              }
            />
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fullContentView: {
    backgroundColor: palette.greyBackground,
    width: "100%",
    alignSelf: "flex-end",
    marginBottom: 15,
  },
  goBack: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  heading: {
    marginLeft: 20,
    borderColor: palette.subtle,
    marginBottom: 10,
  },
});
