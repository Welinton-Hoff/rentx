import React from "react";

import { AuthProvider } from "./Auth";
import { AuthProviderProps } from "./Auth/types";

function AppProvider({ children }: AuthProviderProps) {
  return <AuthProvider>{children}</AuthProvider>;
}

export { AppProvider };
