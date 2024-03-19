/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatroomsRequest } from "../redux/ChatroomsRedux";
import ChatMenu from "./ChatMenu";

const Chat = () => {
  const dispatch = useDispatch();
  const shouldGetChatrooms = useRef(true);
  const chatrooms = useSelector((state) => state.chatrooms.chatrooms);

  useEffect(() => {
    if (shouldGetChatrooms.current) {
      shouldGetChatrooms.current = false;
      dispatch(getChatroomsRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ChatMenu chatrooms={chatrooms} />;
};

export default Chat;
