import React, { useEffect } from "react";
import firebase from "firebase";
import { Spinner, HStack } from "native-base";

type findProps = {
  navigation: any;
};
const LoadingScreen: React.FC<findProps> = ({ navigation }) => {
  useEffect(() => {
    checkIfLoggedIn();
  });

  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      } else {
        navigation.navigate("LoginScreen");
      }
    });
  };
  return (
    <HStack>
      <Spinner color="primary.1" />
    </HStack>
  );
};

export default LoadingScreen;
