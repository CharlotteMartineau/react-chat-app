import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { getMembersName } from "../helpers/memberHelper";
import { useSelector } from "react-redux";

type Props = {
  chatrooms: Array,
  setOpenDrawer: Function,
};

const ChatroomsList = ({ chatrooms, setOpenDrawer }: Props) => {
  const navigate = useNavigate();
  let { chatroom_id: chatroomId } = useParams();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const handleClickListItem = (chatroomId) => {
    navigate(`/chatrooms/${chatroomId}`);
    if (setOpenDrawer) {
      setOpenDrawer(false);
    }
  };

  return (
    <List>
      {chatrooms?.map((chatroom) => (
        <ListItem disablePadding key={chatroom?.id}>
          <ListItemButton
            onClick={() => handleClickListItem(chatroom?.id)}
            selected={chatroom?.id?.toString() === chatroomId}
          >
            <ListItemText
              primary={
                chatroom?.name ||
                getMembersName(chatroom?.chatroom_memberships, currentUser)
              }
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default ChatroomsList;
