import React from "react";
import { inject, observer } from "mobx-react";
import { Button, VStack, Text } from "native-base";
import { authStore } from "../../stores/authStore";
type findProps = {
  navigation: any;
};
const Profile: React.FC<findProps> = ({ navigation }) => {
  return (
    <VStack
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Text>Profile</Text>

      <Button
        onPress={() => {
          authStore.changeLoggedIn(false);
        }}
      >
        Logout
      </Button>
    </VStack>
  );
};

export default inject("authStore")(observer(Profile));
