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
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import React, { FunctionComponent } from "react";
import StandardPage from "../../core/StandardPage";
import { GetFeedingsQuery } from "./../../../generated/graphql";
import ExploreIcon from "@material-ui/icons/Explore";
import { formatRelative } from "date-fns";
export interface FeedingsRenderProps {
  feedings: GetFeedingsQuery;
}

const FeedingsRender: FunctionComponent<FeedingsRenderProps> = ({
  feedings,
}) => (
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
            <TableCell>What kind of Food</TableCell>
            <TableCell>Location</TableCell>
            <TableCell>How Much Food (in g)</TableCell>
            <TableCell>Date / Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {feedings.Feedings.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.numberOfDucks}</TableCell>
              <TableCell>{row.typeOfFood}</TableCell>
              <TableCell>
                <Tooltip
                  title={`lat: ${row.location.lat}, lng: ${row.location.lng}`}
                >
                  <IconButton>
                    <ExploreIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
              <TableCell>{row.howMuchFood}</TableCell>
              <TableCell>
                {formatRelative(new Date(row.dateTime), new Date())}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </StandardPage>
);
export default FeedingsRender;
