import React, { useEffect } from "react";

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
  useEffect(() => {
    const checkToken = async () => {
      await authStore.checkToken();
    };
    checkToken();
  }, []);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (
    authStore.token &&
    Object.keys(authStore.token).length === 0 &&
    authStore.token.constructor === Object &&
    fontsLoaded
  ) {
    authStore.changeLoggedIn(true);
    authStore.changeLoading(false);
  } else if (fontsLoaded) {
    authStore.changeLoading(false);
  }

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

  if (authStore.isLoading === false && !fontsLoaded) {
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
