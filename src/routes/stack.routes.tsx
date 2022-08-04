import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";

import { Splash } from "../screens/Splash";
import { MyCars } from "../screens/MyCars";
import { SignIn } from "../screens/SignIn";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { InitialData } from "../screens/signUp/InitialData";
import { SuccessFeedback } from "../screens/SuccessFeedback";
import { SchedulingDetails } from "../screens/SchedulingDetails";
import { CreatePassword } from "../screens/signUp/CreatePassword";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  const screenOptions = { headerShown: false };
  const homeOptions = { gestureEnabled: false };

  return (
    <Navigator screenOptions={screenOptions} initialRouteName="SignIn">
      {/* <Screen name="Splash" component={Splash} /> */}
      <Screen name="SignIn" component={SignIn} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="InitialData" component={InitialData} />
      <Screen name="CreatePassword" component={CreatePassword} />
      <Screen name="SuccessFeedback" component={SuccessFeedback} />
      <Screen name="Home" component={Home} options={homeOptions} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  );
}
