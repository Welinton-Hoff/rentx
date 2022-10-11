import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/Auth";
import { AuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
