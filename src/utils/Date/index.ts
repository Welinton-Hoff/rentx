import { addDays } from "date-fns";
// import { Platform } from "react-native";

function getPlatformDate(date: Date) {
  // fix schedulingInterval in generateInterval function to enable this code

  // if (Platform.OS === "ios") {
  //   return addDays(date, 1);
  // } else {
  //   return date;
  // }

  return addDays(date, 1);
}

export { getPlatformDate };
