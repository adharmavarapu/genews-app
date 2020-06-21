import { Platform, StatusBar } from "react-native";

export default {
  TOP_MARGIN: Platform.OS == "android" ? StatusBar.currentHeight + 10 : 10,
  CATEGORYACCESS: [
    "BLM",
    "POLITICS",
    "MONEY",
    "FINANCE",
    "WORLD",
    "ARTS&CULTURE",
  ],
  CATEGORIES: {
    BLM: 0,
    Politics: 1,
    Money: 2,
    Finance: 3,
    World: 4,
    "Arts&Culture": 5,
  },
};
