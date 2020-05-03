import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import FeedingsContainer from "./components/containers/FeedingsContainer";
import AddFeeding from "./components/pages/AddFeeding";
import {
  ThemeProvider,
  useMediaQuery,
  createMuiTheme,
} from "@material-ui/core";
import AppRender from "./components/render/AppRender";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
});

function App() {
  // check if user is in dark mode on their device
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          primary: {
            main: "#2196f3",
          },
          secondary: {
            main: "#ffc107",
          },
          type: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <ApolloHooksProvider client={client}>
          <AppRender>
            <FeedingsContainer />
            <AddFeeding />
          </AppRender>
        </ApolloHooksProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
