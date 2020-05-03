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
import AddFeeding from "./components/pages/AddFeeding";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import UserFeedbackContainer from "./components/render/UserFeedbackRender";
import mitt from "mitt";
import { EmitterProvider } from "./contexts/emitter";
import AllFeedings from "./components/pages/AllFeedings";

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

  const emitter: mitt.Emitter = mitt();

  return (
    <EmitterProvider value={emitter}>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <ApolloHooksProvider client={client}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Router>
                <AppRender>
                  <Switch>
                    <Route path="/" exact>
                      <Dashboard />
                    </Route>
                    <Route path="/add">
                      <AddFeeding />
                    </Route>
                    <Route path="/all-feedings">
                      <AllFeedings />
                    </Route>
                  </Switch>
                </AppRender>
              </Router>
              <UserFeedbackContainer />
            </MuiPickersUtilsProvider>
          </ApolloHooksProvider>
        </ApolloProvider>
      </ThemeProvider>
    </EmitterProvider>
  );
}

export default App;
