/** @jsxImportSource @emotion/react */
import React from "react";
import { useDispatch } from "react-redux";
import { css } from "@emotion/react";
import { Divider, Grid, IconButton, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { resetOnLogout } from "../redux/AuthenticationRedux";
import ChatroomsList from "./ChatroomsList";

const chatMenuCss = {
  layout: css({
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  }),
  overflow: {
    overflow: "auto",
  },
  stickyHeader: {
    backgroundColor: "white",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
};

type Props = {
  chatrooms: Array,
};

const ChatMenu = ({ chatrooms }: Props) => {
  const dispatch = useDispatch();
  const hasChatrooms = chatrooms.length > 0;

  const onSignOut = () => {
    dispatch(resetOnLogout());
  };

  return (
    <Grid container sx={{ px: 2 }} css={chatMenuCss.layout}>
      <Grid item css={chatMenuCss.overflow}>
        <Grid css={chatMenuCss.stickyHeader}>
          <Typography component="h1" variant="h6" sx={{ p: 2 }}>
            Discussions
          </Typography>
          <Divider />
        </Grid>
        {hasChatrooms ? (
          <ChatroomsList chatrooms={chatrooms} />
        ) : (
          <Typography textAlign="center" sx={{ m: 4 }}>
            Vous n'avez pas encore de conversation !
          </Typography>
        )}
      </Grid>
      <Grid item>
        <Divider />
        <IconButton aria-label="logout" onClick={onSignOut} css={{ margin: 8 }}>
          <LogoutIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default ChatMenu;
