import React from "react";
import { View, Text } from "react-native";
type findProps = {
  navigation: any;
};
const Chat: React.FC<findProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Chat</Text>
    </View>
  );
};

export default Chat;
