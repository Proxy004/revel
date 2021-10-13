import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { Pressable, Image } from "native-base";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";
WebBrowser.maybeCompleteAuthSession();

const FacebookLogin = () => {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    responseType: ResponseType.Code,
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      authStore.setToken(code);
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
        source={require("../../assets/facebook.png")}
        alt="google"
        style={{
          height: 70,
          maxWidth: "75%",

          resizeMode: "contain",
        }}
      />
    </Pressable>
  );
};

export default inject("authStore")(observer(FacebookLogin));
