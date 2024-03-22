import React from "react";
import { Card, Grid, Typography } from "@mui/material";

type Props = {
  message: Object,
  messageMemberName: String,
  isMine: Boolean,
  messageDate: String,
};

const Message = ({
  message,
  messageMemberName,
  isMine,
  messageDate,
}: Props) => {
  return (
    <Grid>
      {messageDate && (
        <Typography textAlign="center" variant="subtitle1" sx={{ m: 1 }}>
          {messageDate}
        </Typography>
      )}
      <Grid container flexDirection={isMine ? "row-reverse" : "row"}>
        <Grid sx={{ mx: 2, mb: 0.5 }}>
          {!isMine && messageMemberName && (
            <Typography sx={{ ml: 1, mt: 2 }} variant="subtitle1">
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
    </Grid>
  );
};

export default Message;
