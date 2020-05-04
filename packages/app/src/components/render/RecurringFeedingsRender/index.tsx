import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import ExploreIcon from "@material-ui/icons/Explore";
import MuiAlert from "@material-ui/lab/Alert";
import React, { FunctionComponent, useState } from "react";
import StandardPage from "../../core/StandardPage";
import { GetRecurringQuery } from "./../../../generated/graphql";

export interface RecurringFeedingsRenderProps {
  recurringFeedings: GetRecurringQuery;
  onToggle: (id: string) => Promise<boolean | undefined>;
  onTriggerDailyFeedings: () => Promise<void>;
}

const RecurringFeedingsRender: FunctionComponent<RecurringFeedingsRenderProps> = ({
  recurringFeedings,
  onToggle,
  onTriggerDailyFeedings,
}) => {
  const [updatedSwitches, setUpdatedSwitches] = useState<any>({});

  return (
    <StandardPage title="Recurring Feedings" largeWidth>
      <Box mb={4}>
        <Grid container spacing={4}>
          <Grid item sm={3}>
            <Button
              fullWidth
              variant="contained"
              color="secondary"
              onClick={onTriggerDailyFeedings}
            >
              Trigger Daily Feedings
            </Button>
          </Grid>
          <Grid item sm={9}>
            <MuiAlert severity="info">
              In real life there would be a running scheduled Lambda function,
              cronjob etc. to trigger the recurring feedings to fire everyday.
              To simulate that for this demo, press the button.
            </MuiAlert>
          </Grid>
        </Grid>
      </Box>
      <MuiAlert severity="info">
        In real life we would have pagination, the ability to sort etc. that has
        been omitted for scope of the assignment.
      </MuiAlert>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>How many Ducks</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Active</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {recurringFeedings.RecurringFeedings.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.numberOfDucks}</TableCell>
                <TableCell>
                  <Tooltip
                    title={`lat: ${row.location.lat}, lng: ${row.location.lng}`}
                  >
                    <IconButton>
                      <ExploreIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <Switch
                    data-testid="active-switch"
                    checked={
                      updatedSwitches[row.id] !== undefined
                        ? updatedSwitches[row.id]
                        : row.active
                    }
                    onChange={(e) => {
                      console.log(updatedSwitches[row.id]);
                      onToggle(row.id).then((r) => {
                        if (r === undefined) return;
                        setUpdatedSwitches({
                          ...updatedSwitches,
                          [row.id]: r,
                        });
                      });
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </StandardPage>
  );
};
export default RecurringFeedingsRender;
