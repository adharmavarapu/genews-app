import React, { Component } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import environment from "../config/environment";
import ModalDropdown from "react-native-modal-dropdown";
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
              marginBottom: 10,
            }}
          >
            Sort By
          </Text>
        </View>
        <View
          style={{ marginLeft: 20, flexDirection: "row", marginBottom: 10 }}
        >
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
        <View style={styles.heading}>
          <Text
            style={{
              color: palette.text,
              textAlignVertical: "center",
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Narrow Search
          </Text>
        </View>
        <TouchableHighlight
          underlayColor={palette.greyBackground}
          onPress={() => console.log("works")}
        >
          <View
            style={{
              width: "100%",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: palette.subtle,
              flexDirection: "row",
              justifyContent: "space-between",
              height: 60,
              alignItems: "center",
            }}
          >
            <Text style={[styles.heading, { marginLeft: 20 }]}>By Author</Text>
            <View style={{ right: 25 }}>
              <MaterialIcons name="chevron-right" size={24}></MaterialIcons>
            </View>
          </View>
        </TouchableHighlight>
        <ModalDropdown options={["option 1", "option 2"]} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  fullContentView: {
    backgroundColor: palette.background,
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
    marginLeft: 5,
  },
});
