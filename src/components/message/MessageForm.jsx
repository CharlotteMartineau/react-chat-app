import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  FilledInput,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { createChatroomMessageRequest } from "../../redux/ChatroomsRedux";
import { useParams } from "react-router-dom";

const MessageForm = () => {
  const dispatch = useDispatch();
  let { chatroom_id: chatroomId } = useParams();
  const isFetching = useSelector(
    (state) => state.chatrooms.isFetching.createChatroomMessage
  );
  const [message, setMessage] = useState("");
  const isIconDisabled = isFetching || !message.trim();

  const handleClickSubmit = () => {
    const messageAttributes = {
      chatroom_id: chatroomId,
      message_content: message,
    };
    dispatch(createChatroomMessageRequest(messageAttributes));
    setMessage("");
  };

  return (
    <Paper variant="contained" sx={{ p: 2 }}>
      <FilledInput
        id="message-form"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        disableUnderline
        fullWidth
        multiline
        autoFocus
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="send message"
              type="submit"
              size="small"
              onClick={handleClickSubmit}
              disabled={isIconDisabled}
            >
              {isFetching ? (
                <CircularProgress size={24} color="disabled" />
              ) : (
                <SendIcon
                  color={isIconDisabled ? "disabled" : "primary"}
                  fontSize="small"
                />
              )}
            </IconButton>
          </InputAdornment>
        }
        sx={{ px: 1.5, py: 1 }}
      />
    </Paper>
  );
};

export default MessageForm;
