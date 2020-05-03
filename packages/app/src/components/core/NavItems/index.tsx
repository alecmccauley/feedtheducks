import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import LoopIcon from "@material-ui/icons/Loop";
import StorageIcon from "@material-ui/icons/Storage";
import HomeIcon from "@material-ui/icons/Home";
import { useHistory } from "react-router-dom";

export const MainListItems = () => {
  const history = useHistory();
  const navigate = (route: string) => {
    history.push(route);
  };
  return (
    <div>
      <ListItem
        onClick={() => {
          navigate("/");
        }}
        button
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          navigate("/add");
        }}
      >
        <ListItemIcon>
          <NoteAddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Feeding" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          navigate("/recurring");
        }}
      >
        <ListItemIcon>
          <LoopIcon />
        </ListItemIcon>
        <ListItemText primary="Recurring Feedings" />
      </ListItem>
      <ListItem
        button
        onClick={() => {
          navigate("/all-feedings");
        }}
      >
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="All Feedings Data" />
      </ListItem>
    </div>
  );
};
