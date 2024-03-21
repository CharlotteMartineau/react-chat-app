/** @jsxImportSource @emotion/react */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Divider,
  Fade,
  Grid,
  IconButton,
  LinearProgress,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { resetOnLogout } from "../redux/AuthenticationRedux";
import ChatroomsList from "./ChatroomsList";

const css = {
  stickyHeader: {
    backgroundColor: "white",
  },
};

type Props = {
  chatrooms: Array,
};

const ChatMenu = ({ chatrooms }: Props) => {
  const dispatch = useDispatch();
  const isFetching = useSelector(
    (state) => state.chatrooms.isFetching.getChatrooms
  );
  const hasChatrooms = chatrooms?.length > 0;

  const onSignOut = () => {
    dispatch(resetOnLogout());
  };

  return (
    <>
      <Fade in={isFetching} style={{ transitionDelay: "600ms" }}>
        <LinearProgress />
      </Fade>
      <Grid
        container
        sx={{ px: 2 }}
        flexDirection="column"
        justifyContent="space-between"
        wrap="nowrap"
        height="100vh"
      >
        <Grid item overflow="auto">
          <Grid position="sticky" top={0} zIndex={1} css={css.stickyHeader}>
            <Typography component="h1" variant="h6" sx={{ p: 2 }}>
              Discussions
            </Typography>
            <Divider />
          </Grid>
          {hasChatrooms ? (
            <ChatroomsList chatrooms={chatrooms} />
          ) : (
            !isFetching && (
              <Typography textAlign="center" sx={{ m: 4 }}>
                Vous n'avez pas encore de conversation !
              </Typography>
            )
          )}
        </Grid>
        <Grid item>
          <Divider />
          <IconButton
            aria-label="logout"
            onClick={onSignOut}
            css={{ margin: 8 }}
          >
            <LogoutIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default ChatMenu;
