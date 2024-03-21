/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Fade, Grid, LinearProgress, useTheme } from "@mui/material";
import { getChatroomRequest } from "../redux/ChatroomsRedux";
import ChatMenu from "./ChatMenu";
import Message from "./message/Message";
import RoomHeader from "./RoomHeader";
import MessageForm from "./message/MessageForm";

const ChatroomShow = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  let { chatroom_id: chatroomId } = useParams();
  const chatrooms = useSelector((state) => state.chatrooms.chatrooms);
  const chatroom = useSelector((state) => state.chatrooms.chatroom);
  const isFetching = useSelector(
    (state) => state.chatrooms.isFetching.getChatroom
  );
  const error = useSelector((state) => state.chatrooms.error);

  const isChatroomFetched =
    chatroom &&
    chatroom?.id?.toString() === chatroomId &&
    !isFetching &&
    !error;

  useEffect(() => {
    dispatch(getChatroomRequest(chatroomId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatroomId]);

  return (
    <Grid container>
      <Grid item xs={4}>
        <ChatMenu chatrooms={chatrooms} />
      </Grid>
      <Grid
        item
        xs={8}
        container
        flexDirection="column"
        justifyContent="space-between"
        wrap="nowrap"
        height="100vh"
        css={{ backgroundColor: theme.palette.secondary.main }}
      >
        <Fade in={isFetching} style={{ transitionDelay: "600ms" }}>
          <LinearProgress />
        </Fade>
        {isChatroomFetched && (
          <>
            <Grid
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              flexGrow={1}
              overflow="auto"
            >
              <RoomHeader
                chatroom={chatroom}
                isChatroomFetched={isChatroomFetched}
              />
              <Grid>
                {chatroom?.messages?.map((message) => (
                  <Message message={message} key={message?.id} />
                ))}
              </Grid>
            </Grid>
            <MessageForm />
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default ChatroomShow;
