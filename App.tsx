import React from "react";
import Main from "./src/Main";
import { Provider } from "mobx-react";

import { authStore } from "./src/app/stores/authStore";
import { appearanceStore } from "./src/app/stores/appearanceStore";
import { userStore } from "./src/app/stores/userStore";
const RootStore = {
  authStore,
  appearanceStore,
  userStore,
};

const App = () => {
  return (
    <Provider {...RootStore}>
      <Main />
    </Provider>
  );
};

export default App;
