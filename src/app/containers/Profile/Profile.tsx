import React from "react";
import { View, Text } from "react-native";
type findProps = {
  navigation: any;
};
const Profile: React.FC<findProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;
