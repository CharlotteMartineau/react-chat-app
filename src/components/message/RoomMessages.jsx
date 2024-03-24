/** @jsxImportSource @emotion/react */
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import Message from "./Message";
import {
  getMessageDate,
  getMessageMemberName,
} from "../../helpers/messageHelper";

type Props = {
  chatroomMessages: Array,
  chatroomMembers: Array,
};

const RoomMessages = ({ chatroomMessages, chatroomMembers }: Props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const messagesEndRef = useRef();

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "instant" });
  }, [chatroomMessages]);

  return (
    <Grid>
      {chatroomMessages?.map((message, i) => (
        <Message
          key={message?.id}
          message={message}
          messageMemberName={getMessageMemberName(
            chatroomMembers,
            message,
            chatroomMessages[i - 1] || null
          )}
          isMine={message?.user_id === currentUser?.id}
          messageDate={getMessageDate(message, chatroomMessages[i - 1] || null)}
        />
      ))}
      <div ref={messagesEndRef} />
    </Grid>
  );
};

export default RoomMessages;
