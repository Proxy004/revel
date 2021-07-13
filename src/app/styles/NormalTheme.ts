import React from "react";
import { extendTheme } from "native-base";
import { appearanceStore } from "../stores/appearanceStore";

export const normalTheme = extendTheme({
  dark: appearanceStore.darkModeBool,
  colors: {
    primary: "rgb(102, 106, 219)",
    background: "rgb(242, 242, 242)",
    card: "rgb(255, 255, 255)",
    text: "rgb(28, 28, 30)",
    border: "rgb(199, 199, 204)",
    notification: "rgb(255, 69, 58)",
  },
});
