import React, { Component } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import NewsComponent from "./NewsComponent";
export default class NewsFeed extends Component {
  returnDetails(a, i) {
    return {
      img: a.img,
      title: a.title,
      date: a.date,
      desc: a.desc,
      category: i.title,
    };
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <FlatList
          contentContainerStyle={{ flexGrow: 1 }}
          data={this.props.items.filter((a) => a.active)}
          renderItem={({ item }) =>
            item.articles.map((a) => (
              <NewsComponent
                key={item.articles.indexOf(a)}
                date={a.date}
                title={a.title}
                onClick={() => this.props.onClick(this.returnDetails(a, item))}
                image={a.img}
                desc={a.desc}
                category={item.title}
              />
            ))
          }
          keyExtractor={(a) => this.props.items.indexOf(a).toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
