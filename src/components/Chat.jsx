/** @jsxImportSource @emotion/react */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChatroomsRequest } from "../redux/ChatroomsRedux";
import ChatMenu from "./ChatMenu";

const Chat = () => {
  const dispatch = useDispatch();
  const chatrooms = useSelector((state) => state.chatrooms.chatrooms);

  React.useEffect(() => {
    dispatch(getChatroomsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ChatMenu chatrooms={chatrooms} />;
};

export default Chat;
