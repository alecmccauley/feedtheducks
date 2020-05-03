import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PostAddIcon from "@material-ui/icons/PostAdd";
import { Field, useFormikContext } from "formik";
import { TextField, Switch } from "formik-material-ui";
import { DateTimePicker } from "formik-material-ui-pickers";
import React, { FunctionComponent, useState } from "react";
import { Typography, CircularProgress } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 1, 2),
  },
  loadingLocation: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const AddFeedingRender: FunctionComponent = () => {
  const [loadingLocation, setLoadingLocation] = useState(false);
  const classes = useStyles();
  const { isSubmitting, submitForm, setFieldValue } = useFormikContext();

  const getUserLocation = () => {
    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (p) => {
        setFieldValue("lat", p.coords.latitude);
        setFieldValue("lng", p.coords.longitude);
        setLoadingLocation(false);
      },
      () => {
        //handle error
        setLoadingLocation(false);
      }
    );
  };

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
          Where did you feed them?
          <Typography variant="caption" color="textSecondary" component="div">
            Note: In real life we'd have other ways to locate yourself,
            autocomplete using the Google Maps Geolocate API. Kept simpl for
            demo, click the "Locate Me" button to populate your current
            location.
          </Typography>
        </Grid>
        {loadingLocation ? (
          <>
            <Grid xs={12} className={classes.loadingLocation}>
              <CircularProgress />
            </Grid>
          </>
        ) : (
          <>
            <Grid item xs={4}>
              <Field
                component={TextField}
                name="lat"
                label="Latitude"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Field
                component={TextField}
                name="lng"
                label="Longitude"
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <Button color="primary" onClick={getUserLocation}>
                Locate Me
              </Button>
            </Grid>
          </>
        )}
        <Grid item xs={12}>
          <Field
            component={DateTimePicker}
            label="When did you feed them?"
            name="dateTime"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field component={Switch} name="recurring" />
          <Typography variant="caption">Make recurring daily?</Typography>
        </Grid>
      </Grid>
      <Box textAlign="center">
        <Button
          variant="contained"
          color="secondary"
          disabled={isSubmitting || loadingLocation}
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
