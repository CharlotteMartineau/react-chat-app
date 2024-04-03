import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  OutlinedInput,
} from "@mui/material";
import { createChatroomMembershipsRequest } from "../redux/ChatroomsRedux";
import { useParams } from "react-router-dom";

type Props = {
  open: Boolean,
  onClose: Function,
};

const MemberFormDialog = ({ open, onClose }: Props) => {
  let { chatroom_id: chatroomId } = useParams();
  const dispatch = useDispatch();
  const [memberEmail, setMemberEmail] = useState("");

  const handleClose = () => {
    onClose();
    setMemberEmail("");
  };

  const handleClickAddMember = () => {
    const membershipsAttributes = {
      chatroom_id: chatroomId,
      user_emails: memberEmail,
    };
    dispatch(createChatroomMembershipsRequest(membershipsAttributes));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogTitle id="alert-dialog-title">Ajouter un membre</DialogTitle>
      <DialogContent>
        <OutlinedInput
          id="member-form"
          value={memberEmail}
          onChange={(event) => setMemberEmail(event.target.value)}
          fullWidth
          autoFocus
          size="small"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Annuler</Button>
        <Button onClick={handleClickAddMember} autoFocus>
          Ajouter
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MemberFormDialog;
