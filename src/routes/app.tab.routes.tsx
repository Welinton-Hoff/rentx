import React from "react";
import { Platform } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home";
import { MyCars } from "../screens/MyCars";

import { useTheme } from "styled-components";
import { AppStackRoutes } from "./app.stack.routes";

import { TabBarIcon } from "../components/TabBarIcon";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  const theme = useTheme();
  const screenOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: getTabBarStyle(),
    tabBarActiveTintColor: theme.colors.main,
    tabBarInactiveTintColor: theme.colors.text_detail,
  };

  function getTabBarStyle() {
    return [
      {
        height: 78,
        paddingVertical: Platform.OS === "ios" ? 20 : 0,
        backgroundColor: theme.colors.background_primary,
      },
    ];
  }

  return (
    <Navigator screenOptions={screenOptions}>
      <Screen
        name="Home"
        component={AppStackRoutes}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon tabName="Home" color={color} />
          ),
        }}
      />

      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon tabName="MyCars" color={color} />
          ),
        }}
      />

      <Screen
        name="Profile"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon tabName="Profile" color={color} />
          ),
        }}
      />
    </Navigator>
  );
}
