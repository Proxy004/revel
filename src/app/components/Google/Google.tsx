import * as React from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { IconButton } from "native-base";
import { authStore } from "../../stores/authStore";
import { inject, observer } from "mobx-react";

WebBrowser.maybeCompleteAuthSession();

const GoogleLogIn = () => {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: process.env.GOOGLE_CLIENT_ID,
    webClientId: process.env.GOOGEL_WEB_CLIENT_ID,
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      console.log(authentication);
      authStore.changeLoggedIn(true);
    }
  }, [response]);

  return (
    <IconButton
      disabled={!request}
      onPress={() => {
        promptAsync();
      }}
      icon={require("../../assets/google.png")}
    />
  );
};

export default inject("authStore")(observer(GoogleLogIn));
