import React from "react";
import { extendTheme } from "native-base";
import { appearanceStore } from "../stores/appearanceStore";

export const nativeTheme = extendTheme({
  fontConfig: {
    100: {
      normal: "Montserrat_400Regular",
    },
  },
  fonts: {
    heading: "Montserrat_400Regular",
    body: "Montserrat_400Regular",
    mono: "Montserrat_400Regular",
  },
  colors: {
    primary: {
      1: "#666ADB",
      2: "#2F34B9",
      3: "#55DF75",
      4: "#9F9F9F",
      5: "#616161",
    },

    amber: {
      400: "#d97706",
    },
  },
  config: {
    initialColorMode: appearanceStore.darkModeText,
  },
});
