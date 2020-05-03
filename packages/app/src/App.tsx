import {
  createMuiTheme,
  ThemeProvider,
  useMediaQuery,
} from "@material-ui/core";
import ApolloClient from "apollo-boost";
import React from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import AppRender from "./components/render/AppRender";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Dashboard from "./components/pages/Dashboard";

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
          <Router>
            <AppRender>
              <Switch>
                <Route path="/">
                  <Dashboard />
                </Route>
              </Switch>
            </AppRender>
          </Router>
        </ApolloHooksProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
