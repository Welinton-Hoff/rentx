import sagaPlugin from "reactotron-redux-saga";
import { reactotronRedux } from "reactotron-redux";
import Reactotron, { networking } from "reactotron-react-native";
import AsyncStorage from "@react-native-community/async-storage";

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure()
    .use(sagaPlugin())
    .use(networking())
    .use(reactotronRedux())
    .connect();

  tron.clear();

  console.tron = tron;
} else {
  //For logs don't crash, in production build
  console.tron = {
    log: () => {},
  };
}
