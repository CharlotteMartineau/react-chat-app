import React from "react";
import {
  CardHeader,
  Divider,
  Grid,
  Hidden,
  IconButton,
  Paper,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";

type Props = {
  chatroom: Object,
  membersNames: String,
  setOpenDrawer: Function,
};

const RoomHeader = ({ chatroom, membersNames, setOpenDrawer }: Props) => {
  return (
    <Grid position="sticky" top={0} zIndex={1}>
      <Paper variant="contained">
        <CardHeader
          avatar={
            <Hidden smUp>
              <IconButton onClick={() => setOpenDrawer(true)}>
                <MenuIcon />
              </IconButton>
            </Hidden>
          }
          action={
            <IconButton aria-label="show members" disabled>
              <MoreVertIcon />
            </IconButton>
          }
          title={chatroom?.name}
          titleTypographyProps={{ variant: "body1" }}
          subheader={membersNames}
          subheaderTypographyProps={{ variant: "subtitle1" }}
          sx={{ pr: 3 }}
        />
        <Divider sx={{ mx: 2 }} />
      </Paper>
    </Grid>
  );
};

export default RoomHeader;
