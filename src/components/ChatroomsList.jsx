import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type Props = {
  chatrooms: Array,
};

const ChatroomsList = ({ chatrooms }: Props) => {
  const navigate = useNavigate();
  let { chatroom_id: chatroomId } = useParams();
  return (
    <List>
      {chatrooms?.map((chatroom) => (
        <ListItem disablePadding key={chatroom?.name}>
          <ListItemButton
            onClick={() => navigate(`/chatrooms/${chatroom?.id}`)}
            selected={chatroom?.id?.toString() === chatroomId}
          >
            <ListItemText primary={chatroom?.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatroomsList;
