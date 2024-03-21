import React from "react";
import { useSelector } from "react-redux";
import { Card, Grid, Typography } from "@mui/material";

type Props = {
  message: Object,
};

const Message = ({ message }: Props) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const isMine = message?.user_id === currentUser?.id;

  return (
    <Grid container flexDirection={isMine ? "row-reverse" : "row"}>
      <Card
        sx={{ mx: 2, my: 1 }}
        variant={isMine ? "contained" : "elevation"}
        elevation={0}
      >
        <Typography
          sx={{ p: 1 }}
          variant="body2"
          color={isMine ? "white" : "default"}
        >
          {message?.content}
        </Typography>
      </Card>
    </Grid>
  );
};

export default Message;
