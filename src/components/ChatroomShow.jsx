/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Drawer,
  Fade,
  Grid,
  Hidden,
  LinearProgress,
  useTheme,
} from "@mui/material";
import {
  createChatroomMessageSuccess,
  getChatroomRequest,
} from "../redux/ChatroomsRedux";
import ChatMenu from "./ChatMenu";
import RoomHeader from "./RoomHeader";
import MessageForm from "./message/MessageForm";
import { getMembersName } from "../helpers/memberHelper";
import { subscribeChannel, unsubscribeChannel } from "../config/webSocket";
import RoomMessages from "./message/RoomMessages";
import MemberFormDialog from "./MemberFormDialog";

const ChatroomShow = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  let { chatroom_id: chatroomId } = useParams();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const chatrooms = useSelector((state) => state.chatrooms.chatrooms);
  const chatroom = useSelector((state) => state.chatrooms.chatroom);
  const isFetching = useSelector(
    (state) => state.chatrooms.isFetching.getChatroom
  );
  const error = useSelector((state) => state.chatrooms.errors.getChatroom);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openAddMemberFormDialog, setOpenAddMemberFormDialog] = useState(false);

  const token = currentUser?.token;
  const chatroomMessages = chatroom?.messages;
  const chatroomMemberships = chatroom?.chatroom_memberships;
  const isCurrentChatroom = chatroom?.id?.toString() === chatroomId;
  const isChatroomFetched =
    chatroom && isCurrentChatroom && !isFetching && !error;

  useEffect(() => {
    dispatch(getChatroomRequest(chatroomId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatroomId]);

  useEffect(() => {
    const subscription = subscribeChannel(token, chatroom?.id, {
      received: (message) => {
        if (message?.user_id !== currentUser?.id) {
          dispatch(createChatroomMessageSuccess(message));
        }
      },
    });
    return () => {
      if (subscription) unsubscribeChannel(subscription);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatroom?.id, token]);

  return (
    <Grid container>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <ChatMenu chatrooms={chatrooms} setOpenDrawer={setOpenDrawer} />
      </Drawer>
      <Hidden only={["xs"]}>
        <Grid item sm={4}>
          <ChatMenu chatrooms={chatrooms} />
        </Grid>
      </Hidden>
      <Grid
        item
        xs={12}
        sm={8}
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
                membersName={getMembersName(chatroomMemberships, currentUser)}
                setOpenDrawer={setOpenDrawer}
                setOpenAddMemberFormDialog={setOpenAddMemberFormDialog}
              />
              <RoomMessages chatroomMessages={chatroomMessages} />
            </Grid>
            <MessageForm />
          </>
        )}
      </Grid>
      <MemberFormDialog
        open={openAddMemberFormDialog}
        onClose={() => setOpenAddMemberFormDialog(false)}
      />
    </Grid>
  );
};

export default ChatroomShow;
