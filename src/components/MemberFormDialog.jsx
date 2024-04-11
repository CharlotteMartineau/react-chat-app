import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { createChatroomMembershipsRequest } from "../redux/ChatroomsRedux";
import { useParams } from "react-router-dom";
import { MuiChipsInput } from "mui-chips-input";
import { isValidEmail } from "../helpers/formHelper";

type Props = {
  open: Boolean,
  onClose: Function,
};

const MemberFormDialog = ({ open, onClose }: Props) => {
  let { chatroom_id: chatroomId } = useParams();
  const dispatch = useDispatch();
  const [membersEmails, setMemberEmail] = useState([]);

  const isMemberEmails = membersEmails?.length > 0;
  const isValidForm =
    isMemberEmails && membersEmails?.every((email) => isValidEmail(email));

  const handleClose = () => {
    onClose();
    setMemberEmail("");
  };

  const handleClickAddMember = () => {
    const membershipsAttributes = {
      chatroom_id: chatroomId,
      user_emails: membersEmails,
    };
    dispatch(createChatroomMembershipsRequest(membershipsAttributes));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle id="alert-dialog-title">Ajouter un membre</DialogTitle>
      <DialogContent>
        <MuiChipsInput
          placeholder="Taper l'email puis pressez la touche entrer"
          value={membersEmails}
          onChange={(event) => setMemberEmail(event)}
          fullWidth
          autoFocus
          size="small"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handleClickAddMember} disabled={!isValidForm}>
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MemberFormDialog;
