import React from "react";
import { StyleSheet } from "react-native";
import { View, Box, Text } from "native-base";
type findProps = {
  navigation: any;
};
const Home: React.FC<findProps> = ({ navigation }) => {
  return (
    <Box safeArea>
      <Text fontFamily="body" fontWeight={100} fontStyle="normal">
        Home
      </Text>
    </Box>
  );
};
const homeStyles = StyleSheet.create({});

export default Home;
