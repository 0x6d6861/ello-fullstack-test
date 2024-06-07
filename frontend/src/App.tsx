import React from "react";
import AppEntry from "./AppEntry.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

function App() {
  return (
    <Provider store={store}>
      <AppEntry />
    </Provider>
  );
}

export default App;
