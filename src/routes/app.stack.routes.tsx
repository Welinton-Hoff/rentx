import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";
import { CarDetails } from "../screens/CarDetails";
import { Scheduling } from "../screens/Scheduling";
import { SuccessFeedback } from "../screens/SuccessFeedback";
import { SchedulingDetails } from "../screens/SchedulingDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppStackRoutes() {
  const screenOptions = { headerShown: false };

  return (
    <Navigator screenOptions={screenOptions} initialRouteName="Home">
      <Screen name="Home" component={Home} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SuccessFeedback" component={SuccessFeedback} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
    </Navigator>
  );
}
