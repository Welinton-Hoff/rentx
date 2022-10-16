import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { useAuth } from "../hooks/Auth";
import { AuthRoutes } from "./auth.routes";
import { AppTabRoutes } from "./app.tab.routes";
import { LoaderAnimated } from "../components/LoaderAnimated";

export function Routes() {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoaderAnimated />;
  }

  return (
    <NavigationContainer>
      {user.id ? <AppTabRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
