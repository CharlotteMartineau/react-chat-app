import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

type Props = {
  chatrooms: Array,
  setOpenDrawer: Function,
};

const ChatroomsList = ({ chatrooms, setOpenDrawer }: Props) => {
  const navigate = useNavigate();
  let { chatroom_id: chatroomId } = useParams();

  const handleClickListItem = (chatroomId) => {
    navigate(`/chatrooms/${chatroomId}`);
    if (setOpenDrawer) {
      setOpenDrawer(false);
    }
  };

  return (
    <List>
      {chatrooms?.map((chatroom) => (
        <ListItem disablePadding key={chatroom?.name}>
          <ListItemButton
            onClick={() => handleClickListItem(chatroom?.id)}
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
