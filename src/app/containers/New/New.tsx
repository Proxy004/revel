import React from "react";
import { View, Text } from "react-native";
type findProps = {
  navigation: any;
};
const New: React.FC<findProps> = ({ navigation }) => {
  return (
    <View>
      <Text>New</Text>
    </View>
  );
};

export default New;
