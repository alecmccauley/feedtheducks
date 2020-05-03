import {
  Container,
  CssBaseline,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { FunctionComponent } from "react";

const useStyles = makeStyles((theme) => ({
  contentContainer: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

const StandardPage: FunctionComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="md">
      <CssBaseline />
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        Welcome
      </Typography>
      <div className={classes.contentContainer}>{children}</div>
    </Container>
  );
};

export default StandardPage;
