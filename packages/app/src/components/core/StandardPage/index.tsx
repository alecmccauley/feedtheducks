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

interface StandardPageProps {
  title: string;
  largeWidth?: boolean;
}

const StandardPage: FunctionComponent<StandardPageProps> = ({
  children,
  title,
  largeWidth,
}) => {
  const classes = useStyles();
  return (
    <Container maxWidth={largeWidth ? "lg" : "md"}>
      <CssBaseline />
      <Typography component="h1" variant="h4" align="center" gutterBottom>
        {title}
      </Typography>
      <div className={classes.contentContainer}>{children}</div>
    </Container>
  );
};

export default StandardPage;
