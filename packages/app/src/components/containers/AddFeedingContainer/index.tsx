import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Field, Formik } from "formik";
import React, { FunctionComponent } from "react";
import validation from "./validation";
import { TextField } from "formik-material-ui";
// TEMP WIL MOVE
interface AddFeedingInput {
  numberOfDucks: number;
}

export interface AddFeedingContainerProps {
  onSubmit: (
    values: AddFeedingInput,
    setSubmitting: (isSubmitting: boolean) => void
  ) => void;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(3),
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
  },
  subtext: {
    marginTop: theme.spacing(3),
  },
  pickMenu: {
    width: "100%",
  },
}));

const AddFeedingContainer: FunctionComponent<AddFeedingContainerProps> = ({
  onSubmit,
}) => {
  const classes = useStyles();

  const initialValues: AddFeedingInput = {
    numberOfDucks: 0,
  };

  return (
    <div className={classes.paper}>
      <Typography variant="h6">Feed the Ducks!</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validation}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values, setSubmitting);
        }}
      >
        {({ submitForm, isSubmitting }) => (
          <div className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Field
                  component={TextField}
                  name="numberOfDucks"
                  label="How many ducks did you feed?"
                  rowsMax="10"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Box textAlign="center">
              <Button
                variant="contained"
                color="secondary"
                disabled={isSubmitting}
                onClick={submitForm}
                className={classes.submit}
                size="large"
                startIcon={<PostAddIcon />}
              >
                Record Feeding
              </Button>
            </Box>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default AddFeedingContainer;
