import React from "react";
import Main from "./src/Main";
import { Provider } from "mobx-react";

import { authStore } from "./src/app/stores/authStore";
import { appearanceStore } from "./src/app/stores/appearanceStore";

const RootStore = {
  authStore,
  appearanceStore,
};

const App = () => {
  return (
    <Provider {...RootStore}>
      <Main />
    </Provider>
  );
};

export default App;
