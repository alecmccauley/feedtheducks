import React from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import "./index.css";
import FeedingsContainer from "./components/containers/FeedingsContainer";

const client = new ApolloClient({
  uri: "http://localhost:3000/dev/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <FeedingsContainer />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
