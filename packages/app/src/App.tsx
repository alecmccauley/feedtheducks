import React from "react";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import "./index.css";
import FeedingsContainer from "./components/containers/FeedingsContainer";
import AddFeedingContainer from "./components/containers/AddFeedingContainer";

const client = new ApolloClient({
  uri: "http://localhost:3000/dev/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <FeedingsContainer />
        <AddFeedingContainer
          onSubmit={(values: any, setSubmitting: any) => {
            setSubmitting(false);
          }}
        />
      </ApolloHooksProvider>
    </ApolloProvider>
  );
}

export default App;
