import React from "react";
import AppEntry from "./AppEntry.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme.ts";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AppEntry />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
