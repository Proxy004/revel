import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Facebook from "expo-auth-session/providers/facebook";
import { ResponseType } from "expo-auth-session";
import { Button } from "react-native";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";
WebBrowser.maybeCompleteAuthSession();

const FacebookLogin = () => {
  const [request, response, promptAsync] = Facebook.useAuthRequest({
    clientId: process.env.FACEBOOK_CLIENT_ID,
    responseType: ResponseType.Code,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
      authStore.changeLoggedIn(true);
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Login"
      onPress={() => {
        promptAsync();
      }}
    />
  );
};

export default inject("authStore")(observer(FacebookLogin));
