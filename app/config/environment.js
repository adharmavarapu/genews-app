import { Platform, StatusBar } from "react-native";

export default {
  TOP_MARGIN: Platform.OS == "android" ? StatusBar.currentHeight + 10 : 10,
};
