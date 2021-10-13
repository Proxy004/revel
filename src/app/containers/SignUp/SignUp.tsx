import React from "react";
import { StyleSheet } from "react-native";
import { Stack, Image } from "native-base";
import { Video } from "expo-av";
import Google from "../../components/Google/Google";
import Facebook from "../../components/Facebook/Facebook";
import { StatusBar } from "native-base";
import { alignItems } from "styled-system";

const SignUp = () => {
  return (
    <>
      <Image
        source={require("../../assets/logoWhite.png")}
        alt="Revel"
        style={styles.logo}
      />
      <Stack
        safeAreaBottom
        safeAreaTop={false}
        direction="column"
        style={styles.allSignUpForm}
      >
        <StatusBar barStyle="light-content" />
        <Video
          source={require("../../assets/signupvideo.mp4")}
          isLooping
          isMuted
          resizeMode={"cover"}
          shouldPlay
          style={styles.video}
        />

        <Google />
        <Facebook />
      </Stack>
    </>
  );
};
const styles = StyleSheet.create({
  allSignUpForm: {
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    maxWidth: "37%",
    resizeMode: "contain",
    position: "absolute",
    marginTop: "50%",
    zIndex: 50,
  },
  video: {
    width: "150%",
    height: "150%",
    position: "absolute",
  },
});
export default SignUp;
