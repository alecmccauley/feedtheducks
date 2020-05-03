import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import LoopIcon from "@material-ui/icons/Loop";
import StorageIcon from "@material-ui/icons/Storage";
import HomeIcon from "@material-ui/icons/Home";

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <NoteAddIcon />
      </ListItemIcon>
      <ListItemText primary="Add Feeding" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LoopIcon />
      </ListItemIcon>
      <ListItemText primary="Recurring Feedings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StorageIcon />
      </ListItemIcon>
      <ListItemText primary="All Feedings Data" />
    </ListItem>
  </div>
);
