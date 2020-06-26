import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import environment from "../config/environment";
import { TouchableOpacity } from "react-native-gesture-handler";
import palette from "../config/palette";
import CategoryButton from "../components/categoryButton";

export default class FilterScreen extends Component {
  state = {
    activeStates: this.props.route.params.activeSort,
  };
  handleClick = (p, c) => {
    p.onClick(c);
    var updatedCategoryStates = [false, false, false];
    updatedCategoryStates[c] = true;
    this.setState({ activeStates: updatedCategoryStates });
  };
  render() {
    const { navigation, route } = this.props;
    const { params } = route;
    return (
      <SafeAreaView style={styles.fullContentView}>
        <View>
          <View style={styles.heading}>
            <Text
              style={{
                color: palette.detailText,
                textAlignVertical: "center",
                fontWeight: "bold",
              }}
            >
              Sort By:
            </Text>
          </View>
          {params.categories.map((c) => (
            <CategoryButton
              key={c}
              isActive={this.state.activeStates[params.categories.indexOf(c)]}
              element={c}
              onClick={() =>
                this.handleClick(params, params.categories.indexOf(c))
              }
            />
          ))}
        </View>
        <View style={{ borderColor: palette.subtle, borderTopWidth: 1 }} />
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  fullContentView: {
    marginTop: environment.TOP_MARGIN,
  },
  goBack: {
    width: 50,
    height: 50,
    marginLeft: 20,
  },
  heading: {
    borderColor: palette.subtle,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
});
