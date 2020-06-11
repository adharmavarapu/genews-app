import React, { Component } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import environment from "../config/environment";
import { TouchableOpacity } from "react-native-gesture-handler";
import palette from "../config/palette";
import CategoryButton from "../components/categoryButton";

export default class FilterScreen extends Component {
  render() {
    const { navigation, route } = this.props;
    const { params } = route;
    return (
      <SafeAreaView style={styles.fullContentView}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => navigation.navigate("Main")}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
              color: palette.detailText,
            }}
          >
            X
          </Text>
        </TouchableOpacity>
        <View>
          <View style={styles.heading}>
            <Text
              style={{
                color: palette.detailText,
                textAlignVertical: "center",
                fontWeight: "bold",
              }}
            >
              Categories
            </Text>
          </View>
          {params.categories.map((c) => (
            <CategoryButton
              key={c.title}
              element={c}
              onClick={() => params.onClick(params.categories.indexOf(c))}
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
