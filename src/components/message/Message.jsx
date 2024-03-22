import React from "react";
import { Card, Grid, Typography } from "@mui/material";

type Props = {
  message: Object,
  messageMemberName: String,
  isMine: Boolean,
};

const Message = ({ message, messageMemberName, isMine }: Props) => {
  return (
    <Grid container flexDirection={isMine ? "row-reverse" : "row"}>
      <Grid sx={{ mx: 2, my: 1 }}>
        {!isMine && (
          <Typography sx={{ ml: 1 }} variant="subtitle1">
            {messageMemberName}
          </Typography>
        )}
        <Card variant={isMine ? "contained" : "elevation"} elevation={0}>
          <Typography
            sx={{ p: 1 }}
            variant="body2"
            color={isMine ? "white" : "default"}
          >
            {message?.content}
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Message;
