import React, { useState } from "react";
import { IconButton, InputAdornment, Paper, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const MessageForm = () => {
  const [message, setMessage] = useState("");

  return (
    <Paper variant="contained" sx={{ p: 2 }}>
      <TextField
        id="filled-basic"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        variant="outlined"
        fullWidth
        multiline
        autoFocus
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="send message"
                onClick={() => console.log(message)}
              >
                <SendIcon color="primary" />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Paper>
  );
};

export default MessageForm;
