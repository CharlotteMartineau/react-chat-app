import React from "react";
import {
  CardHeader,
  Divider,
  Grid,
  Hidden,
  IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";

type Props = {
  chatroom: Object,
  membersNames: String,
  setOpenDrawer: Function,
  setOpenAddMemberFormDialog: Function,
};

const RoomHeader = ({
  chatroom,
  membersName,
  setOpenDrawer,
  setOpenAddMemberFormDialog,
}: Props) => {
  const [actionMenuAnchor, setActionMenuAnchor] = React.useState(null);

  const handleClickAddMember = () => {
    setOpenAddMemberFormDialog(true);
    setActionMenuAnchor(null);
  };

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
            <>
              <IconButton
                aria-label="More actions"
                onClick={(event) => setActionMenuAnchor(event.currentTarget)}
              >
                <MoreVertIcon />
              </IconButton>
              <Menu
                id="actions-menu"
                open={Boolean(actionMenuAnchor)}
                anchorEl={actionMenuAnchor}
                onClose={() => setActionMenuAnchor(null)}
              >
                <MenuItem onClick={handleClickAddMember}>
                  <ListItemIcon>
                    <AddIcon />
                  </ListItemIcon>
                  <ListItemText>Ajouter un membre</ListItemText>
                </MenuItem>
              </Menu>
            </>
          }
          title={chatroom?.name || membersName}
          titleTypographyProps={{ variant: "body1" }}
          subheader={chatroom?.name && membersName}
          subheaderTypographyProps={{ variant: "subtitle1" }}
          sx={{ pr: 3 }}
        />
        <Divider sx={{ mx: 2 }} />
      </Paper>
    </Grid>
  );
};

export default RoomHeader;
