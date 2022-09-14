import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Splash } from "../screens/Splash";
import { SignIn } from "../screens/SignIn";
import { InitialData } from "../screens/signUp/InitialData";
import { SuccessFeedback } from "../screens/SuccessFeedback";
import { CreatePassword } from "../screens/signUp/CreatePassword";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
  const screenOptions = { headerShown: false };

  return (
    <Navigator screenOptions={screenOptions} initialRouteName="Splash">
      <Screen name="Splash" component={Splash} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="InitialData" component={InitialData} />
      <Screen name="CreatePassword" component={CreatePassword} />
      <Screen name="SuccessFeedback" component={SuccessFeedback} />
    </Navigator>
  );
}
