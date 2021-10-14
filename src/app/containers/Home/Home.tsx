import React, { useState, useEffect } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { View, Box, Text } from "native-base";
import MapView from "react-native-maps";

const Home = () => {
  const [region, setRegion] = useState({
    latitude: Number,
    longitude: Number,
    latitudeDelta: Number,
    longitudeDelta: Number,
  });

  return (
    <Box safeArea>
      <Text fontFamily="body" fontWeight={100} fontStyle="normal">
        <MapView style={homeStyles.map} />
        <Box></Box>
      </Text>
    </Box>
  );
};
const homeStyles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height:
      Dimensions.get("window").height -
      (Dimensions.get("window").height / 100) * 40,
  },
});

export default Home;
