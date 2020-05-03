import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import ducky from "./RubberDucky.png";
import StandardPage from "../../core/StandardPage";

const useStyles = makeStyles((theme) => ({
  duck: {
    maxWidth: 150,
  },
  duckContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <StandardPage title="Welcome">
      <Grid container spacing={4}>
        <Grid item md={3} sm={12}>
          <div className={classes.duckContainer}>
            <img className={classes.duck} src={ducky} alt="Rubber Duck" />
          </div>
        </Grid>
        <Grid item md={9}>
          <Typography component="div" gutterBottom>
            <p>
              Thanks for helping us feed the ducks. In real life you'd have to
              login to use this app, but to keep things simple that step has
              been eliminated from this sample project.
            </p>
            <p>
              To get started click the add button on the left to add a new
              feeding, the recurring button to manage recurring feedings that
              have been added, and the all data button to see all past feeding
              data.
            </p>
            <p>
              Normally, you'd only see your own data, and someone with an
              "admin" role would see everything, but as we don't have
              authentication for the demo, so everything is available to
              everyone.
            </p>
          </Typography>
        </Grid>
      </Grid>
    </StandardPage>
  );
};

export default Dashboard;
