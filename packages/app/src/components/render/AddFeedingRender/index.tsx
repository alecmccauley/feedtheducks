import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Field, useFormikContext } from "formik";
import { TextField } from "formik-material-ui";
import React, { FunctionComponent } from "react";
import { DateTimePicker } from "formik-material-ui-pickers";
const useStyles = makeStyles((theme) => ({
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

const AddFeedingRender: FunctionComponent = () => {
  const classes = useStyles();
  const { isSubmitting, submitForm } = useFormikContext();

  return (
    <div className={classes.form}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name="name"
            label="What's your name?"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name="numberOfDucks"
            label="How many ducks did you feed?"
            variant="outlined"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name="howMuchFood"
            label="How much food did you feed them (in g)?"
            variant="outlined"
            type="number"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name="typeOfFood"
            label="What kind of food did you feed them?"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            component={DateTimePicker}
            label="When did you feed them?"
            name="dateTime"
            fullWidth
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
  );
};

export default AddFeedingRender;
