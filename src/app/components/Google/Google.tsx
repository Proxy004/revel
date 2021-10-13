import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { Pressable, Image } from "native-base";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";

WebBrowser.maybeCompleteAuthSession();

const GoogleLogIn = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.GOOGLE_CLIENT_ID,
    webClientId: process.env.GOOGEL_WEB_CLIENT_ID,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      authStore.setToken(authentication);
      console.log(authentication);
      authStore.changeLoggedIn(true);
    }
  }, [response]);

  return (
    <Pressable
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
    >
      <Image
        source={require("../../assets/google.png")}
        alt="google"
        style={{
          height: 71,
          maxWidth: "75%",

          resizeMode: "contain",
        }}
      />
    </Pressable>
  );
};

export default inject("authStore")(observer(GoogleLogIn));
