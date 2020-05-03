import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  IconButton,
  Switch,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React, { FunctionComponent, useState } from "react";
import StandardPage from "../../core/StandardPage";
import {
  GetFeedingsQuery,
  GetRecurringQuery,
} from "./../../../generated/graphql";
import ExploreIcon from "@material-ui/icons/Explore";
import { formatRelative } from "date-fns";

export interface RecurringFeedingsRenderProps {
  recurringFeedings: GetRecurringQuery;
  onToggle: (id: string) => Promise<boolean | undefined>;
}

const RecurringFeedingsRender: FunctionComponent<RecurringFeedingsRenderProps> = ({
  recurringFeedings,
  onToggle,
}) => {
  const [updatedSwitches, setUpdatedSwitches] = useState<any>({});

  return (
    <StandardPage title="All Feedings" largeWidth>
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
