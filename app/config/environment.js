import { Platform, StatusBar } from "react-native";

export default {
  TOP_MARGIN: Platform.OS == "android" ? StatusBar.currentHeight + 10 : 10,
  CATEGORYACCESS: [
    "BLM",
    "POLITICS",
    "MONEY",
    "FINANCE",
    "WORLD",
    "ART&CULTURE",
    "OPINION",
    "COVID-19",

    
   
  ],
  MONTHS: {
    undefined,
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  },
  CATEGORIES: {
    BLM: 0,
    Politics: 1,
    Money: 2,
    Finance: 3,
    World: 4,
    "Art&Culture": 5,
    Opinion: 6,
    "Covid-19": 7,
  },
};
