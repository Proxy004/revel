import React from "react";
import { Image, View } from "native-base";
import Icons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const Header = () => {
  return (
    <View style={headerStyle.allHeader}>
      <Image source={require("../../assets/icon_bw.png")} alt="icon" />
      <Icons name="settings" size={25} />
    </View>
  );
};

const headerStyle = StyleSheet.create({
  allHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: "center",
  },
});
export default Header;
