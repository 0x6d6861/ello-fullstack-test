import React from "react";
import AppEntry from "./AppEntry.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme/theme.ts";
import { ApolloProvider } from "@apollo/client";
import client from "./services/apollo-client.ts";

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AppEntry />
        </Provider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
