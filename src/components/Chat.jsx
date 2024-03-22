import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatroomsRequest } from "../redux/ChatroomsRedux";
import ChatMenu from "./ChatMenu";
import { Navigate } from "react-router-dom";

const Chat = () => {
  const dispatch = useDispatch();
  const shouldGetChatrooms = useRef(true);
  const chatrooms = useSelector((state) => state.chatrooms.chatrooms);
  const hasChatroom = chatrooms.length > 0;
  const firstChatroomId = hasChatroom && chatrooms[0]?.id;

  useEffect(() => {
    if (shouldGetChatrooms.current) {
      shouldGetChatrooms.current = false;
      dispatch(getChatroomsRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {hasChatroom && <Navigate to={`/chatrooms/${firstChatroomId}`} />}
      <ChatMenu chatrooms={chatrooms} />
    </>
  );
};

export default Chat;
