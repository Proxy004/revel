import React from "react";
import { NativeBaseProvider, extendTheme, View } from "native-base";
import Navigation from "./app/navigation/BottomTabNav/BottomTabNav";

//containers
import Find from "./app/containers/Find/Find";
import Home from "./app/containers/Home/Home";
import New from "./app/containers/New/New";
import Profile from "./app/containers/Profile/Profile";

const Main = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },

      amber: {
        400: "#d97706",
      },
    },
    config: {
      initialColorMode: "white",
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Navigation home={Home} find={Find} newTab={New} profile={Profile} />
    </NativeBaseProvider>
  );
};
export default Main;
