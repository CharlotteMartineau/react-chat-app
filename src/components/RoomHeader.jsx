import React from "react";
import { CardHeader, Divider, Grid, IconButton, Paper } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

type Props = {
  chatroom: Object,
  membersNames: String,
};

const RoomHeader = ({ chatroom, membersNames }: Props) => {
  return (
    <Grid position="sticky" top={0} zIndex={1}>
      <Paper variant="contained">
        <CardHeader
          action={
            <IconButton aria-label="show members" disabled>
              <MoreVertIcon />
            </IconButton>
          }
          title={chatroom?.name}
          titleTypographyProps={{ variant: "body1" }}
          subheader={membersNames}
          subheaderTypographyProps={{ variant: "subtitle1" }}
          sx={{ px: 3 }}
        />
        <Divider sx={{ mx: 2 }} />
      </Paper>
    </Grid>
  );
};

export default RoomHeader;
