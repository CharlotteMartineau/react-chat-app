import React from "react";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type Props = {
  chatrooms: Array,
};

const ChatroomsList = ({ chatrooms }: Props) => {
  return (
    <List>
      {chatrooms.map((chatroom) => (
        <ListItem disablePadding key={chatroom.name}>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary={chatroom.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatroomsList;
