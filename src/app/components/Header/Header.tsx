import React from "react";
import { Image, View } from "native-base";
import Icons from "react-native-vector-icons/Ionicons";
import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const width = Dimensions.get("window").width;
const Header = () => {
  return (
    <View style={headerStyle.allHeader}>
      <Image
        size={12}
        source={require("../../assets/RevelBWNew.png")}
        alt={"Icon"}
        width={240}
      />
      <Icons name="settings" size={30} style={{ paddingRight: 15 }} />
    </View>
  );
};

const headerStyle = StyleSheet.create({
  allHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: width,
    paddingRight: 15,
    alignItems: "center",
  },
});
export default Header;
