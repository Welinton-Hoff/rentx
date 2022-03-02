import React from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";

import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import {
  Archivo_500Medium,
  Archivo_400Regular,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";

import theme from "./src/styles/theme";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
    Archivo_500Medium,
    Archivo_400Regular,
    Archivo_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
