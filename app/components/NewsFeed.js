import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import NewsComponent from "./NewsComponent";
import environment from "../config/environment";
export default class NewsFeed extends Component {
  getCategory(i) {
    return environment.CATEGORYACCESS[i];
  }
  returnDetails(i) {
    return {
      img: i.img,
      title: i.title,
      date: i.date,
      desc: i.desc,
      category: i.category,
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={this.props.items}
          renderItem={({ item }) => (
            <NewsComponent
              key={this.props.items.indexOf(item)}
              date={item.date}
              title={item.title}
              onClick={() => this.props.onClick(this.returnDetails(item))}
              image={item.img}
              desc={item.desc}
              category={this.getCategory(item.category)}
            />
          )}
          keyExtractor={(a) => this.props.items.indexOf(a).toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
