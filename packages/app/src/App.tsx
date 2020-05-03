import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import FeedingsContainer from "./components/containers/FeedingsContainer";
import AddFeeding from "./components/pages/AddFeeding";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <FeedingsContainer />
        <AddFeeding />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
