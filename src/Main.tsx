import React from "react";

import { NativeBaseProvider } from "native-base";
import Navigation from "./app/navigation/BottomTabNav/BottomTabNav";
import { useColorScheme, Platform } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Montserrat_400Regular } from "@expo-google-fonts/montserrat";

//NativeBaseTheme
import { nativeTheme } from "./app/styles/NativeBaseStyes";

//NormalTheme
import { normalTheme } from "./app/styles/NormalTheme";

//store
import { appearanceStore } from "./app/stores/appearanceStore";
import { authStore } from "./app/stores/authStore";

const Main = () => {
  //fonts
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });
  //checkColorScheme
  const scheme = useColorScheme();
  if (scheme === "dark") {
    appearanceStore.setDarkMode(true);
  } else {
    appearanceStore.setDarkMode(false);
  }
  //checkIosOrAndroid
  if (Platform.OS === "ios") {
    appearanceStore.platform = "ios";
  } else {
    appearanceStore.platform = "android";
  }

  if (!fontsLoaded && authStore.isLoading === false) {
    return <AppLoading />;
  } else {
    return (
      <NativeBaseProvider theme={nativeTheme}>
        <Navigation theme={normalTheme} />
      </NativeBaseProvider>
    );
  }
};

export default Main;
